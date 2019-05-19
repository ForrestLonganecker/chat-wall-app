const postQueries = require('../db/queries.posts.js')

module.exports = {
  index(req, res, next){
    postQueries.getPosts((err, posts) => {
      if(err){
        req.flash('error', err);
        res.redirect('/');
      } else {
        res.render('posts/index', {posts});
      }
    })
  },
}