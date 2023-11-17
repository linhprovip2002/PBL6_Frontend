import request from './axios';

const ENDPOINTS = {
  LISTPRODUCT: '/products',
  CATEGORY: '/category',
};

const getListProduct = () => {
  return request().get(ENDPOINTS.LISTPRODUCT);
};

const getReviewProduct = (id) => {
  return request().get(`${ENDPOINTS.LISTPRODUCT}/${id}/review`);
};

const getCategories = () => {
  return request().get(ENDPOINTS.CATEGORY);
};

export const ProductApi = {
  getListProduct,
  getReviewProduct,
  getCategories,
};
