import React from "react";
// components
import Header from "./Components/Header/Header";
import ProductPage from "./Components/Product-Page/ProductPage";

import "./app.scss";

const App = () => {
  return (
    <div>
      <Header />
      <ProductPage />
    </div>
  );
};

export default App;
