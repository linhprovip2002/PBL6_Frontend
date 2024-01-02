export {
  authSelector,
  default as authSlice,
  logout,
  setCredential,
  setUser
} from "./auth.reducer";

export {
  addToCart,
  cartSelector,
  default as cartSlice,
  clearCartLogout,
  decreaseQuantityProduct,
  deleteCartItem, selectColorSize, setLinkPayment, setLoading, updateCart
} from "./cart.reducer";

export {
  getProductDetailsSuccess,
  getProductListSuccess,
  getProductPending,
  getProductByCategorySuccess,
  default as productSlice
} from "./product.reducer";

export {
  closeCartSideBar,
  closeModal, closePaymentModal, default as modalSlice,
  resetModal,
  toggleCartSideBar,
  toggleModal,
  togglePaymentModal
} from "./modal.reducer";

export {
  getOrderListSuccess,
  getOrderPending,
  default as orderSlice, setOrderCurrent
} from "./order.reducer";

