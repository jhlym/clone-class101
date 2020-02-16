import React from "react";

interface Props {
  data: Array<any>;
  colSpan?: number;
}

const NoData: React.FC<Props> = ({ data, colSpan, children }) => {
  if (data.length > 0) return null;
  return (
    <tr>
      <td colSpan={colSpan || 0} style={{ textAlign: "center" }}>
        {children}
      </td>
    </tr>
  );
};

export default NoData;
