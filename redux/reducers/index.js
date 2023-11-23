export {
  authSelector,
  default as authSlice,
  logout,
  setCredential,
  setUser,
} from "./auth.reducer";

export {
  addToCart,
  cartSelector,
  default as cartSlice,
  decreaseQuantityProduct,
  deleteCartItem,
  updateCart,
} from "./cart.reducer";

export {
  getProductDetailsSuccess,
  getProductListSuccess,
  getProductPending,
  default as productSlice,
} from "./product.reducer";

export {
  closeCartSideBar,
  closeModal,
  default as modalSlice,
  resetModal,
  toggleCartSideBar,
  toggleModal,
} from "./modal.reducer";
