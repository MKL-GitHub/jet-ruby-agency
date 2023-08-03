const axios = require('axios');
const { EventEmitter } = require('events');
const { apiUrl, fetchingInterval } = require('../configs/github-config');
const { saveRepos } = require('../data-access/github-repos-data-access');
const { RED_LOG } = require('../constants');

const SECONDS = 60000;
const GITHUB_REPOS_FETCHED = 'githubReposFetched';

const fetchingIntervalInMinutes = fetchingInterval * SECONDS;
const eventEmitter = new EventEmitter();

let fetchingIntervalId;

const fetchTrendingGithubRepos = async () => {
  const params = new URLSearchParams();

  params.append('q', 'stars:>0');
  params.append('sort', 'stars');
  params.append('order', 'desc');
  params.append('per_page', '20');

  const url = `${apiUrl}/search/repositories?${params}`;

  try {
    const response = await axios.get(url);

    eventEmitter.emit(GITHUB_REPOS_FETCHED, response.data.items);

    return { data: response.data.items };
  } catch (error) {
    const errorMessage = 'Error fetching trending repositories from GitHub: ' + error.message;
    console.error(RED_LOG, errorMessage);
    return { error: errorMessage };
  }
};

eventEmitter.on(GITHUB_REPOS_FETCHED, async (repos) => {
  saveRepos(repos)
})

const startFetchingTrendingGithubRepos = () => {
  const response = fetchTrendingGithubRepos();

  fetchingIntervalId = setInterval(() => {
    fetchTrendingGithubRepos();
  }, fetchingIntervalInMinutes);

  return response;
}

const restartFetchingTrendingGithubRepos = () => {
  clearInterval(fetchingIntervalId);
  const response = startFetchingTrendingGithubRepos();
  return response;
}

module.exports = {
  fetchTrendingGithubRepos,
  startFetchingTrendingGithubRepos,
  restartFetchingTrendingGithubRepos,
}

