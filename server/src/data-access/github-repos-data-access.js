const { GREEN_LOG, RED_LOG } = require("../constants");
const { GithubReposModel } = require("../models");

async function saveRepos(repos) {
  await deleteAllRepos();

  try {
    for (const repo of repos) {
      await GithubReposModel.create({
        id: repo.id,
        name: repo.name,
        stargazers_count: repo.stargazers_count,
        language: repo.language,
        html_url: repo.html_url,
        description: repo.description,
      });
    }

    console.log(GREEN_LOG, 'Github repos was successfully saved to DB');
  } catch (error) {
    console.error(RED_LOG, 'Error saving github repos to DB:', error);
  }
}

async function deleteAllRepos() {
  try {
    await GithubReposModel.destroy({ where: {} });
    console.log(GREEN_LOG, 'Github repos was successfully deleted from DB');
  } catch (error) {
    console.error(RED_LOG, 'Error deleting github repos from DB:', error);
  }
}

module.exports = {
  saveRepos,
  deleteAllRepos,
};