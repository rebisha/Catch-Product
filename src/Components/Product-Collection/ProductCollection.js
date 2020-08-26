import React, { useEffect, useState } from "react";
// components
import ProductCard from "../Product-Card/ProductCard";
import Select from "../Select/Select";

import styles from "./productCollection.scss";

const ProductCollection = () => {
  const [product, setProduct] = useState([]);
  const [sortProduct, setSortProduct] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchProduct = await fetch(
          "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json"
        )
          .then(response => response.json())
          .then(data => data);

        setProduct(fetchProduct.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = e => {
    if (e.target.value === "lowest") {
      setProduct(product.sort((a, b) => a.salePrice - b.salePrice));
      setSortProduct("asc");
    } else if (e.target.value === "highest") {
      setProduct(product.sort((a, b) => b.salePrice - a.salePrice));
      setSortProduct("desc");
    }
  };

  return (
    <section className={styles.productCollection}>
      <Select onChange={handleChange} />
      <div className={styles.productCollection__products}>
        {sortProduct &&
          product.map(item => <ProductCard key={item.id} item={item} />)}
      </div>
    </section>
  );
};

export default ProductCollection;
