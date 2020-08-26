import React from "react";
import { object } from "prop-types";

import styles from "./productCard.scss";

const ProductCard = ({ item }) => {
  const { name, imageUrl, retailPrice, salePrice, quantityAvailable } = item;
  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__wrapper}>
        <img className={styles.productCard__image} src={imageUrl} alt="image" />
        {quantityAvailable === 0 && (
          <span className={styles.productCard__quantity}>Sold out</span>
        )}
      </div>

      <h3 className={styles.productCard__title}> {name}</h3>

      <div className={styles.productCard__price}>
        {retailPrice !== 0 && (
          <p className={styles.productCard__retailPrice}>
            ${retailPrice / 100}
          </p>
        )}
        <p className={styles.productCard__salePrice}> ${salePrice / 100} </p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  item: object,
};

export default ProductCard;
