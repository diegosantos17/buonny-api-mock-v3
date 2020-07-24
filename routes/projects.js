var express = require('express');
var router = express.Router();
var utils = require('./utils');

var project_controller = require('../controllers/projectController');

// GET catalog home page.
router.get('/', utils.verifyJWT, project_controller.project_list);
router.get('/sync_jira', project_controller.sync_jira);
//router.get('/sync_jira', utils.verifyJWT, project_controller.sync_jira);

module.exports = router;
