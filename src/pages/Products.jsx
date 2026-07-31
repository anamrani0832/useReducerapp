import React from "react";
import { useParams } from "react-router-dom";

function Products() {
  const { id } = useParams();
  return (
    <div>
      <h2>Products</h2>
      <p>showing product with Id: {id}</p>
    </div>
  );
}

export default Products;
