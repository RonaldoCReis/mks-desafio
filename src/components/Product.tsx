import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addProduct } from '../redux/cartSlice';

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.135);
  overflow: hidden;
  position: relative;
  padding-bottom: 32px;
  width: 218px;
`;

const BuyButton = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 18px;
  color: #fff;
  background: #0f52ba;
  border: none;
  gap: 14px;
  cursor: pointer;
  &:hover {
    background: #003087;
  }
`;

const CardBody = styled.div`
  padding: 15px;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 119%;
  color: #2c2c2c;
  max-width: 124px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 38px;
`;

const PriceTag = styled.span`
  background: #373737;
  border-radius: 5px;
  padding: 4px 7px;
  font-weight: 700;
  font-size: 15px;
  line-height: 1;
  color: #ffffff;
  white-space: nowrap;
`;

const TitlePriceFlex = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  margin-bottom: 8px;
  margin-top: 14px;
  justify-content: space-between;
`;

const Desc = styled.p`
  font-weight: 300;
  font-size: 10px;
  line-height: 120%;
  color: #2c2c2c;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export interface ProductProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

const Product = ({ id, name, price, description, photo }: ProductProps) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <CardBody>
        <img
          style={{ maxHeight: '140px', margin: '0 auto' }}
          src={photo}
          alt="Produto"
        />
        <TitlePriceFlex>
          <Title>{name}</Title>
          <PriceTag>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              maximumFractionDigits: 0,
            }).format(Number(price))}
          </PriceTag>
        </TitlePriceFlex>
        <Desc>{description}</Desc>
      </CardBody>
      <BuyButton
        onClick={() =>
          dispatch(addProduct({ id, name, price, photo, quantity: 1 }))
        }
      >
        <img src="/buy.svg" alt="Adicionar ao carrinho" />
        <span>Comprar</span>
      </BuyButton>
    </Card>
  );
};

export default Product;
