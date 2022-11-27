import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ProductTypes, removeProduct } from '../../redux/cartSlice';
import NumberPicker from '../NumberPicker';

const Card = styled.div`
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: visible;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const Name = styled.h3`
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #2c2c2c;
  max-width: 100px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Price = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 15px;
    color: #fff;
    background: #373737;
    border-radius: 5px;
    height: 100%;
    padding: 10px 17px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const RemoveProduct = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: -6px;
  top: -6px;
  width: 18px;
  @media (max-width: 768px) {
    right: 10px;
    top: 10px;
    width: 32px;
  }
`;

const ProductImage = styled.div`
  height: 50px;
  width: 50px;
  @media (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
`;

const CartProduct = ({ id, name, photo, price, quantity }: ProductTypes) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <RemoveProduct onClick={() => dispatch(removeProduct({ id }))}>
        <img src="/close.svg" alt="Remover produto" />
      </RemoveProduct>
      <ProductImage>
        <img src={photo} alt={name} />
      </ProductImage>

      <Name>{name}</Name>
      <Flex>
        <NumberPicker id={id} quantity={quantity} />
        <Price>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 0,
          }).format(Number(price))}
        </Price>
      </Flex>
    </Card>
  );
};

export default CartProduct;
