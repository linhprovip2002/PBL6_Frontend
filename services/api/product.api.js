import instance from './axios';

const ENDPOINTS = {
  LISTPRODUCT: '/products',
  CATEGORY: '/category',
};

const getListProduct = () => {
  return instance.get(ENDPOINTS.LISTPRODUCT);
};

const getReviewProduct = (id) => {
  return instance.get(`${ENDPOINTS.LISTPRODUCT}/${id}/review`);
};

const getCategories = () => {
  return instance.get(ENDPOINTS.CATEGORY);
};

export const ProductApi = {
  getListProduct,
  getReviewProduct,
  getCategories,
};
