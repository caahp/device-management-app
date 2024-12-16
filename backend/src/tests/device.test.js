const request = require('supertest');
const app = require('../app');

describe('Device Routes', () => {
  it('Should create a new device', async () => {
    const response = await request(app).post('/devices').send({
      categoryId: 4,
      color: 'Black',
      partNumber: 12478,
    });

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      categoryId: 4,
      color: 'Black',
      partNumber: 12478,
    });
  });

  it('Should return all devices', async () => {
    const response = await request(app).get('/devices');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('Should delete a device by ID', async () => {
    const createdDevice = await request(app).post('/devices').send({
      categoryId: 2,
      color: 'Silver',
      partNumber: 54321,
    });

    const deleteResponse = await request(app).delete(`/devices/${createdDevice.body.id}`);
    expect(deleteResponse.status).toBe(204);
  });

  it('Should return the total number of devices by category', async () => {
    const response = await request(app).get('/devices/total');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
