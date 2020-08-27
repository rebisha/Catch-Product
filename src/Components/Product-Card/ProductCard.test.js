import React from "react";
import renderer from "react-test-renderer";
// component
import ProductCard from "./ProductCard";

it("Should render correctly", () => {
  const item = {
    id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
    name: "Buy Olaplex No. 3 Hair Perfector",
    salePrice: 3145,
    retailPrice: 5000,
    imageUrl:
      "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
    quantityAvailable: 65,
  };

  const wrapper = renderer.create(<ProductCard item={item} />);
  expect(wrapper).toMatchSnapshot();
});

it("Should dispaly sold-out for zero quantity availability", () => {
  const item = {
    id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
    name: "Buy Olaplex No. 3 Hair Perfector",
    salePrice: 3145,
    retailPrice: 5000,
    imageUrl:
      "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
    quantityAvailable: 0,
  };

  const wrapper = renderer.create(<ProductCard item={item} />);
  expect(wrapper).toMatchSnapshot();
});