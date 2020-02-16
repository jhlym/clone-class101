import React from "react";
import { observer } from "mobx-react-lite";
// components
import styled from "styled-components";
import CartTable from "../components/Table/CartTable";
import CouponTable from "../components/Table/CouponTable";
// hooks
import useStores from "../hooks/useStores";
import { CenterBox } from "../components/Common/style";
// mockup data
import { coupons } from "../data";

const Wrapper = styled.div`
  margin-top: 50px;
  width: 60%;
`;

const CartContainer = observer(() => {
  const { cartStore } = useStores();
  return (
    <CenterBox flexDirection="column">
      <Wrapper>
        <CartTable
          items={cartStore.items}
          increase={item => cartStore.countUp(item)}
          decrease={item => cartStore.countDown(item)}
        />
      </Wrapper>
      <Wrapper>
        <CouponTable coupons={coupons} />
      </Wrapper>
      <Wrapper>
        <h4>총금액</h4>
      </Wrapper>
    </CenterBox>
  );
});

export default CartContainer;
