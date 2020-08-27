import React from "react";
import { fetch } from "whatwg-fetch";
import renderer from "react-test-renderer";
// component
import ProductPage from "./ProductPage";

it("Calls api to get list of products", async () => {
  expect.assertions(2);

  const fetchProduct = await fetch(
    "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json"
  );
  const data = await fetchProduct.json();
  const products = data.results;

  expect(products).toBe(products);
  expect(products.length).toEqual(36);
});

it("tests error with async/await", async () => {
  expect.assertions(2);
  try {
    const fetchProduct = await fetch(
      "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json"
    );
    const data = await fetchProduct.json();
    const products = data.results;
    expect(products).toBe(false);
  } catch (error) {
    expect(error).toBe(error);
  }
});

it("Should render correctly", () => {
  const element = renderer.create(<ProductPage />);
  expect(element).toMatchSnapshot();
});
