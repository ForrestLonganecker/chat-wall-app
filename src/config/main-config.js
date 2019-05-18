require('dotenv').config();
const path = require('path');
const viewsFolder = path.join(__dirname, '..', 'views');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
// passport config goes here

module.exports = {
  init(app, express){
    app.set('views', viewsFolder);
    app.set('view engine', 'ejs');
    app.use(logger('dev'));
    app.use(session({
      secret: process.env.cookieSecret,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 1.21e+9 }
    }));
    app.use(bodyParser.urlencoded({ extended: true }));
  }
}