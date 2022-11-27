import { createSlice } from '@reduxjs/toolkit';

export interface ProductTypes {
  id: number;
  name: string;
  price: number;
  photo: string;
  quantity: string;
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
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex === -1) {
        state.products.push(action.payload);
      } else {
        state.products[productIndex].quantity += 1;
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    setProductQuantity: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[productIndex].quantity = action.payload.quantity;
    },
  },
});

export const {
  openCart,
  closeCart,
  addProduct,
  removeProduct,
  setProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectProducts = (state: { cart: CartTypes }) =>
  state.cart.products;

export const selectTotal = (state: { cart: CartTypes }) => {
  return state.cart.products.reduce((total, product) => {
    return total + product.price * Number(product.quantity);
  }, 0);
};

export const selectNumberOfProducts = (state: { cart: CartTypes }) => {
  return state.cart.products.length;
};

export const isCartOpen = (state: { cart: CartTypes }) => state.cart.isOpen;
