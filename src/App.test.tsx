import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders SWADE Lookups heading", () => {
  render(<App />);
  const h1Element = screen.getByText(/SWADE Lookups/);
  expect(h1Element).toBeInTheDocument();
});
