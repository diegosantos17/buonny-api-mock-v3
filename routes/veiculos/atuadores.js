var express = require('express');
var router = express.Router();

var atuadores_controller = require('../../controllers/veiculos/atuadoresController');

// GET catalog home page.
router.get('/', atuadores_controller.list);

module.exports = router;
