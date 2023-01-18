import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders inspo board header", () => {
  render(<App />);
  const inspoHeader = screen.getByText(/Inspiration Board/i);
  expect(inspoHeader).toBeInTheDocument();
});
