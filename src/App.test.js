import { render, screen } from '@testing-library/react';
import App from './App';
// import { getAllBoards } from './API/InspirationAPI';
import testData from './data/test.json';

const getAllBoards = jest.fn();
getAllBoards.mockReturnValue(testData[0]);

test('renders inspiration board title', () => {
  render(<App />);
  const appTitle = screen.getByText(/Inspiration Board/i);
  expect(appTitle).toBeInTheDocument();
});
