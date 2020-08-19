require("dotenv");


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var alvosRouter = require('./routes/alvos');
var telasRouter = require('./routes/telas');
var fieldsRouter = require('./routes/fields');
var veiculosRouter = require('./routes/veiculos/veiculos');
var viagensRouter = require('./routes/viagens/viagens');
var atuadoresRouter = require('./routes/veiculos/atuadores');
var macrosRouter = require('./routes/informacoes_recebidas/macros');
var temposRouter = require('./routes/informacoes_recebidas/tempos');
var eventosRouter = require('./routes/informacoes_recebidas/eventos');
var sensoresRouter = require('./routes/informacoes_recebidas/sensores');
var mensagensRouter = require('./routes/informacoes_recebidas/mensagens');
var mensagensRecebidasRouter = require('./routes/informacoes_recebidas/mensagens_recebidas');
var authenticationsRouter = require('./routes/authentication');

var enviosRouter = require('./routes/informacoes_enviadas/envios');

var app = express();
app.use(cors());

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);

app.use('/locais', alvosRouter);
app.use('/telas', telasRouter);
app.use('/fields', fieldsRouter);
app.use('/veiculos/atuadores', atuadoresRouter);
app.use('/veiculos', veiculosRouter);
app.use('/informacoes_recebidas/macros_enviadas_motorista', macrosRouter);
app.use('/informacoes_recebidas/tempos', temposRouter);
app.use('/informacoes_recebidas/eventos', eventosRouter);
app.use('/informacoes_recebidas/mensagens_livres', mensagensRouter);
app.use('/informacoes_recebidas/mensagens_recebidas', mensagensRecebidasRouter);
app.use('/informacoes_recebidas/sensores', sensoresRouter);
app.use('/informacoes_enviadas/envios', enviosRouter);
app.use('/auth', authenticationsRouter);
app.use('/viagens', viagensRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
