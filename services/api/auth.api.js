import request from "./axios";

const ENDPOINTS = {
  LOGIN: "/auth/login",
  PROFILE: "/user/me",
  REGISTER: "/auth/register",
  UPDATEME: "/user",
  FORGOTPASSWORD: "/auth/forgot-password",
  NEWPASSWORD: "/auth/reset-password/",
};

const forgotPassword = (data) => {
  return request().post(ENDPOINTS.FORGOTPASSWORD, data);
};

const resetPassword = (data) => {
  return request().post(ENDPOINTS.NEWPASSWORD, data);
};

const login = (data) => {
  return request().post(ENDPOINTS.LOGIN, {
    username: data.username,
    password: data.password,
  });
};

const getProfile = () => {
  return request().get(ENDPOINTS.PROFILE);
};

const register = (data) => {
  return request().post(ENDPOINTS.REGISTER, data);
};
const updateMe = (id, data) => {
  return request().put(`${ENDPOINTS.UPDATEME}/${id}`, data);
};
export const AuthApi = {
  login,
  getProfile,
  register,
  updateMe,
  forgotPassword,
  resetPassword,
};
