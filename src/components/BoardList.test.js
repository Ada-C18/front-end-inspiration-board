import { render, screen } from '@testing-library/react';
import BoardList from './BoardList';
import testData from '../data/test.json';

test('renders board form title', () => {
  const setter = jest.fn();
  render(<BoardList boardListData={testData[0]} handleBoardSelect={setter} />);
  const boardListTitle = screen.getByText(/Boards/i);
  expect(boardListTitle).toBeInTheDocument();
});
