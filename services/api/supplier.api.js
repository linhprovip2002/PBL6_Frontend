import request from "./axios";

const ENDPOINTS = {
  SUPPLIER_REGISTER: "/supplier/register",
  GET_SUPPLIER: "/supplier/me",
};

const registerSupplier = (supplier) => {
  return request().post(ENDPOINTS.SUPPLIER_REGISTER, supplier);
};

const getSupplierByUserId = () => {
  return request().get(ENDPOINTS.GET_SUPPLIER);
};

export const SupplierApi = {
  registerSupplier,
  getSupplierByUserId,
};

