import React, { useState } from "react";
import { observer } from "mobx-react-lite";
// components
import { Row, Col } from "reactstrap";
import Pagination from "react-js-pagination";
import ProductCard from "../components/Card/ProductCard";
import { CenterBox } from "../components/Common/style";
// hooks
import useStores from "../hooks/useStores";
// mockup data
import { productItems } from "../data";
// constant
import {
  ITEM_DISPLAY_COUNT,
  PAGE_NUMBER_DISPLAY_COUNT
} from "../constants/page";

const ProductContainer = observer(() => {
  const { cartStore } = useStores();
  const [activePage, setPage] = useState<any>(1);

  const handlePageChange = (pageNumber: Number) => {
    setPage(pageNumber);
  };

  const proucts = productItems
    .sort((o1, o2) => o2.price - o1.price)
    .slice(
      (activePage - 1) * ITEM_DISPLAY_COUNT,
      activePage * ITEM_DISPLAY_COUNT
    )
    .map((item, index) => (
      <Col
        key={item.id}
        xl={index === 0 ? { size: "2", offset: "1" } : { size: "2" }}
        lg={index === 0 ? { size: "2", offset: "1" } : { size: "2" }}
        md="6"
        sm="6"
        xs="12">
        <ProductCard
          imgSrc={item.coverImage}
          title={item.title}
          price={item.price}
          cart={cartStore.isCart(item)}
          addCart={() => cartStore.add(item)}
          removeCart={() => cartStore.remove(item)}
        />
      </Col>
    ));

  return (
    <>
      <Row>{proucts}</Row>
      <CenterBox>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={ITEM_DISPLAY_COUNT}
          totalItemsCount={productItems.length}
          pageRangeDisplayed={PAGE_NUMBER_DISPLAY_COUNT}
          onChange={handlePageChange}
        />
      </CenterBox>
    </>
  );
});

export default ProductContainer;
