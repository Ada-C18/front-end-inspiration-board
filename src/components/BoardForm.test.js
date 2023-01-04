import { render, screen } from '@testing-library/react';
import BoardForm from './BoardForm';

test('renders board form title', () => {
  render(<BoardForm />);
  const boardFormTitle = screen.getByText(/Create a New Board/i);
  expect(boardFormTitle).toBeInTheDocument();
});
