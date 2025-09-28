const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return Hello Jenkins + Node.js!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello Jenkins + Node.js!');
  });
});

