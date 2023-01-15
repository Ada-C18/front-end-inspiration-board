import { render, screen } from '@testing-library/react';
import CurrentBoard from './CurrentBoard';
import testData from '../data/test.json';

test('renders selected board 1', () => {
  render(<CurrentBoard boardListData={testData[0]} currentBoardState={1} />);
  const currentBoardName = screen.getByText(/Backpacking/i);
  expect(currentBoardName).toBeInTheDocument();
  const currentBoardOwner = screen.getByText(/Kiwi/i);
  expect(currentBoardOwner).toBeInTheDocument();
});

test('renders selected board 2', () => {
  render(<CurrentBoard boardListData={testData[0]} currentBoardState={2} />);
  const currentBoardName = screen.getByText(/Bday/i);
  expect(currentBoardName).toBeInTheDocument();
  const currentBoardOwner = screen.getByText(/Ferret/i);
  expect(currentBoardOwner).toBeInTheDocument();
});
