import React, { useEffect, useState } from "react";
// components
import ProductCollection from "../Product-Collection/ProductCollection";
import Select from "../Select/Select";

import styles from "./productPage.scss";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [sortProduct, setSortProduct] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchProduct = await fetch(
          "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json"
        );
        const data = await fetchProduct.json();
        setProduct(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = e => {
    setSortProduct(e.target.value);
    switch (e.target.value) {
      case "lowest":
        return setProduct(product.sort((a, b) => a.salePrice - b.salePrice));
      case "highest":
        return setProduct(product.sort((a, b) => b.salePrice - a.salePrice));
      default:
        return product;
    }
  };

  return (
    <section className={styles.productPage}>
      <Select onChange={handleChange} />
      <ProductCollection products={product} />
    </section>
  );
};

export default ProductPage;
