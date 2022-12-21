import axios from 'axios';

const HOST = process.env.API_URL;
const config = token => {
  return {
    headers: {
      'x-access-token': `${token}`,
    },
  };
};

export const createTransaction = (body, token) => {
  const URL = HOST + '/transactions/create_transactions';
  return axios.post(URL, body, config(token));
};

export const getHistory = (param, token) => {
  const queryParam = {
    sort: param.sort ?? 'created_at',
    order: param.order ?? 'asc',
    page: param.page ?? '1',
    limit: param.limit ?? '5',
  };
  const URL =
    HOST +
    `/transactions/history?page=${queryParam.page}&limit=${queryParam.limit}`;
  return axios.get(URL, config(token));
};
