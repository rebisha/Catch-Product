import React from "react";

import styles from "./productCard.scss";

const ProductCard = () => {
  return (
    <div className={styles.productCardWrapper}>
      <img
        className={styles.productCardImage}
        src="https://s.catch.com.au/static/catch/images/logo-83d9b21199.svg"
        alt="image"
      />
      <div className={styles.productCardItem}>
        <h3 className={styles.productCardTitle}> Product Name</h3>
        <p className={styles.productCardPrice}> $99.99 </p>
      </div>
    </div>
  );
};

export default ProductCard;
