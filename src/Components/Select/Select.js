import React from "react";
import { func } from "prop-types";

import styles from "./select.scss";

const Select = ({ onChange }) => {
  return (
    <div className={styles.select}>
      <select
        name="sorting"
        id="sorting"
        className={styles.select__select}
        onChange={onChange}
      >
        <option value="">Sort by price</option>
        <option value="highest">Highest Price</option>
        <option value="lowest">Lowest Price</option>
      </select>
    </div>
  );
};

Select.propTypes = {
  onChange: func,
};

export default Select;
