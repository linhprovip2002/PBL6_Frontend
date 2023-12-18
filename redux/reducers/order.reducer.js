import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderList: [],
  isLoading: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    getOrderListSuccess: (state, action) => {
      state.orderList = action.payload.orders;
      state.isLoading = false;
    },
    getOrderPending: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const orderSelector = (state) => state.order;

export const { getOrderListSuccess, getOrderPending } = orderSlice.actions;

export default orderSlice.reducer;
