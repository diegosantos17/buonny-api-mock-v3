var express = require('express');
var router = express.Router();


var authentication_controller = require('../controllers/authenticationController');

router.post('/', authentication_controller.login);
router.get('/logout', authentication_controller.logout);

module.exports = router;
