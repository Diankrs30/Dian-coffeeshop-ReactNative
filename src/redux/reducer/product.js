import ACTION_STRING from '../actions/actionString';

const initialState = {
  allProduct: [],
  meta: {},
  detailProduct: [],
  size: [],
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const ProductReducer = (prevState = initialState, {type, payload}) => {
  const {
    getAllProduct,
    getDetailProduct,
    getSize,
    pending,
    rejected,
    fulfilled,
  } = ACTION_STRING;
  switch (type) {
    case getDetailProduct + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getDetailProduct + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.response.data,
      };
    case getDetailProduct + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        detailProduct: payload.data.data,
      };

    case getAllProduct + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getAllProduct + rejected:
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        error: payload.error.message,
      };
    case getAllProduct + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        allProduct: payload.data.data,
        meta: payload.data.meta,
      };

    case getSize + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getSize + rejected:
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        error: payload.error.response.data,
      };
    case getSize + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        size: payload.data.data,
      };

    default:
      return prevState;
  }
};

export default ProductReducer;
