import React from "react";
import { screen, render } from "@testing-library/react";

import SummaryItem from "./SummaryItem";

const testItem = {
  title: "test",
  value: "20",
};

describe("SummaryItem Component", () => {
  beforeEach(() => {
    render(<SummaryItem item={testItem} />);
  });

  test("should render a list item", () => {
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  test("should render a Title", () => {
    expect(screen.getByText(`${testItem.title}:`)).toBeInTheDocument();
  });

  test("should render a Value", () => {
    expect(screen.getByText(testItem.value)).toBeInTheDocument();
  });
});
