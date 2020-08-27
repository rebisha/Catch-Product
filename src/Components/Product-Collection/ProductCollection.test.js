import React from "react";
import renderer from "react-test-renderer";
// component
import ProductCollection from "./ProductCollection";

it("Should render correctly", () => {
  const products = [
    {
      id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
      name: "Buy Olaplex No. 3 Hair Perfector",
      salePrice: 3145,
      retailPrice: 5000,
      imageUrl:
        "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
      quantityAvailable: 65,
    },
    {
      id: "46397d56-2726-45de-8514-d8ed6984a600",
      name:
        "4 x 60pk Finish Quantum Max Powerball Super Charged Dishwashing Caps Lemon Sparkle",
      salePrice: 5900,
      retailPrice: 18417,
      imageUrl:
        "https://s.catch.com.au/images/product/0001/1909/5d47c0d64988e613254534_w200.jpg",
      quantityAvailable: 56,
    },
  ];

  const wrapper = renderer.create(<ProductCollection products={products} />);
  expect(wrapper).toMatchSnapshot();
});
