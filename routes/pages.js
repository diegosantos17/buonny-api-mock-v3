var express = require('express');
var router = express.Router();

/* Zoom Exemplo. */
router.get('/zoom', function(req, res, next) {
  res.render('zoom', { title: 'Zoom Exemplo' });
});

/* Zoom Exemplo. */
router.get('/dash', function(req, res, next) {
  res.render('dash', { title: 'Dash' });
});

router.get('/dash-ame-sul', function(req, res, next) {
  res.render('dash-ame-sul', { title: 'Dash América do Sul' });
});


module.exports = router;
