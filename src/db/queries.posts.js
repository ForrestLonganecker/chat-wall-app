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
  create(newPost, callback){
    return Post.create({
      title: newPost.title,
      content: newPost.content,
      userId: newPost.userId
    })
    .then((post) => {
      callback(null, post);
    })
    .catch((err) => {
      callback(err);
    })
  },
}