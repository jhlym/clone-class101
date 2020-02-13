import React from "react";
import { Row, Col } from "reactstrap";
import ProductCard from "../components/Card/ProductCard";
// mockup data
import { productItems } from "../data";

interface item {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  score: number;
}

const ProductContainer = () => {
  const [carts, setCart] = React.useState<item[]>([]);

  const addCart = (item: item) => {
    if (carts.length === 3) {
      alert("장바구니는에 상품을 최대 3개까지 담을 수 있습니다!");
      return;
    }
    setCart([...carts, item]);
  };

  const removeCart = (item: item) => {
    const index = carts.findIndex(cart => cart.id === item.id);
    setCart([
      ...carts.slice(0, index),
      ...carts.slice(index + 1, carts.length)
    ]);
  };

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
          cart={carts.filter((cart: item) => cart.id === item.id).length > 0}
          addCart={() => addCart(item)}
          removeCart={() => removeCart(item)}
        />
      </Col>
    ));

  return (
    <>
      {/* product list*/}
      <Row>{proucts}</Row>
      {/* pagination */}
    </>
  );
};

export default ProductContainer;
