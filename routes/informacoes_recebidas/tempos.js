var express = require('express');
var router = express.Router();

var tempos_controller = require('../../controllers/informacoes_recebidas/temposController');

// GET catalog home page.
router.get('/', tempos_controller.list);

module.exports = router;
