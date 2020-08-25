import React from "react";

import styles from "./header.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="https://www.catch.com.au/" target="_blank" rel="noreferrer">
        <img
          className={styles.header__image}
          src="https://s.catch.com.au/static/catch/images/logo-83d9b21199.svg"
          alt="logo"
        />
      </a>
    </header>
  );
};

export default Header;
