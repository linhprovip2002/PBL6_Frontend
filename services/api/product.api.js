import request from "./axios";

const ENDPOINTS = {
  LISTPRODUCT: "/products",
  CATEGORY: "/category",
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

const createReview = (id, comment) => {
  return request().post(`${ENDPOINTS.LISTPRODUCT}/${id}/review`, comment);
}

const deleteReview = (id) => {
  return request().delete(`${ENDPOINTS.LISTPRODUCT}/review/${id}`);
}

export const ProductApi = {
  getListProduct,
  getReviewProduct,
  getCategories,
  createReview,
  deleteReview,
};
