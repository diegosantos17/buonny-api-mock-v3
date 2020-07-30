var express = require('express');
var router = express.Router();

var telas_controller = require('../controllers/telasController');

router.get('/', telas_controller.find);

module.exports = router;
