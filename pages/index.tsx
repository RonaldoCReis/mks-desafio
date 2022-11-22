import Cart from '../src/components/Cart/Cart';
import Product, { ProductProps } from '../src/components/Product';
import {
  CartButton,
  Footer,
  Header,
  Logo,
  LogoSubtitle,
  LogoTitle,
  Main,
} from './styles';

export async function getServerSideProps() {
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
  return (
    <>
      <Header>
        <Logo>
          <LogoTitle>Mks</LogoTitle>
          <LogoSubtitle>Sistemas</LogoSubtitle>
        </Logo>
        <CartButton>
          <img src="/cart.svg" alt="Carrinho de compras" />
          <span>0</span>
        </CartButton>
      </Header>
      <Main>
        {props.products.map((product) => (
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
        ))}
      </Main>
      <Cart />
      <Footer>MKS sistemas © Todos os direitos reservados</Footer>
    </>
  );
}
