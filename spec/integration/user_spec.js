const request = require('request');
const server = require('../../src/server');
const base = 'http://localhost:3000/users/';
const User = require('../../src/db/models').User;
const sequelize = require('../../src/db/models/index').sequelize;

describe('routes: users', () => {
  beforeEach((done) => {
    sequelize.sync({force: true})
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  });

  describe('GET /users/signUp', () => {
    it('should render a view with a sign up form', (done) => {
      request.get(`${base}sign_up`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain('Sign Up');
        done();
      });
    });

    // END USER GET SIGN UP 
  });

  describe('POST /users/create', () => {
    it('should create a new user and redirect', (done) => {
      const options = {
        url: base,
        form: {
          email: 'chatty@talk.com',
          password: '123456'
        }
      }

      request.post(options, (err, res, body) => {
        User.findOne({where: {email: 'chatty@talk.com'}})
        .then((user) => {
          expect(user).not.toBeNull();
          expect(user.email).toBe('chatty@talk.com');
          expect(user.id).toBe(1);
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
      });
    });

    it('should not create a new user with invalid attributes and redirect', (done) => {
      request.post({
        url: base,
        form: {
          email: 'nada',
          password: '123456'
        }
      }, 
      (err, res, body) => {
        User.findOne({where: {email: 'no'}})
        .then((user) => {
          expect(user).toBeNull();
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
      });
    });
    // END USER POST CREATE
  })

  
  // END OF USER INTEGRATION TESTS
})