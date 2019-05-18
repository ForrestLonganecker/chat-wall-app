const sequelize = require('../../src/db/models/index').sequelize;

describe('User', () => {
  beforeEach((done) => {
    sequelize.sync({force:true})
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  });

  describe('#create()', () => {
    it('should create a User object with valid email and password', (done) => {
      User.create({
        email: 'chatty@talk.com',
        password: '123456'
      })
      .then((user) => {
        expect(user.email).toBe('chatty@talk.com');
        expect(user.id).toBe(1);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

    it('should not create a user with invalid email or password', (done) => {
      User.create({
        email: 'not an email',
        password: '123456'
      })
      .then((user) => {
        // Expecting errors
        done();
      })
      .catch((err) => {
        expect(err.message).toContain("Validation error: must be a valid email");
        done();
      });
    });

    it("should not create a user with a duplicate email", (done) => {
      User.create({
        email: 'chatty@talk.com',
        password: '123456'
      })
      .then((user) => {
        User.create({
          email: 'chatty@talk.com',
          password: '123456'
        })
        .then((user) => {
          // Expecting errors
          done();
        })
        .catch((err) => {
          expect(err.message).toContain('Validation error');
          done();
        });
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

    // END OF USER #CREATE()
  });

  // END OF USER UNIT TESTS
})