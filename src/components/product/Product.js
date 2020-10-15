import React from "react";
import styled from "styled-components";

const Product = ({ data }) => {
  const { image, name, price, brand } = data;

  const renderProduct = () => {
    return (
      <Wrap>
        <ImgWrap>
          <ProductImg src={image} alt="product" />
        </ImgWrap>
        <hr />
        <DescriptionWrap>
          <Description>이름 : {name}</Description>
          <Description>가격 : {price}</Description>
          <Description>브랜드 : {brand}</Description>
        </DescriptionWrap>
      </Wrap>
    );
  };

  return <div>{renderProduct()}</div>;
};

export default Product;

//style
const Wrap = styled.div`
  position: relative;
  margin: 20px 10px;
  width: 200px;
  height: 300px;
  border: 1px solid #111111;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
`;

const ProductImg = styled.img`
  width: 100%;
`;

const DescriptionWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  width: 100%;
  font-size: 15px;
  margin-top: -5px;
  margin-left: 5px;
`;
