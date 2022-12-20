import ACTION_STRING from './actionString';
import {createTransaction, getHistory} from '../../utils/transaction';

const createTransactionPending = () => ({
  type: ACTION_STRING.createTransaction.concat(ACTION_STRING.pending),
});

const createTransactionRejected = error => ({
  type: ACTION_STRING.createTransaction.concat(ACTION_STRING.rejected),
  payload: {error},
});

const createTransactionFulfilled = data => ({
  type: ACTION_STRING.createTransaction.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const getHistoryPending = () => ({
  type: ACTION_STRING.getHistory.concat(ACTION_STRING.pending),
});

const getHistoryRejected = error => ({
  type: ACTION_STRING.getHistory.concat(ACTION_STRING.rejected),
  payload: {error},
});

const getHistoryFulfilled = data => ({
  type: ACTION_STRING.getHistory.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const createTransactionThunk = (body, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(createTransactionPending());
      const result = await createTransaction(body, token);
      dispatch(createTransactionFulfilled(result.data.data));
      if (typeof cbSuccess === 'function') {
        cbSuccess();
      }
    } catch (error) {
      dispatch(createTransactionRejected(error));
      console.log(error);
      if (typeof cbDenied === 'function') {
        cbDenied();
      }
    }
  };
};

const getHistoryThunk = (param, token) => {
  return async dispatch => {
    try {
      dispatch(getHistoryPending());
      const result = await getHistory(param, token);
      dispatch(getHistoryFulfilled(result.data));
    } catch (error) {
      dispatch(getHistoryRejected(error));
    }
  };
};

const cart = data => {
  return {
    type: ACTION_STRING.createCart,
    payload: {data},
  };
};

const cartReset = () => {
  return {
    type: ACTION_STRING.resetCart,
  };
};

const resetTransaction = () => {
  return {
    type: ACTION_STRING.transactionReset,
  };
};

const transactionAction = {
  createTransactionThunk,
  getHistoryThunk,
  cart,
  cartReset,
  resetTransaction,
};

export default transactionAction;
