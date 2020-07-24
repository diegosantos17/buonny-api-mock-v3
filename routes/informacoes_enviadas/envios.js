var express = require('express');
var router = express.Router();

var envios_controller = require('../../controllers/informacoes_enviadas/enviosController');

// GET catalog home page.
router.get('/', envios_controller.list);

module.exports = router;
