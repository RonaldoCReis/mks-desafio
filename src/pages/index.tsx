import { useDispatch, useSelector } from 'react-redux';
import Cart from '../../components/cart/Cart';
import Product, { ProductProps } from '../../components/Product';
import { openCart, selectNumberOfProducts } from '../redux/cartSlice';
import { Shimmer } from 'react-shimmer';

import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 101px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0f52ba;
  padding: 0 88px 0 65px;
  color: #fff;
  z-index: 999;
  @media (max-width: 768px) {
    height: 48px;
    padding: 0 20px;
  }
`;

const LogoTitle = styled.span`
  font-size: 40px;
  font-weight: 600;
  line-height: 30px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const LogoSubtitle = styled.span`
  font-size: 20px;
  line-height: 19px;
  font-weight: 300;
  margin-left: 10px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Logo = styled.h1`
  display: flex;
  align-items: flex-end;
`;

const CartButton = styled.button`
  width: 90px;
  height: 45px;
  padding: 0 15px;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  & > img {
    margin-right: 15px;
  }
  @media (max-width: 768px) {
    padding: 0 8px;
    height: 26px;
    width: 52px;
    font-size: 12px;
    & > img {
      width: 16px;
      margin-right: 10px;
    }
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 101px;
  background-color: #eee;
  color: #000;
  font-size: 12px;
  font-weight: 400;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Main = styled.main`
  width: 100%;
  max-width: 978px;
  margin: 116px auto;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 22px;
  @media (max-width: 768px) {
    margin: 18px auto 100px auto;
  }
`;

export async function getStaticProps() {
  const res = await fetch(
    'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC'
  );
  const data = await res.json();
  const products = await data.products;

  return {
    props: { products }, // will be passed to the page component as props
  };
}

export default function Home(props: { products: ProductProps[] }) {
  const dispatch = useDispatch();
  const numberOfProducts = useSelector(selectNumberOfProducts);

  return (
    <>
      <Header>
        <Logo>
          <LogoTitle>Mks</LogoTitle>
          <LogoSubtitle>Sistemas</LogoSubtitle>
        </Logo>
        <CartButton onClick={() => dispatch(openCart())}>
          <img src="/cart.svg" alt="Carrinho de compras" />
          <span data-testid="cartNumber">{numberOfProducts}</span>
        </CartButton>
      </Header>
      <Main>
        {props.products.length > 0 ? (
          props.products.map((product) => (
            <Product
              name={product.name}
              photo={product.photo}
              price={product.price}
              updatedAt={product.updatedAt}
              createdAt={product.createdAt}
              id={product.id}
              description={product.description}
              brand={product.brand}
              key={product.id}
            />
          ))
        ) : (
          <>
            <span style={{ display: 'none' }} data-testid="shimmer" />
            <Shimmer height={266} width={218} className="placeholder" />
            <Shimmer height={266} width={218} className="placeholder" />
            <Shimmer height={266} width={218} className="placeholder" />
            <Shimmer height={266} width={218} className="placeholder" />
          </>
        )}
      </Main>
      <Cart />
      <Footer>MKS sistemas © Todos os direitos reservados</Footer>
    </>
  );
}
