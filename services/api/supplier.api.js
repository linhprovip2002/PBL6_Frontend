import request from "./axios";

const ENDPOINTS = {
  SUPPLIER_REGISTER: "/supplier/register",
  GET_SUPPLIER: "/supplier/me",
  API_SUPPLIER: "/supplier",
};

const registerSupplier = (supplier) => {
  return request().post(ENDPOINTS.SUPPLIER_REGISTER, supplier);
};

const getSupplierByUserId = () => {
  return request().get(ENDPOINTS.GET_SUPPLIER);
};

const updateSupplierByUserId = (id, data) => {
  return request().put(`${ENDPOINTS.API_SUPPLIER}/${id}`, data);
};

const getAllSuppliers = () => {
  return request().get(ENDPOINTS.API_SUPPLIER);
};

export const SupplierApi = {
  registerSupplier,
  getSupplierByUserId,
  updateSupplierByUserId,
  getAllSuppliers,
};
