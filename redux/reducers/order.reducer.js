import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderList: [],
  isLoading: false,
  currentOrder: {},
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
    setOrderCurrent: (state, action) => {
      state.currentOrder = action.payload;
    },
  },
});

export const orderSelector = (state) => state.order;

export const { getOrderListSuccess, getOrderPending, setOrderCurrent } =
  orderSlice.actions;

export default orderSlice.reducer;
