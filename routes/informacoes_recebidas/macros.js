var express = require('express');
var router = express.Router();

var macros_controller = require('../../controllers/informacoes_recebidas/macrosController');

// GET catalog home page.
router.get('/', macros_controller.list);

module.exports = router;
