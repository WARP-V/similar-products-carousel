const request = require('supertest');
const app = require('./../server/app.js');
// describe('Test the root path', () => {
//   test('It should return 200 for GET method', () => {
//     return request(app).get('/').expect(200);
//   });

//   test('It should return 404 for POST method', () => {
//     return request(app).post('/').expect(404);
//   });
// });
// It should return an array of 12 objects that include an image_source property

it('Test GET /products-similar - return an array of information on similar products', (done) => {
  request(app).get('/products-similar?product_sku=310805-408')
    .expect(200)
    .expect(res => {
      expect(Array.isArray(res.body)).toBe(true);
    })
    .end(done);
});

it('Test GET /products-similar - returned array are of length 12', (done) => {
  request(app).get('/products-similar?product_sku=310805-408')
    .expect(200)
    .expect(res => {
      expect(res.body.length).toEqual(12);
    })
    .end(done);
});

it('Test GET /products-similar - objects in array contain image source link', (done) => { 
  request(app).get('/products-similar?product_sku=310805-408')
    .expect(200)
    .expect(res => {
      expect(typeof res.body[0].image_source).toBe('string');
    })
    .end(done);
});