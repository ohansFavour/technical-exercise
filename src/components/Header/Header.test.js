import React from "react";
import { render, screen } from "@testing-library/react";

// component

import Header from "./Header";

describe("Header component", () => {
  beforeEach(() => {
    render(<Header />);
  });
  test("renders Title", () => {
    expect(screen.getByText("USERS CATALOGUE")).toBeInTheDocument();
  });
  test("renders Description", () => {
    expect(
      screen.getByText(
        /This page shows a list of the current users available in our system/
      )
    ).toBeInTheDocument();
  });
});
