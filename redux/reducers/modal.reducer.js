import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  open: false,
  message: "",
  modalID: "",
  openCartModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.status = action.payload.status;
      state.open = true;
      state.message = action.payload.message;
      state.modalID = action.payload.modalID;
    },
    closeModal: (state, action) => {
      state.open = false;
    },
    resetModal: (state, action) => {
      state.open = false;
      state.modalID = null;
    },
    toggleCartSideBar: (state, action) => {
      state.openCartModal = true;
    },
    closeCartSideBar: (state, action) => {
      state.openCartModal = false;
    },
  },
});

export const modalSelector = (state) => state.modal;

export const {
  toggleModal,
  closeModal,
  resetModal,
  toggleCartSideBar,
  closeCartSideBar,
} = modalSlice.actions;
export default modalSlice.reducer;
