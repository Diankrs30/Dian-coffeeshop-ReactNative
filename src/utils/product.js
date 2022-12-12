import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const HOST = process.env.API_URL;
const config = token => {
  return {
    headers: {
      'x-access-token': `${token}`,
    },
  };
};

export const getAllProduct = param => {
  console.log('<<<', param);
  const queryParam = {
    search: param.search ?? '',
    category: param.category ?? '',
    sort: param.sort ?? 'id',
    order: param.order ?? 'asc',
    page: param.page ?? '1',
    limit: param.limit ?? '6',
  };
  const URL = `${HOST}/products/get_products?search=${queryParam.search}&category=${queryParam.category}&order=${queryParam.order}&sort=${queryParam.sort}&page=${queryParam.page}&limit=${queryParam.limit}`;

  return axios.get(URL);
};
