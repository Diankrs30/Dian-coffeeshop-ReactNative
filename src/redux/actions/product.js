import ACTION_STRING from './actionString';
import {
  getAllProduct,
  getDetailProduct,
  getSizeProduct,
} from '../../utils/product';

const getAllProductPending = () => ({
  type: ACTION_STRING.getAllProduct.concat(ACTION_STRING.pending),
});

const getAllProductRejected = error => ({
  type: ACTION_STRING.getAllProduct.concat(ACTION_STRING.rejected),
  payload: {error},
});

const getAllProductFulfilled = data => ({
  type: ACTION_STRING.getAllProduct.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const getDetailProductPending = () => ({
  type: ACTION_STRING.getDetailProduct.concat(ACTION_STRING.pending),
});

const getDetailProductRejected = error => ({
  type: ACTION_STRING.getDetailProduct.concat(ACTION_STRING.rejected),
  payload: {error},
});

const getDetailProductFulfilled = data => ({
  type: ACTION_STRING.getDetailProduct.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const getSizePending = () => ({
  type: ACTION_STRING.getSize.concat(ACTION_STRING.pending),
});

const getSizeRejected = error => ({
  type: ACTION_STRING.getSize.concat(ACTION_STRING.rejected),
  payload: {error},
});

const getSizeFulfilled = data => ({
  type: ACTION_STRING.getSize.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const getAllProductThunk = param => {
  return async dispatch => {
    try {
      dispatch(getAllProductPending());
      const result = await getAllProduct(param);
      dispatch(getAllProductFulfilled(result.data));
    } catch (error) {
      dispatch(getAllProductRejected(error));
    }
  };
};

const getDetailProductThunk = (id, token) => {
  return async dispatch => {
    try {
      dispatch(getDetailProductPending());
      const result = await getDetailProduct(id, token);
      dispatch(getDetailProductFulfilled(result.data));
    } catch (error) {
      dispatch(getDetailProductRejected(error));
    }
  };
};

const getSizeThunk = () => {
  return async dispatch => {
    try {
      dispatch(getSizePending());
      const result = await getSizeProduct();
      dispatch(getSizeFulfilled(result.data));
    } catch (error) {
      dispatch(getSizeRejected(error));
    }
  };
};

const productAction = {
  getAllProductThunk,
  getDetailProductThunk,
  getSizeThunk,
};

export default productAction;
