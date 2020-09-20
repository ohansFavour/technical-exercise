import React from "react";
import { shallow } from "enzyme";

// component
import App from "./App";
import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import Users from "./components/Users/Users";

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders <Header/> component", () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it("renders <Users/> component", () => {
    expect(wrapper.find(Users).length).toBe(1);
  });

  it("renders <Summary/> component", () => {
    expect(wrapper.find(Summary).length).toBe(1);
  });
});
