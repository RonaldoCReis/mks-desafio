import React, { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-weight: 400;
  font-size: 5px;
  line-height: 6px;
  color: #000000;
  position: absolute;
  left: 0;
  top: -10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 50px;
  height: 19px;
  background: #ffffff;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  padding: 4px 8px;

  & > :is(button, input) {
    border: none;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    color: #000000;
    background: none;
    padding: 2px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  & > button {
    font-size: 12px;
    line-height: 15px;
    max-width: 20%;
    @media (max-width: 768px) {
      width: 20%;
    }
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  & > input {
    text-align: center;
    overflow: visible;
    max-width: 30%;
    &:focus {
      outline: none;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  @media (max-width: 768px) {
    min-width: 97px;
    height: 35px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background: #bfbfbf;
`;
const NumberPicker = () => {
  const [quantity, setQuantity] = useState('1');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // not allow to type in non-numeric characters
    if (event.target.value.match(/^[0-9]*$/)) {
      setQuantity(event.target.value);
    }
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    if (event.target.value === '') {
      setQuantity('0');
    }
  }

  function handleDecrement() {
    if (quantity !== '0') {
      setQuantity((prevQuantity) => String(Number(prevQuantity) - 1));
    }
  }
  function handleIncrement() {
    setQuantity((prevQuantity) => String(Number(prevQuantity) + 1));
  }
  return (
    <div style={{ position: 'relative' }}>
      <Label>Qtd: </Label>
      <Container>
        <button onClick={handleDecrement}>-</button>
        <Divider />
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          value={quantity}
          type="text"
        />
        <Divider />
        <button onClick={handleIncrement}>+</button>
      </Container>
    </div>
  );
};

export default NumberPicker;
