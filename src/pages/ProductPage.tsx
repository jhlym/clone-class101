import React from "react";
import { Container } from "reactstrap";
import ProductContainer from "../containers/ProductContainer";
const ProductPage = () => {
  return (
    <Container fluid={true}>
      <ProductContainer />
    </Container>
  );
};

export default ProductPage;
