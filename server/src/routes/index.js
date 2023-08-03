const router = require('express').Router();
const githubReposRoute = require('./github-repos-route');

router.use("/github-repos", githubReposRoute);

module.exports = router;