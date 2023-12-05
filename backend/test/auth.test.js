const request = require('supertest');
const app = require('../server');
const db = require('../models');
const faker = require('@faker-js/faker');
const User = db.user;

describe('Create user', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await db.sequelize.close();    
  });

  it('should return 200 and successfully register user if request data is ok', async () => {
    const newUser = {
      password: 'password1',
      username: 'Adri',
      email: 'adri2000@gmail.com',
      isAdmin: false,
    };

    try {
      const res = await request(app).post('/api/users').send(newUser);

      expect(res.status).toBeGreaterThanOrEqual(200);

      expect(res.body).toHaveProperty('user');
      expect(res.body.user).toHaveProperty('username', newUser.username);
      expect(res.body.user).toHaveProperty('email', newUser.email);
      expect(res.body.user).toHaveProperty('isAdmin', newUser.isAdmin);
      expect(res.body.user).not.toHaveProperty('password');
      expect(res.body).toHaveProperty('access_token');

      expect(res.body.user).toEqual({
        id: expect.anything(),
        username: newUser.username,
        email: newUser.email,
        isAdmin: false,
      });

      const dbUser = await User.findByPk(res.body.user.id);
      expect(dbUser).toBeDefined();
      expect(dbUser.password).not.toBe(newUser.password);
      expect(dbUser).toMatchObject({ password: expect.anything(), username: newUser.username, email: newUser.email, isAdmin: newUser.isAdmin });
    } catch (error) {
      console.error('Test error:', error);
      throw error;
    }
  });

  it('should return 400 and unsuccessfully register user if request data is not ok', async () => {
    const newUser = {
      password: '',
      username: 'Adri',
      email: 'adri2000@gmail.com',
      isAdmin: false,
    };

    try {
      const res = await request(app).post('/api/users').send(newUser);

      expect(res.status).toBeGreaterThanOrEqual(400);
      expect(res.body).not.toHaveProperty('user');

      expect(User).toBeDefined();
    } catch (error) {
      console.error('Test error:', error);
      throw error;
    }
  });
});