const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	  description: String,
	  status: String,
	  dueDate: Date
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
