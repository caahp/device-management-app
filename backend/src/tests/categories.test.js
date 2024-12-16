const request = require('supertest');
const app = require('../app');

describe('Categories Routes', () => {
  it('Should create a new category', async () => {
    const response = await request(app).post('/categories').send({
      name: 'Computers',
    });

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({ name: 'Computers' });
  });

  it('Should return all categories', async () => {
    const response = await request(app).get('/categories');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('Should delete a category by ID', async () => {
    const createdCategory = await request(app).post('/categories').send({
      name: 'Smartphones',
    });

    const deleteResponse = await request(app).delete(`/categories/${createdCategory.body.id}`);
    expect(deleteResponse.status).toBe(204);
  });

});
