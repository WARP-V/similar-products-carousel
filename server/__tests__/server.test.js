const request = require('supertest');
const app = require('./../app.js');

it('Test GET /products-similar - should return an array of information on similar products', (done) => {
  request(app).get('/310805-408/similar')
    .expect(200)
    .expect(res => {
      expect(Array.isArray(res.body)).toBe(true);
    })
    .end(done);
});

it('Test GET /products-similar - should return an array of length 12', (done) => {
  request(app).get('/310805-408/similar')
    .expect(200)
    .expect(res => {
      expect(res.body.length).toEqual(12);
    })
    .end(done);
});

it('Test GET /products-similar - objects in array contain image source link', (done) => { 
  request(app).get('/310805-408/similar')
    .expect(200)
    .expect(res => {
      expect(typeof res.body[0].image_source).toBe('string');
    })
    .end(done);
});