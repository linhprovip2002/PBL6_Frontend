import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  linkPayment : null,
  isLoading: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.items?.map((item) => item._id).includes(action.payload._id)) {
        state.items = state.items?.map((item) => {
          if (
            item._id === action.payload._id &&
            item?.quantityInCart < item.quantity
          ) {
            return {
              ...item,
              quantityInCart: item?.quantityInCart + 1,
              colorPick: action.payload.colorPick ??  item?.color[0],
              sizePick: action.payload.sizePick ?? item?.size[0]
            };
          } else {
            return item;
          }
        });
      } else {
        state.items = [
          ...state.items,
          { ...action.payload, quantityInCart: 1 },
        ];
      }
    },
    updateCart: (state, action) => {
      state.items = action.payload;
    },
    decreaseQuantityProduct: (state, action) => {
      state.items = state.items.map((item) => {
        if (item._id === action.payload._id) {
          return {
            ...item,
            quantityInCart: item.quantityInCart - 1,
          };
        } else {
          return item;
        }
      });
    },
    deleteCartItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
    },
    clearCartLogout: (state, action) => {
      state.items = [];
    },
    setLinkPayment : (state,action) => {
      state.linkPayment = action.payload;
      state.isLoading = false;
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
    selectColorSize : (state,action) => {
      state.items = state.items.map((item) => {
        if (item._id === action.payload._id) {
          return {
            ...item,
            colorPick: action.payload?.colorPick,
            sizePick: action.payload?.colorPick
          };
        } else {
          return item;
        }
      });
    }
  },
});

export const cartSelector = (state) => state.cart;

export const {
  addToCart,
  deleteCartItem,
  updateCart,
  decreaseQuantityProduct,
  clearCartLogout,
  setLinkPayment,
  setLoading,
  selectColorSize
} = cartSlice.actions;
export default cartSlice.reducer;
