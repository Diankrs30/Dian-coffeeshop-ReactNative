import ACTION_STRING from '../actions/actionString';

const initialState = {
  allProduct: [],
  meta: {},
  detailProduct: {},
  size: [],
  promo: [],
  detailPromo: {},
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
    editProduct,
    createProduct,
    getAllPromo,
    detailPromo,
    editPromo,
    createPromo,
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
    case editProduct + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case editProduct + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.message,
      };
    case editProduct + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        detailProduct: {...prevState.detailProduct, ...payload.data.data},
      };

    case createProduct + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case createProduct + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.message,
      };
    case createProduct + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
      };

    case getAllPromo + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getAllPromo + rejected:
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        error: payload.error.message,
      };
    case getAllPromo + fulfilled:
      const newPromo = payload.data.data;
      const pagePromo = payload.data.meta.page;
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        promo: pagePromo > 1 ? [...prevState.promo, ...newPromo] : newPromo,
      };

    case detailPromo + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case detailPromo + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.response.data,
      };
    case detailPromo + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        detailPromo: payload.data.data,
      };

    case editPromo + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case editPromo + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.message,
      };
    case editPromo + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        detailProduct: {...prevState.detailPromo, ...payload.data.data},
      };

    case createPromo + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case createPromo + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.message,
      };
    case createPromo + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
      };

    default:
      return prevState;
  }
};

export default ProductReducer;
