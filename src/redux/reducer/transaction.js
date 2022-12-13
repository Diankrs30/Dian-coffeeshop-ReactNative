import ACTION_STRING from '../actions/actionString';

const initialState = {
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
  meta: {},
  history: [],
  product_item: [],
  product_item_view: [],
  // productItm: [],
  // productItmView: [],
};

const transactionReducer = (prevState = initialState, {type, payload}) => {
  const {
    createTransaction,
    createCart,
    getHistory,
    pending,
    rejected,
    fulfilled,
  } = ACTION_STRING;
  switch (type) {
    case createTransaction + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case createTransaction + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.response.data,
      };
    case createTransaction + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
      };

    case getHistory + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getHistory + rejected:
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        error: payload.error.message,
      };
    case getHistory + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        allProduct: payload.data.data,
        meta: payload.data.meta,
      };

    case createCart:
      console.log('nnnnnnn', payload);
      return {
        ...prevState,
        product_item: payload.data.product_item,
        product_item_view: payload.data.product_item_view,
      };

    default:
      return prevState;
  }
};

export default transactionReducer;
