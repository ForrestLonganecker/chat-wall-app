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
    
  }
}