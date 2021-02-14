import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const homeprompt = screen.getByText(/Act Out/i);
  expect(homeprompt).toBeInTheDocument();
});
