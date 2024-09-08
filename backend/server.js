const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/Task');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/taskflow', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => console.log('MongoDB connected successfully'))
	.catch(err => console.error('MongoDB connection error:', err));

// Basic route for the homepage
app.get('/', (req, res) => {
	res.send('TaskFlow Backend is running!');
});

// Task routes

// Create a new task
app.post('/api/tasks', async (req, res) => {
	try {
		const newTask = new Task(req.body);
		await newTask.save();
		res.status(201).send('Task created!');
	} catch (error) {
		res.status(400).send('Error creating task');
	}
});

// Get all tasks
app.get('/api/tasks', async (req, res) => {
try {
	const tasks = await Task.find();
	res.json(tasks);
 } catch (error) {
	res.status(500).send('Error retrieving tasks');
 }

});

// Update a task by ID
app.put('/api/tasks/:id', async (req, res) => {
	try {
		await Task.findByIdAndUpdate(req.params.id, req.body);
		res.send('Task updated!');
	      } catch (error) {
		    res.status(400).send('Error updating task');
		  }
});

// Delete a task by ID
app.delete('/api/tasks/:id', async (req, res) => {
try {
	await Task.findByIdAndDelete(req.params.id);
	res.send('Task deleted!');
 } catch (error) {
	res.status(400).send('Error deleting task');
	  }
});

// Export the app instance for testing
module.exports = app;

// Start the server if not in testing mode
if (require.main === module) {
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
}
