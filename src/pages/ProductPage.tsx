import React from "react";
import { Container } from "reactstrap";

import ProductContainer from "../containers/ProductContainer";
import SideNav from "../components/Navbar/SideNav";

const ProductPage = () => {
  return (
    <Container fluid={true}>
      <ProductContainer />
      <SideNav
        routes={[
          { name: "Product", path: "/products" },
          { name: "Cart", path: "/cart" }
        ]}
      />
    </Container>
  );
};

export default ProductPage;
