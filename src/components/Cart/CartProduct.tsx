import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #2c2c2c;
`;

const Price = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

const CartProduct = () => {
  return (
    <Card>
      <img src="#" alt="" />
      <Name>Apple Watch Series 4 GPS</Name>
      <Price>R$399</Price>
    </Card>
  );
};

export default CartProduct;
