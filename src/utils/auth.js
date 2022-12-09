import axios from 'axios';

const HOST = process.env.SUPABASE;

export const register = body => {
  const URL = `${HOST}/users/register`;
  return axios.post(URL, body);
};
