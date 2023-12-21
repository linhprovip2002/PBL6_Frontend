import request from "./axios";

const ENDPOINTS = {
  ORDER: "/order",
  PAYMENT: "/payment/pay",
};

const createOrder = (orderData) => {
  return request().post(ENDPOINTS.ORDER, orderData);
};

const getOrderByUserID = () => {
  return request().get(ENDPOINTS.ORDER);
};

const createPayment = (orderId) => {
  return request().post(`${ENDPOINTS.PAYMENT}/${orderId}`, {
    name: "Chiếc bánh",
    price: "30",
    // "quantity":2,
    currency: "USD",
  });
};

export const OrderApi = {
  createOrder,
  getOrderByUserID,
  createPayment,
};
