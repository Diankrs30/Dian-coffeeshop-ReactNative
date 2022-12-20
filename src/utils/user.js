import axios from 'axios';

const HOST = process.env.API_URL;
const config = token => {
  return {
    headers: {
      'x-access-token': `${token}`,
    },
  };
};

export const getProfile = token => {
  const URL = `${HOST}/users/profile_user`;
  return axios.get(URL, config(token));
};

export const editProfile = (body, token) => {
  const URL = HOST + '/users/profile';
  return axios.patch(URL, body, config(token));
};
