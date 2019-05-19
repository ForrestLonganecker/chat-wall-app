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
  create(req, res, next){
    let newPost = {
      title: req.body.title,
      content: req.body.content,
      userId: req.user.id
    };

    postQueries.create(newPost, (err, post) => {
      if(err){
        req.flash('error', err);
        res.redirect(500, '/posts');
      } else {
        res.redirect(303, '/posts');
      }
    })
  }
}