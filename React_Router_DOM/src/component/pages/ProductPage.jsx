import React from "react";
import Menu from "./../Menu";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  let { id, name } = useParams();
  return (
    <div>
      <Menu />
      <center>
        <p>ID: {id}</p>
        <p>NAME: {name}</p>
        <h1>This is Product Page</h1>
      </center>
    </div>
  );
};

export default ProductPage;
