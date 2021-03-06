var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var socket = require('./routes/socket');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.set("jsonp callback", true);
//app.set('jsonp callback name', 'cb');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/socket', socket);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//var io = require('socket.io').listen(app.listen(3000));
var io = require('socket.io');
app.io = io;

// io.on('connection', function (socket) {
//   socket.emit('warmup', { message: 'welcome to the chat using socket.io' });

//   socket.on('send', function (data) {
//     io.sockets.emit('message', data);
//   });

//   socket.on('cleanup', function () {
//     io.sockets.emit('cleanup', '');
//   });
// });




module.exports = app;
