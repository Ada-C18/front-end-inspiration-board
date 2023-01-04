import { render, screen } from '@testing-library/react';
import App from './App';

test('renders inspiration board title', () => {
  render(<App />);
  const appTitle = screen.getByText(/Inspiration Board/i);
  expect(appTitle).toBeInTheDocument();
});
