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
const getOrderByID = (id) => {
  return request().get(`${ENDPOINTS.ORDER}/${id}`);
}
const createPayment = (order) => {
  return request().post(`${ENDPOINTS.PAYMENT}/${order?._id}`, {
    name: order?._id,
    price: order?.total,
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
  createPaymentVNPAY,
  getOrderByID
};
