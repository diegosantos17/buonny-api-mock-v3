var express = require('express');
var router = express.Router();

var telas_controller = require('../controllers/telasController');

//Alterando campo
router.put('/:idField', telas_controller.update);

module.exports = router;
