import ACTION_STRING from './actionString';
import {
  getAllProduct,
  getDetailProduct,
  getSizeProduct,
  editProduct,
  createProduct,
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

const editProductPending = () => ({
  type: ACTION_STRING.editProduct.concat(ACTION_STRING.pending),
});

const editProductRejected = error => ({
  type: ACTION_STRING.editProduct.concat(ACTION_STRING.rejected),
  payload: {error},
});

const editProductFulfilled = data => ({
  type: ACTION_STRING.editProduct.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const createProductPending = () => ({
  type: ACTION_STRING.createProduct.concat(ACTION_STRING.pending),
});

const createProductRejected = error => ({
  type: ACTION_STRING.createProduct.concat(ACTION_STRING.rejected),
  payload: {error},
});

const createProductFulfilled = data => ({
  type: ACTION_STRING.createProduct.concat(ACTION_STRING.fulfilled),
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

const getDetailProductThunk = (id, token, cbSuccess) => {
  return async dispatch => {
    try {
      dispatch(getDetailProductPending());
      const result = await getDetailProduct(id, token);
      dispatch(getDetailProductFulfilled(result.data));
      if (typeof cbSuccess === 'function') {
        cbSuccess(result.data.data);
      }
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

const editProductThunk = (body, id, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(editProductPending());
      const result = await editProduct(body, id, token);
      dispatch(editProductFulfilled(result.data.data));
      if (typeof cbSuccess === 'function') {
        cbSuccess();
      }
    } catch (error) {
      dispatch(editProductRejected(error));
      if (typeof cbDenied === 'function') {
        cbDenied();
      }
    }
  };
};

const createProductThunk = (body, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(createProductPending());
      const result = await createProduct(body, token);
      dispatch(createProductFulfilled(result.data.data));
      if (typeof cbSuccess === 'function') {
        cbSuccess();
      }
    } catch (error) {
      dispatch(createProductRejected(error));
      console.log(error);
      if (typeof cbDenied === 'function') {
        cbDenied();
      }
    }
  };
};

const productAction = {
  getAllProductThunk,
  getDetailProductThunk,
  getSizeThunk,
  editProductThunk,
  createProductThunk,
};

export default productAction;
