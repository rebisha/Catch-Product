import React from "react";
import { array } from "prop-types";
// components
import ProductCard from "../Product-Card/ProductCard";

import styles from "./productCollection.scss";

const ProductCollection = ({ products }) => {
  return (
    <section className={styles.productCollection}>
      {products.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
};

ProductCollection.propTypes = {
  products: array,
};

export default ProductCollection;
