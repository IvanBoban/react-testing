import "@testing-library/react/dont-cleanup-after-each";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";

import App from "./App";

describe("Click button and change text", () => {
  beforeAll(() => {
    render(<App />);
  });

  afterAll(() => {
    cleanup();
  });

  it("Initial text should be visible", () => {
    const initialText = screen.getByText(/Unclicked/i);
    expect(initialText).toBeInTheDocument();
  });

  it("Click button and change text", () => {
    const clickButton = screen.getByRole("button");
    fireEvent.click(clickButton);
    const changedText = screen.getByText(/Clicked/i);
    expect(changedText).toBeInTheDocument();
  });
});
