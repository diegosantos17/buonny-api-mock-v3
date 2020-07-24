require("dotenv");


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var alvosRouter = require('./routes/alvos');
var atuadoresRouter = require('./routes/veiculos/atuadores');
var macrosRouter = require('./routes/informacoes_recebidas/macros');
var temposRouter = require('./routes/informacoes_recebidas/tempos');
var eventosRouter = require('./routes/informacoes_recebidas/eventos');
var mensagensRouter = require('./routes/informacoes_recebidas/mensagens');
var authenticationsRouter = require('./routes/authentication');

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
app.use('/veiculos/atuadores', atuadoresRouter);
app.use('/informacoes_recebidas/macros_enviadas_motorista', macrosRouter);
app.use('/informacoes_recebidas/tempos', temposRouter);
app.use('/informacoes_recebidas/eventos', eventosRouter);
app.use('/informacoes_recebidas/mensagens_livres', mensagensRouter);


app.use('/authentications', authenticationsRouter);



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
