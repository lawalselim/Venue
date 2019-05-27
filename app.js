var createError = require('http-errors');
const express = require('express');
const path = require('path');
const flash = require('connect-flash');
let port = 5000;
//const session = require('express-session')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressHbs = require('express-handlebars'); 
const mongoose = require('mongoose');
const passport = require('passport');
//const keys = require('./keys.js');
const bodyParser = require('body-parser');
const validator = require('express-validator');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

/*mongoose.Promise = global.Promise;
mongoose.connect(keys.mongodb.dbURI, { useNewUrlParser: true }).then(//useNewUrlParser: true,
  function(res){
   console.log("Connected to Database Successfully.");
  }
).catch(function(err){
  console.log("Connection to Database failed.");
  console.log(err);
});

const sess = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {}
}
*/


//require('./config/passport');


//LOG EVERY REQUEST THAT COMES IN
app.use((req,res,next)=>{
 console.log(`${new Date().toString()} => ${req.originalUrl}`);
 next();
});




// view engine setup
app.engine('.hbs', expressHbs({ defaultLayout: 'layout', extname: '.hbs' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(validator());
//app.use(session(sess))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(port,()=>{
  console.log(`listening to server on port ${port}`)
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
