import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import TaskList from './TaskList';

function App() {
	  return (
		      <Router>
		        <div className="App">
		          <header className="App-header">
		            <h1>Welcome to TaskFlow!</h1>
		            <p>Your task management app is ready to go.</p>
		            <Link className="App-link" to="/tasks">
		              View Tasks
		            </Link>
		          </header>

		          <main>
		            {/* Updated Switch to Routes */}
		            <Routes>
		              {/* Updated Route to use element instead of component */}
		              <Route path="/tasks" element={<TaskList />} />
		              {/* Add more routes here as needed */}
		            </Routes>
		          </main>
		        </div>
		      </Router>
		    );
}

export default App;
