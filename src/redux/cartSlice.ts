import { createSlice } from '@reduxjs/toolkit';

interface ProductTypes {
  id: number;
  name: string;
  price: number;
  image: string;
  Qtd: number;
}

export interface CartTypes {
  isOpen: boolean;
  products: ProductTypes[];
}

const initialState: CartTypes = {
  isOpen: false,
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { openCart, closeCart, addProduct, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;

export const selectProducts = (state: CartTypes) => state.products;
