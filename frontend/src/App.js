import React from 'react';
import './App.css';
import TaskList from './TaskList';

function App() {
	  return (
		      <div className="App">
		        <header className="App-header">
		          <h1>Welcome to TaskFlow!</h1>
		          <p>Your task management app is ready to go.</p>
		          <a
		            className="App-link"
		            href="/tasks"
		            target="_self"
		          >
		            View Tasks
		          </a>
		        </header>
		      </div>
		    );
}

export default App;
