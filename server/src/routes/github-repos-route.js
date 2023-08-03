const router = require("express").Router();
const { syncWithGitHub, getAll, getByNameOrId } = require('../controllers/github-repos-controller');

router.post('/sync', syncWithGitHub);
router.get('/repos/:name_or_id', getByNameOrId);
router.get('/repos', getAll);

module.exports = router;