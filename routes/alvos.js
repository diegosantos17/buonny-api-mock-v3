var express = require('express');
var router = express.Router();
var utils = require('./utils');

var alvos_controller = require('../controllers/alvosController');

// GET catalog home page.
router.get('/', alvos_controller.list);

module.exports = router;
