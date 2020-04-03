import React from "react";

import Product from "./Product";
import productsData from "./vschoolProducts.js";

function App() {
  //  console.log(productsData);

  const productComponents = productsData.map(item => (
    <Product key={item.id} product={item} />
  ));

  return <div>{productComponents}</div>;
}

export default App;
