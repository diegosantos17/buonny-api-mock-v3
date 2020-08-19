var express = require('express');
var router = express.Router();

var viagens_controller = require('../../controllers/viagens/viagensController');

// GET catalog home page.
router.get('/', viagens_controller.find);
router.get('/filtros', viagens_controller.findFiltros);
router.get('/alertas', viagens_controller.findAlertas);

module.exports = router;
