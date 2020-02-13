import React from "react";
import { Container } from "reactstrap";
import ProductContainer from "../containers/ProductContainer";
const ProductPage = () => {
  return (
    <Container fluid={true}>
      <h1>Product Page</h1>
      <ProductContainer />
    </Container>
  );
};

export default ProductPage;
