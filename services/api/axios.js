import { getToken } from '@utils/LocalStorageHandle';
import axios from 'axios';


const baseURL = `https://docker-pratice-production.up.railway.app/api`;

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: "true",
});

// const handleSuccessResponse = async (response) => {
//   return response;
// };
// const handleErrorResponse = async (error) => {
//   try {
//     return Promise.reject(error.response.data);
//   } catch (e) {
//     return Promise.reject({message: 'Network Error'});
//   }
// };

// export const setHeaderConfigAxios = (token) => {
//   if (token) {
//     instance.defaults.headers.common.Authorization = token
//       ? 'Bearer ' + token
//       : '';
//   } else {
//     delete instance.defaults.headers.common.Authorization;
//   }
// };

instance.interceptors.response.use(function (response) {
  return response;
},
function (error) {
  if (error?.response?.status === 401) {
    localStorage.clear();
    window.location.href = "/login";
    return;
  }
  return Promise.reject(error);
});
const request = (options = {}) => {
  const token = getToken();
  if(token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
  if (options.headers) {
    instance.defaults.headers = {
      ...instance.defaults.headers,
      ...options.headers,
    };
  }

  return instance;
};
export default request;
