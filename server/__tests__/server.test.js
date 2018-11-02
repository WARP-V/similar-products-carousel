const request = require('supertest');
const app = require('./../app.js');

describe('GET /:product_sku/similar', () => {
  it('should return an array of information on similar products', () => {
    return request(app).get('/310805-408/similar')
      .expect(200)
      .expect(res => {
        expect(Array.isArray(res.body)).toBe(true);
      });
  });

  it('should return an array of length 12', () => {
    return request(app).get('/310805-408/similar')
      .expect(200)
      .expect(res => {
        expect(res.body.length).toEqual(12);
      });
  });

  test('objects in array contain image source link', () => { 
    return request(app).get('/310805-408/similar')
      .expect(200)
      .expect(res => {
        expect(typeof res.body[0].image_source).toBe('string');
      });
  });
});
