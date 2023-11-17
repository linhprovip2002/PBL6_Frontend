import request from './axios';

const ENDPOINTS = {
  LOGIN: '/auth/login',
  PROFILE: '/user/me',
  REGISTER: '/auth/register',
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

export const AuthApi = {
  login,
  getProfile,
  register,
};
