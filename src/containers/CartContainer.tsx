import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
// components
import styled from "styled-components";
import CartTable from "../components/Table/CartTable";
import CouponTable from "../components/Table/CouponTable";
// hooks
import useStores from "../hooks/useStores";
import { CenterBox, FloatBox } from "../components/Common/style";
// mockup data
import { coupons } from "../data";

const Wrapper = styled.div`
  margin-top: 50px;
  width: 60%;
`;

const CartContainer = observer(() => {
  const { cartStore } = useStores();

  useEffect(() => {
    cartStore.setCoupons(coupons);
  }, []);

  return (
    <CenterBox flexDirection="column">
      <Wrapper>
        <CartTable
          items={cartStore.items}
          increase={index => cartStore.countUp(index)}
          decrease={index => cartStore.countDown(index)}
          checkboxHandler={index => cartStore.checkboxHandler(index)}
          allCheckboxHandler={e => cartStore.allCheckboxHandler(e)}
        />
      </Wrapper>
      <Wrapper>
        <CouponTable
          coupons={coupons}
          handleCouponCheckbox={index => cartStore.handleCouponCheckbox(index)}
        />
      </Wrapper>
      <Wrapper>
        <FloatBox>
          <h4>총금액</h4>
          <span>{cartStore.totalPrice}</span>
        </FloatBox>
      </Wrapper>
    </CenterBox>
  );
});

export default CartContainer;
