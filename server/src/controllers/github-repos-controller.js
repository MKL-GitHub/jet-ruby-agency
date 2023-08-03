const { GREEN_LOG, RED_LOG } = require('../constants');
const { GithubReposModel } = require('../models');
const { restartFetchingTrendingGithubRepos } = require('../services/github-service');

const syncWithGitHub = async (req, res) => {
  try {
    const response = await restartFetchingTrendingGithubRepos();

    if (response.error) {
      console.log(RED_LOG, response.error);

      res.status(403).json({ error: response.error })
    } else {
      console.log(GREEN_LOG, 'GitHub repositories synced successfully!');

      res.json({
        message: 'Sync with GitHub initiated',
      });
    }

  } catch (error) {
    const errorMessage = 'Error syncing with GitHub: ' + error.message;
    console.error(RED_LOG, errorMessage);
    res.status(500).json({ error: errorMessage });
  }
}

const getAll = async (req, res) => {
  try {
    const repos = await GithubReposModel.findAll();

    console.log(GREEN_LOG, 'Github repos have been successfully retrieved');

    res.json(repos);
  } catch (error) {
    const errorMessage = 'Error getting repos from DB: ' + error.message;
    console.error(RED_LOG, errorMessage);
    res.status(500).json({ error: errorMessage });
  }
}

const getByNameOrId = async (req, res) => {
  const nameOrId = req.params.name_or_id;

  try {
    let repo;

    if (!isNaN(nameOrId)) {
      repo = await GithubReposModel.findByPk(nameOrId);
    } else {
      repo = await GithubReposModel.findOne({ where: { name: nameOrId } });
    }

    if (!repo) {
      const error = 'Repository not found';
      console.error(RED_LOG, error);
      return res.status(404).json({ error });
    }

    res.json(repo);
  } catch (error) {
    const errorMessage = 'Error getting a repo by name or id from DB: ' + error.message;
    console.error(RED_LOG, errorMessage);
    res.status(500).json({ error: errorMessage });
  }
}

module.exports = {
  syncWithGitHub,
  getAll,
  getByNameOrId,
}