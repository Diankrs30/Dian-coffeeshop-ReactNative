import axios from 'axios';

const HOST = process.env.API_URL;

export const register = body => {
  const URL = `${HOST}/users/register`;
  // console.log('util', body);
  return axios.post(URL, body);
};

export const login = body => {
  const URL = `${HOST}/auth/login`;
  return axios.post(URL, body);
};

export const forgotPassword = body => {
  const URL = `${HOST}/users/forgotpassword`;
  console.log('util', body);
  return axios.post(URL, body);
};

export const resetPwd = body => {
  const URL = `${HOST}/users/resetpassword`;
  return axios.patch(URL, body);
};
