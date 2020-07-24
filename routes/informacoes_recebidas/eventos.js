var express = require('express');
var router = express.Router();

var eventos_controller = require('../../controllers/informacoes_recebidas/eventosController');

// GET catalog home page.
router.get('/', eventos_controller.list);

module.exports = router;
