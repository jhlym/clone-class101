import React from "react";
import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import { Container } from "reactstrap";

import ProductContainer from "../containers/ProductContainer";

const ProductPage = () => {
  return (
    <Container fluid={true}>
      <div>
        <NavLink to="/cart">Go Cart</NavLink>
      </div>
      <ProductContainer />
    </Container>
  );
};

export default ProductPage;
