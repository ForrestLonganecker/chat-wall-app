const Post = require('./models/').Post;

module.exports = {
  getPosts(callback){
    return Post.findAll()
    .then((posts) => {
      callback(null, posts);
    })
    .catch((err) => {
      callback(err);
    })
  },
}