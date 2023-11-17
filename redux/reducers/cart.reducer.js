import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    updateCart: (state, action) => {
      state.items = action.payload;
    },
    deleteCartItem: (state, action) => {
      const result = state.items.filter(item => item._id !== action.payload);
      state.items = result;
    },
  },
});

export const cartSelector = (state) => state.cart;

export const {addToCart, deleteCartItem, updateCart} = cartSlice.actions;
export default cartSlice.reducer;
