import React from "react";
import { observer } from "mobx-react-lite";
// components
import { Row, Col } from "reactstrap";
import ProductCard from "../components/Card/ProductCard";
// hooks
import useStores from "../hooks/useStores";
// mockup data
import { productItems } from "../data";

const ProductContainer = observer(() => {
  const { cartStore } = useStores();

  const proucts = productItems
    .sort((o1, o2) => o2.price - o1.price)
    .slice(0, 5)
    .map((item, index) => (
      <Col
        key={item.id}
        xl={index === 0 ? { size: "2", offset: "1" } : { size: "2" }}
        lg="4"
        md="4"
        sm="6"
        xs="12"
      >
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
    </>
  );
});

export default ProductContainer;
