import request from "./axios";

const ENDPOINTS = {
  ORDER: "/order",
  PAYMENT: "/payment",
};

const createOrder = (orderData) => {
    return request().post(ENDPOINTS.ORDER, orderData);
};

const getOrderByUserID = () => {
    return request().get(ENDPOINTS.ORDER);
}

const createPayment = (orderId) => {
    return request().post(`${ENDPOINTS.LISTPRODUCT}/${orderId}`)
}

export const OrderApi = {
    createOrder,
    getOrderByUserID,
};