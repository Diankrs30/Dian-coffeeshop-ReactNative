import ACTION_STRING from '../actions/actionString';

const intialState = {
  product_item: [],
  product_item_view: [],
  subtotal: null,
  tax_and_fee: null,
  shipping_cost: null,
  address_detail: '',
  phone_number: '',
  payment_method: null,
  delivery_methods_id: null,
  set_time: '',
  status_order: '',
};

const updateCartReducer = (prevState = intialState, {type, payload}) => {
  const {updateCart} = ACTION_STRING;
  switch (type) {
    case updateCart:
      console.log('nnnnnnn', payload);
      return {
        ...prevState,
        product_item: payload.data.product_item,
        product_item_view: payload.data.product_item_view,
        sub_total: payload.data.sub_total,
        tax_and_fee: payload.data.tax_and_fee,
        shipping_cost: payload.data.shipping_cost,
        address_detail: payload.data.address_detail,
        phone_number: payload.data.phone_number,
        payment_method: payload.data.payment_method,
        delivery_methods_id: payload.data.delivery_methods_id,
        set_time: payload.data.set_time,
        status_order: payload.data.status_order,
      };

    default:
      return prevState;
  }
};

export default updateCartReducer;
