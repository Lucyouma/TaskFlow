const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  description: String,
  status: String,
  dueDate: Date,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
