require('dotenv').config();
const express = require('express');
const cors = require('cors');

const sequelize = require("./configs/db-config");
const routes = require('./routes');
const { startFetchingTrendingGithubRepos } = require('./services/github-service');

const PORT = process.env.PORT;

const app = express();

// Start fetching github repos every x minutes.
// 'x minutes' is specified in the config file
startFetchingTrendingGithubRepos();

app.use(cors());
app.use(express.json());

app.use('/api', routes)

async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  }
  catch (e) {
    console.error(e);
  }
}

startServer();