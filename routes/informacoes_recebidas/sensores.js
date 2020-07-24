var express = require('express');
var router = express.Router();

var sensores_controller = require('../../controllers/informacoes_recebidas/sensoresController');

// GET catalog home page.
router.get('/', sensores_controller.list);

module.exports = router;
