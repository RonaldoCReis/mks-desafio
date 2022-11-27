import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../src/components/cart/Cart';
import Product, { ProductProps } from '../src/components/Product';
import {
  isCartOpen,
  openCart,
  selectNumberOfProducts,
} from '../src/redux/cartSlice';
import { Shimmer } from 'react-shimmer';
import {
  CartButton,
  Footer,
  Header,
  Logo,
  LogoSubtitle,
  LogoTitle,
  Main,
} from './styles';

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
  const [loading, setLoading] = useState(false);
  // const [products, setProducts] = useState({} as ProductProps[]);
  const dispatch = useDispatch();
  const numberOfProducts = useSelector(selectNumberOfProducts);
  const cart = useSelector(isCartOpen);

  console.log(props);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await fetch(
  //       'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC'
  //     );
  //     const data = await res.json();
  //     console.log(data.products);

  //     setProducts(data.products);
  //     setLoading(false);
  //   };
  //   fetchProducts();
  //   console.log(products);
  // }, []);

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
