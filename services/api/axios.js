import axios from 'axios';


const baseURL = `${process.env.BASE_URL}/api`;

const instance = axios.create({
  baseURL: baseURL,
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded',
  // },
  withCredentials: true,
});

const handleSuccessResponse = async (response) => {
  return response;
};
const handleErrorResponse = async (error) => {
  try {
    return Promise.reject(error.response.data);
  } catch (e) {
    return Promise.reject({message: 'Network Error'});
  }
};

export const setHeaderConfigAxios = (token) => {
  if (token) {
    instance.defaults.headers.common.Authorization = token
      ? 'Bearer ' + token
      : '';
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
};

instance.interceptors.response.use(handleSuccessResponse, handleErrorResponse);

export default instance;
