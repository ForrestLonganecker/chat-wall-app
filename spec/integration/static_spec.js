const request = require('request');
const server = require('../../src/server');
const base = 'http://localhost:3000/';

describe('routes: static', () => {
  
  describe('GET /', () => {
    it('shold return a status code 200 and say "welcome to the Wall" in the body', (done) => {
      request.get(base, (err, res, body) => {
        console.log('{TEST 1} BODY: ', body);
        expect(res.statusCode).toBe(200);
        expect(body).toContain('Welcome to the Wall');
        expect(err).toBeNull();
        done();
      });
    });
  });

  // END OF STATIC ROUTES
});