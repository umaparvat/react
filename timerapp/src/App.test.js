import { render, screen } from '@testing-library/react';
import App from './App';

test('renders timer react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/current date and time is/i);
  expect(linkElement).toBeInTheDocument();
});
