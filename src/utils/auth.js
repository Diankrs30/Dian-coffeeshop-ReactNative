import axios from 'axios';

const HOST = process.env.API_URL;
const config = token => {
  return {
    headers: {
      'x-access-token': `${token}`,
    },
  };
};

export const register = body => {
  const URL = `${HOST}/users/register`;
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

export const logout = token => {
  const URL = `${HOST}/auth/logout`;
  return axios.delete(URL, config(token));
};
