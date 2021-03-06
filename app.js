var createError = require('http-errors');
var express = require('express');
var app = express()

var path = require('path');

var logger = require('morgan');

var indexRouter = require('./routes/index');
var cartRouter = require('./routes/cart');
var usersRouter = require('./routes/users');
const productsRouter = require('./routes/product')
var apisRouter = require('./routes/apis');
const session = require('express-session');

//Requerir los middlewares
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')
var cookieParser = require('cookie-parser');

//Requerir method over-override
const methodOverride = require('method-override')

// view engine setup
app.set('views', path.resolve( 'views'));
app.set('view engine', 'ejs');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'testsecret',
  resave: false,
  saveUninitialized: false
}));
app.use(cookieParser());
app.use(userLoggedMiddleware);
app.use('/', indexRouter);
app.use('/cart', cartRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/api', apisRouter);
app.use(methodOverride('_method'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
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

module.exports = app;
