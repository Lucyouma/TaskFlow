const request = require('supertest');
const app = require('../server');

describe('Task API', () => {
	let server;

// Start the server before running the tests
beforeAll(() => {
	server = app.listen(3000);
});

// Close the server after all tests
afterAll((done) => {
	server.close(done);
});

// Test for getting all tasks
it('should get all tasks', async () => {
	const res = await request(app).get('/api/tasks');
	expect(res.statusCode).toEqual(200);
	expect(res.body).toBeInstanceOf(Array);
});

// Test for getting a single task by ID
it('should get a single task by ID', async () => {
	const taskId = 'some-valid-task-id';
	const res = await request(app).get(`/api/tasks/${taskId}`);
	expect(res.statusCode).toEqual(200);
	expect(res.body).toHaveProperty('_id', taskId);
	});
});
