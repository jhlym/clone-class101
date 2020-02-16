import React from "react";
import { observer } from "mobx-react-lite";
// components
import styled from "styled-components";
import { Table, Button } from "reactstrap";
import NoData from "./Common/NoData";
// interface
import { CartItem } from "../../interfaces";

interface RProps {
  item: CartItem;
  increase: () => void;
  decrease: () => void;
}

interface TProps {
  items: CartItem[];
  increase: (item: CartItem) => void;
  decrease: (item: CartItem) => void;
}

const Count = styled.span`
  padding: 0 10px;
`;

const CartRow: React.FC<RProps> = observer(({ item, increase, decrease }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{item.title}</td>
      <td>{item.price.toLocaleString()}</td>
      <td className="text-align__center">
        <Button outline color="warning" size="sm" onClick={decrease}>
          -
        </Button>
        <Count>{item.count}</Count>
        <Button outline color="warning" size="sm" onClick={increase}>
          +
        </Button>
      </td>
    </tr>
  );
});

const CartTable: React.FC<TProps> = ({ items, increase, decrease }) => {
  return (
    <Table>
      <colgroup>
        <col width="20%" />
        <col width="40%" />
        <col width="20%" />
        <col width="20%" />
      </colgroup>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
            결제 포함
          </th>
          <th>상품명</th>
          <th>가격</th>
          <th className="text-align__center">수량</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item: CartItem) => (
          <CartRow
            key={item.id}
            item={item}
            increase={() => increase(item)}
            decrease={() => decrease(item)}
          />
        ))}
        <NoData data={items} colSpan={4}>
          장바구니에 상품이 없습니다.
        </NoData>
      </tbody>
    </Table>
  );
};

export default CartTable;
