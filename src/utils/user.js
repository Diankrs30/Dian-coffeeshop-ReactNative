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
  console.log('>>>>>>>', URL);
  return axios.get(URL, config(token));
};
