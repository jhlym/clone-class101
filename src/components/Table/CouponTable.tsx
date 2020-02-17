import React from "react";
import { Table } from "reactstrap";
import { Coupon } from "../../interfaces";
import NoData from "./Common/NoData";

interface RProps {
  coupon: Coupon;
  handleCouponCheckbox: () => void;
}

interface TProps {
  coupons: Coupon[];
  handleCouponCheckbox: (index: number) => void;
}

const CouponRow: React.FC<RProps> = React.memo(
  ({ coupon, handleCouponCheckbox }) => {
    return (
      <tr>
        <td>{coupon.title}</td>
        <td>
          <input
            type="checkbox"
            checked={coupon.selected}
            onChange={handleCouponCheckbox}
          />
        </td>
      </tr>
    );
  }
);

const CouponTable: React.FC<TProps> = ({ coupons, handleCouponCheckbox }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th colSpan={2}>사용 가능한 쿠폰</th>
        </tr>
      </thead>
      <tbody>
        {coupons.map((coupon, index) => (
          <CouponRow
            key={index}
            coupon={coupon}
            handleCouponCheckbox={() => handleCouponCheckbox(index)}
          />
        ))}
        <NoData data={coupons}>사용 가능한 쿠폰이 없습니다.</NoData>
      </tbody>
    </Table>
  );
};

export default CouponTable;
