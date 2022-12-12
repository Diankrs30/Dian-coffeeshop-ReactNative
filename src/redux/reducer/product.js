import ACTION_STRING from '../actions/actionString';

const initialState = {
  allProduct: [],
  meta: {},
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const ProductReducer = (prevState = initialState, {type, payload}) => {
  const {getAllProduct, pending, rejected, fulfilled} = ACTION_STRING;
  switch (type) {
    case getAllProduct + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getAllProduct + rejected:
      console.log('cek', payload.error.message);
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        error: payload.error.message,
      };
    case getAllProduct + fulfilled:
      console.log('cek fulfilled', payload.data.data);
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        allProduct: payload.data.data,
        meta: payload.data.meta,
      };

    default:
      return prevState;
  }
};

export default ProductReducer;
