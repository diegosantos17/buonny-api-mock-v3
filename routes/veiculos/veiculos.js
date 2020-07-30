var express = require('express');
var router = express.Router();

var veiculos_controller = require('../../controllers/veiculos/veiculosController');

// GET catalog home page.
router.get('/:placa/placa', veiculos_controller.findPlaca);

module.exports = router;
