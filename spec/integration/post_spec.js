const request = require('request');
const server = require('../../src/server');
const base = 'http://localhost:3000/posts';
const User = require('../../src/db/models').User;
const Post = require('../../src/db/models').Post;
const sequelize = require('../../src/db/models/index').sequelize;

describe('routes: users', () => {
  beforeEach((done) => {
    this.user;
    this.post;
    sequelize.sync({force: true})
    .then(() => {
      User.create({
        email: 'chatty@talk.com',
        password: '123456'
      })
      .then((user) => {
        this.user = user;

        Post.create({
          title: 'Hello',
          content: 'talk talk',
          userId: this.user.id
        })
        .then((post) => {
          this.post = post;
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
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  });

  describe('GET /posts', () => {
    it('should render a view with a list of posts', (done) => {
      request.get(`${base}`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain('talk talk');
        done();
      });
    });
  });

// END POST SPEC TEST
});