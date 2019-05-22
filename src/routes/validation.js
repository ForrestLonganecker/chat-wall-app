module.exports = {
  validateUsers(req, res, next){
    if(req.method === 'POST'){
      req.checkBody('email', 'must be valid email').isEmail();
      req.checkBody('password', 'must be at least 6 characters long').isLength({min: 6});
      req.checkBody('passwordConfirmation', 'must match password provided').optional().matches(req.body.password);
    }
    const errors = req.validationErrors();
    if(errors){
      console.log('{VALIDATION}: ', errors);
      req.flash('error', errors);
      return res.redirect(req.headers.referer);
    } else {
      return next();
    }
  },
  validatePost(req, res, next){
    if(req.method === 'POST'){
      req.checkBody('title', 'must be at least 2 characters').isLength({min: 2});
      req.checkBody('content', 'must be at least 10 characters long').isLength({min: 10});
    }
    const errors = req.validationErrors();
    if(errors){
      req.flash('error', errors);
      return res.redirect(req.headers.referer);
    } else {
      return next();
    }
  }
}