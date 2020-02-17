import React from "react";
import { Container } from "reactstrap";
import CartContainer from "../containers/CartContainer";
import SideNav from "../components/Navbar/SideNav";

const CartPage = () => {
  return (
    <Container>
      <CartContainer />
      <SideNav
        routes={[
          { name: "Product", path: "/products" },
          { name: "Cart", path: "/cart" }
        ]}
      />
    </Container>
  );
};

export default CartPage;
