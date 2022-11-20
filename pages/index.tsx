import { CartButton, Header, Logo, LogoSubtitle, LogoTitle } from './styles';

export default function Home() {
  return (
    <Header>
      <Logo>
        <LogoTitle>Mks</LogoTitle>
        <LogoSubtitle>Sistemas</LogoSubtitle>
      </Logo>
      <CartButton>
        <img
          style={{ marginRight: '15px' }}
          src="/cart.svg"
          alt="Carrinho de compras"
        />
        <span>0</span>
      </CartButton>
    </Header>
  );
}
