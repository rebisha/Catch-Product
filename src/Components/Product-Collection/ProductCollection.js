import React, { useEffect, useState } from "react";
// components
import ProductCard from "../Product-Card/ProductCard";

import styles from "./productCollection.scss";

const ProductCollection = () => {
  const [product, setProduct] = useState([]);

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

  return (
    <section className={styles.productCollection}>
      {product.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ProductCollection;
