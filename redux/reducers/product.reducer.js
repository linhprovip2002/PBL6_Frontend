import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  categoryList: [],
  productDetailsCurrent: null,
};

const productsSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    getProductListSuccess: (state, action) => {
      state.productList = action.payload.products;
      state.categoryList = action.payload.categories;
    },
    getCategoryListSuccess: (state, action) => {},
    getProductDetailsSuccess: (state, action) => {
      state.productDetailsCurrent = action.payload;
    },
  },
});

export const productSelector = (state) => state.product;

export const { getProductListSuccess, getProductDetailsSuccess } =
  productsSlice.actions;
export default productsSlice.reducer;
