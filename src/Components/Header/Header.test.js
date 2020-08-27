import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
// component
import Header from "./Header";

it("Should have an image", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find("img").exists()).toBe(true);
});

it("Should render correctly", () => {
  const wrapper = renderer.create(<Header />);
  expect(wrapper).toMatchSnapshot();
});
