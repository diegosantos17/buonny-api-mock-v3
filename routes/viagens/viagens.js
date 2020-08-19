var express = require('express');
var router = express.Router();

var viagens_controller = require('../../controllers/viagens/viagensController');

// GET catalog home page.
router.get('/', viagens_controller.find);

module.exports = router;
