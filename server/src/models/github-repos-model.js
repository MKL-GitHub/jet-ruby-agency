const sequelize = require("../configs/db-config");
const { DataTypes } = require("sequelize");

const GithubReposModel = sequelize.define("github-repos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
  },
  stargazers_count: {
    type: DataTypes.INTEGER,
  },
  language: {
    type: DataTypes.TEXT,
  },
  html_url: {
    type: DataTypes.TEXT,
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: false,
});

module.exports = GithubReposModel;