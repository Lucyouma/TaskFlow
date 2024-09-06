const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Import models
// const User = require('./models/User');
// const Task = require('./models/Task');
//
// // Middleware to parse JSON requests
// app.use(express.json());
//
// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/taskflow', { useNewUrlParser: true, useUnifiedTopology: true });
//
// // Basic route for the homepage
// app.get('/', (req, res) => {
//   res.send('TaskFlow Backend is running!');
//   });
//
//   // Task routes
//
//   // Create a new task
//   app.post('/api/tasks', async (req, res) => {
//     const newTask = new Task(req.body);
//       await newTask.save();
//         res.send('Task created!');
//         });
//
//         // Get all tasks
//         app.get('/api/tasks', async (req, res) => {
//           const tasks = await Task.find();
//             res.json(tasks);
//             });
//
//             // Update a task by ID
//             app.put('/api/tasks/:id', async (req, res) => {
//               await Task.findByIdAndUpdate(req.params.id, req.body);
//                 res.send('Task updated!');
//                 });
//
//                 // Delete a task by ID
//                 app.delete('/api/tasks/:id', async (req, res) => {
//                   await Task.findByIdAndDelete(req.params.id);
//                     res.send('Task deleted!');
//                     });
//
//                     // (User routes can be added here in the future)
//
//                     // Start the server
//                     app.listen(PORT, () => {
//                       console.log(`Server is running on port ${PORT}`);
//                       });
