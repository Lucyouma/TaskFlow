const request = require('supertest');
const { app, mongoose } = require('../server');
const Task = require('../models/Task');
const { Types } = require('mongoose');

describe('Task API', () => {
  let server;
  let validTaskId;

  // Start the server before running the tests
  beforeAll(async () => {
    server = app.listen(3000);
    validTaskId = new Types.ObjectId(); //generate object id
    console.log(validTaskId);
    await mongoose.connection.dropDatabase();
  });

  // setup test data
  beforeEach(async () => {
    console.log('Inserting task with ID:', validTaskId); // Debugging line
    await Task.create({
      _id: validTaskId,
      description: 'Test Task',
      status: 'pending',
      dueDate: new Date(),
    });
  });

  // clean after each test
  afterEach(async () => {
    await Task.deleteMany({});
  });

  // Close the server after all tests
  afterAll(async () => {
    server.close();
    await mongoose.connection.close();
  });

  // Test for getting all tasks
  it('should get all tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  // Test for getting a single task by ID
  it('should get a single task by ID', async () => {
    const res = await request(app).get(`/api/tasks/${validTaskId}`);
    console.log('body', res.body);
    expect(res.statusCode).toBe(200);

    expect(res.body).toHaveProperty('_id', validTaskId.toString());
  });
});
