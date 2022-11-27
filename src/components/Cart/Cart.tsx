import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  CartTypes,
  closeCart,
  selectProducts,
  selectTotal,
} from '../../redux/cartSlice';
import CartProduct from './CartProduct';

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 486px;
  height: 100vh;
  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  z-index: 9999;
  padding: 36px 60px calc(42px + 97px) 47px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  @media (max-width: 768px) {
    width: 90%;
    padding: 25px 46px calc(42px + 97px) 34px;
  }
  transform: translateX(100%);

  &.active {
    transform: translateX(0);
  }
`;

const BuyButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 97px;
  background: #000000;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  color: #ffffff;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;

  color: #ffffff;
  max-width: 170px;
  margin-bottom: 70px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  color: #ffffff;
  margin-top: auto;
`;

const CloseCart = styled.button`
  position: absolute;
  top: 39px;
  right: 22px;
  width: 38px;
  background: transparent;
`;

const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  overflow-y: auto;
  margin: -10px;
  padding: 10px;
  width: 100%;
`;

const Cart = () => {
  const active = useSelector((state: { cart: CartTypes }) => state.cart.isOpen);
  const products = useSelector(selectProducts);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();
  return (
    <Container className={`${active ? 'active' : ''}`}>
      <CloseCart onClick={() => dispatch(closeCart())}>
        <img src="/close.svg" alt="Fechar carrinho" />
      </CloseCart>
      <Title>
        Carrinho <br /> de compras
      </Title>
      <Products>
        {products.map((product) => (
          <CartProduct
            key={product.id}
            quantity={product.quantity}
            price={product.price}
            photo={product.photo}
            name={product.name}
            id={product.id}
          />
        ))}
      </Products>
      <Total>
        <span>Total:</span>
        <span>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 0,
          }).format(total)}
        </span>
      </Total>
      <BuyButton>Finalizar Compra</BuyButton>
    </Container>
  );
};

export default Cart;
