var express = require('express');
var router = express.Router();

var telas_controller = require('../controllers/telasController');

router.get('/', telas_controller.find);

//Adicionando campo
router.post('/:idTela/fields', telas_controller.add);
router.put('/', telas_controller.update);

module.exports = router;
