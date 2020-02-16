import React from "react";
import { Table } from "reactstrap";
import { Coupon } from "../../interfaces";
import NoData from "./Common/NoData";

interface RProps {
  coupon: Coupon;
}

interface TProps {
  coupons: Coupon[];
}

const CouponRow = React.memo(({ coupon }: RProps) => {
  return (
    <tr>
      <td>{coupon.title}</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
  );
});

const CouponTable = ({ coupons }: TProps) => {
  return (
    <Table>
      <thead>
        <tr>
          <th colSpan={2}>사용 가능한 쿠폰</th>
        </tr>
      </thead>
      <tbody>
        {coupons.map((coupon, index) => (
          <CouponRow key={index} coupon={coupon} />
        ))}
        <NoData data={coupons}>사용 가능한 쿠폰이 없습니다.</NoData>
      </tbody>
    </Table>
  );
};

export default CouponTable;
