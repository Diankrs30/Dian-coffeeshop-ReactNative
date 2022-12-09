import axios from 'axios';

const HOST = process.env.API_URL;

export const register = body => {
  const URL = `${HOST}/users/register`;
  console.log('util', body);
  return axios.post(URL, body);
};
