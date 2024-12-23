import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Vite + React text in the App component', () => {
  render(<App />);
  const textElement = screen.getByText(/Vite \+ React/i);
  expect(textElement).toBeInTheDocument();
  //screen.debug(); // prints out the jsx in the App component unto the command line
});