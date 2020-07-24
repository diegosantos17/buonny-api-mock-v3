var express = require('express');
var router = express.Router();

var mensagem_recebida_controller = require('../../controllers/informacoes_recebidas/mensagemRecebidaController');

// GET catalog home page.
router.get('/', mensagem_recebida_controller.list);

module.exports = router;
