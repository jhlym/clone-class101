import React from "react";
import styled from "styled-components";
import {
  Card as BootCard,
  CardImg as BootCardImg,
  CardBody as BootCardBody,
  CardTitle as BootCardTitle,
  CardSubtitle as BootCardSubtitle
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

//styled
const Card = styled<any>(BootCard)`
  color: ${({ theme }) => theme.main.title};
  margin-bottom: 30px;
  &:hover {
    border-color: ${({ theme }) => theme.main.emphasis};
  }
`;
const ImgWrapper = styled.div`
  overflow: hidden;
`;
const CardImg = styled(BootCardImg)`
  min-height: 250px;
  object-fit: fill;
  &:hover {
    transform: scale(1.1);
  }
  transition: transform 0.3s ease 0s, opacity 0.1s linear 0s;
`;
const CardBody = styled(BootCardBody)`
  min-height: 140px;
  text-overflow: ellipsis;
`;
const CardTitle = styled(BootCardTitle)`
  min-height: 120px;
`;
const SubContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.gray[6]};
`;
const CardSubtitle = styled(BootCardSubtitle)``;
const Badge = styled<any>(FontAwesomeIcon)`
  cursor: pointer;
  color: ${props =>
    props.cart === "true"
      ? props.theme.main.emphasis
      : props.theme.color.gray[6]};
  &:hover {
    color: ${({ theme }) => theme.main.emphasis};
  }
`;

// props type
type props = {
  imgSrc: string;
  title: string;
  price: number;
  cart: boolean;
  addCart: Function;
  removeCart: Function;
};

const ProductCard = ({
  imgSrc,
  title,
  price,
  cart,
  addCart,
  removeCart
}: props) => {
  return (
    <Card>
      <ImgWrapper>
        <CardImg top width="100%" src={imgSrc} alt="Product Image" />
      </ImgWrapper>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <SubContainer>
          <CardSubtitle>{price.toLocaleString()}</CardSubtitle>
          <Badge
            icon={faShoppingCart}
            cart={cart.toString()}
            onClick={cart ? removeCart : addCart}
          />
        </SubContainer>
      </CardBody>
    </Card>
  );
};

ProductCard.defaultProps = {
  imgSrc: "",
  title: "",
  price: 0,
  cart: false
};

export default React.memo(ProductCard);
