import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
	  render(<App />);
	  const welcomeMessage = screen.getByText(/welcome to taskflow/i);
	  expect(welcomeMessage).toBeInTheDocument();
});

test('renders view tasks link', () => {
	  render(<App />);
	  const viewTasksLink = screen.getByText(/view tasks/i);
	  expect(viewTasksLink).toBeInTheDocument();
});
