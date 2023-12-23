const status = {
  WARNING: "WARNING",
  SUCCESS: "SUCCESS",
};
const modalID = {
  MODAL_DELETE_PRODUCT: "MODAL_DELETE_PRODUCT",
  MODAL_NOT_LOGIN: "MODAL_NOT_LOGIN",
  NAVIGATE_TO_HOMEPAGE: "NAVIGATE_TO_HOMEPAGE",
};
export const CONSTANTS = {
  status,
  modalID,
};

export const STATUS_ORDER = {
  PENDING: "PENDING", // supplier hasn't accepted yet
  ACCEPTED: "ACCEPTED", // supplier has accepted
  REJECTED: "REJECTED", // supplier has rejected
  CANCEL: "CANCEL", // customer has canceled
  FINISHED: "FINISHED", // customer has received
  SHIPPING: "SHIPPING",
  WAITING: "WAITING",
  PAYMENT_SUCCESS: "PAYMENT_SUCCESS",
  PAYMENT_FAIL: "PAYMENT_FAIL",
  SHIPPING_SUCCESS: "SHIPPING_SUCCESS",
  SHIPPING_FAIL: "SHIPPING_FAIL",
  SHIPPING_CANCEL: "SHIPPING_CANCEL",
  SHIPPING_RETURN: "SHIPPING_RETURN",
  OUT_OF_STOCK: "OUT_OF_STOCK", // supplier has rejected
};
