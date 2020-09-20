import React from "react";
import { shallow } from "enzyme";

// component
import Header from "./Header";

describe("Header Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("renders the heading", () => {
    expect(wrapper.contains("USERS CATALOGUE")).toEqual(true);
  });
});
