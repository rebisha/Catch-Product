import React from "react";
import renderer from "react-test-renderer";
// component
import Select from "./Select";

it("Should render correctly", () => {
  const wrapper = renderer.create(<Select />);
  expect(wrapper).toMatchSnapshot();
});
