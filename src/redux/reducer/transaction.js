import ACTION_STRING from '../actions/actionString';

const initialState = {
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
  meta: {},
  history: [],
  product_item: [],
};

const transactionReducer = (prevState = initialState, {type, payload}) => {
  const {
    createTransaction,
    createCart,
    getHistory,
    resetCart,
    pending,
    rejected,
    fulfilled,
    transactionReset,
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
      console.log('create transaction', payload);
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
        history: payload.data.data,
        meta: payload.data.meta,
      };

    case createCart:
      return {
        ...prevState,
        product_item: [...prevState.product_item, payload.data],
      };

    case resetCart:
      return initialState;

    case transactionReset:
      return initialState;

    default:
      return prevState;
  }
};

export default transactionReducer;
