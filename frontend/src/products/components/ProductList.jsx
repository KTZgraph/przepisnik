import React from "react";

const ProductList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <p>{item.id}</p>
          <p>{item.name}</p>
          <p>{item.title}</p>
          <p>{item.unit}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
