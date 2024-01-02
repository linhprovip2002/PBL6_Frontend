import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  categoryList: [],
  productDetailsCurrent: null,
  isLoading: false,
};

const productsSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    getProductListSuccess: (state, action) => {
      state.productList = action.payload.products;
      state.categoryList = action.payload.categories;
      state.isLoading = false;
    },
    getCategoryListSuccess: (state, action) => {},
    getProductDetailsSuccess: (state, action) => {
      state.productDetailsCurrent = action.payload;
      state.isLoading = false;
    },
    getProductByCategorySuccess: (state, action) => {
      state.productList = action.payload.products;
      state.isLoading = false;
    },
    getProductPending: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const productSelector = (state) => state.product;

export const {
  getProductListSuccess,
  getProductDetailsSuccess,
  getProductPending,
  getProductByCategorySuccess
} = productsSlice.actions;
export default productsSlice.reducer;
