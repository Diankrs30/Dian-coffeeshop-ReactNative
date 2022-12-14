import axios from 'axios';

const HOST = process.env.API_URL;
const config = token => {
  return {
    headers: {
      'x-access-token': `${token}`,
    },
  };
};

export const getAllProduct = param => {
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

export const getDetailProduct = (id, token) => {
  const URL = `${HOST}/products/product_detail/${id}`;
  return axios.get(URL, config(token));
};

export const getSizeProduct = () => {
  const URL = `${HOST}/size_products`;
  return axios.get(URL);
};

export const editProduct = (body, id, token) => {
  const URL = HOST + `/products/edit_products/${id}`;
  return axios.patch(URL, body, config(token));
};

export const createProduct = (body, token) => {
  const URL = HOST + '/products/create_product';
  console.log(URL);
  return axios.post(URL, body, config(token));
};

export const getPromo = param => {
  const queryParam = {
    search: param.search ?? '',
    page: param.page ?? '1',
    limit: param.limit ?? '6',
  };
  const URL = `${HOST}/promos/?search=${queryParam.search}&page=${queryParam.page}&limit=${queryParam.limit}`;
  return axios.get(URL);
};

export const getPromoById = (id, token) => {
  const URL = HOST + `/promos/detail_promo/${id}`;
  return axios.get(URL, config(token));
};

export const editPromo = (body, id, token) => {
  const URL = HOST + `/promos/edit_promo/${id}`;
  return axios.patch(URL, body, config(token));
};

export const createPromo = (body, token) => {
  const URL = HOST + '/promos/create_promo';
  return axios.post(URL, body, config(token));
};

export const deleteProduct = (id, token) => {
  const URL = HOST + `/products/delete_products/${id}`;
  return axios.delete(URL, config(token));
};

export const deletePromo = (id, token) => {
  const URL = HOST + `/promos/delete_promo/${id}`;
  return axios.delete(URL, config(token));
};
