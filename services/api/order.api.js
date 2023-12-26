import request from "./axios";

const ENDPOINTS = {
  ORDER: "/order",
  PAYMENT: "/payment/pay",
  PAYMENT_VNPAY: "/payment/vnpay",
};

const createOrder = (orderData) => {
  return request().post(ENDPOINTS.ORDER, orderData);
};

const getOrderByUserID = () => {
  return request().get(ENDPOINTS.ORDER);
};
const getOrderDetail = (orderId) => {
  console.log(orderId);
  return request().get(`${ENDPOINTS.ORDER}/${orderId}`);
}
const createPayment = (orderId) => {
  return request().post(`${ENDPOINTS.PAYMENT}/${orderId}`, {
    name: "Chiếc bánh",
    price: "30",
    // "quantity":2,
    currency: "USD",
  });
};
const createPaymentVNPAY = (orderId,payment) => {
  return request().post(`${ENDPOINTS.PAYMENT_VNPAY}?order_id=${orderId}`, {
    "amount": payment.amount,
    "bankCode": payment.bankCode,
    "language": payment.language,
  });
}

export const OrderApi = {
  createOrder,
  getOrderByUserID,
  createPayment,
  getOrderDetail,
  createPaymentVNPAY,
};
