import React from "react";
// components
import Header from "./Components/Header/Header";
import ProductCollection from "./Components/Product-Collection/ProductCollection";

import "./app.scss";

const App = () => {
  return (
    <div>
      <Header />
      <ProductCollection />
    </div>
  );
};

export default App;
