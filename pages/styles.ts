import styled from 'styled-components';

export const Header = styled.header`
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
`;

export const LogoTitle = styled.span`
  font-size: 40px;
  font-weight: 600;
  line-height: 30px;
  text-transform: uppercase;
`;

export const LogoSubtitle = styled.span`
  font-size: 20px;
  line-height: 19px;
  font-weight: 300;
  margin-left: 10px;
`;

export const Logo = styled.h1`
  display: flex;
  align-items: flex-end;
`;

export const CartButton = styled.button`
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
`;