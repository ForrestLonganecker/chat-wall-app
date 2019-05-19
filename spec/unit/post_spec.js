const Post = require('../../src/db/models').Post;
const User = require('../../src/db/models').User;
const sequelize = require('../../src/db/models/index').sequelize;

describe('routes: users', () => {
  beforeEach((done) => {
    this.user;
    sequelize.sync({force: true})
    .then(() => {

      User.create({
        email: 'chatty@talk.com',
        password: '123456'
      })
      .then((user) => {
        this.user = user
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  });

  describe('#create()', () => {
    it('should create a new post object with the associated title, content and userId', (done) => {
      Post.create({
        title: 'Hello',
        content: 'Talking time',
        userId: this.user.id
      })
      .then((post) => {
        expect(post.title).toBe('Hello');
        expect(post.content).toBe('Talking time');
        expect(post.userId).toBe(this.user.id);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      })
    });

    it('should not create a post with missing content', (done) => {
      Post.create({
        title: 'Hello',
        userId: this.user.id
      })
      .then((post) => {
        done();
      })
      .catch((err) => {
        expect(err).not.toBeNull();
        expect(err.message).toContain('Post.content cannot be null');
        done();
      });
    });

    it('should not create a post with missing title', (done) => {
      Post.create({
        content: 'Talky time!',
        userId: this.user.id
      })
      .then((post) => {
        done();
      })
      .catch((err) => {
        expect(err).not.toBeNull();
        expect(err.message).toContain('Post.title cannot be null');
        done();
      });
    });

    it('should not create a post with missing userId', (done) => {
      Post.create({
        title: 'Hello',
        content: 'Talky time!'
      })
      .then((post) => {
        done();
      })
      .catch((err) => {
        expect(err).not.toBeNull();
        expect(err.message).toContain('Post.userId cannot be null');
        done();
      });
    });
    // END CREATE TESTS
  });
// END OF POST UNIT TEST SUITE
});