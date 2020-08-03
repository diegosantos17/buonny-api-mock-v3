var express = require('express');
var router = express.Router();

var telas_controller = require('../controllers/telasController');

router.get('/', telas_controller.find);
router.post('/', telas_controller.add);
router.put('/', telas_controller.update);

module.exports = router;
