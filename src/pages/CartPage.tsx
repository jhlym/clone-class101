import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import CartContainer from "../containers/CartContainer";

const CartPage = () => {
  return (
    <Container>
      <div>
        <NavLink to="/products">Go Product page</NavLink>
      </div>
      <CartContainer />
    </Container>
  );
};

export default CartPage;
