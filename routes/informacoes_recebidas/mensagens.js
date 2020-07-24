var express = require('express');
var router = express.Router();

var mensagem_livre_controller = require('../../controllers/informacoes_recebidas/mensagemLivreController');

// GET catalog home page.
router.get('/', mensagem_livre_controller.list);

module.exports = router;
