import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import transactionActions from '../../redux/actions/transaction';
import updateCartAction from '../../redux/actions/updateCart';
import {useNavigation} from '@react-navigation/native';
import {Divider} from '@rneui/themed';
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
  Pressable,
} from 'react-native';

import styles from './style';
import ImageDefault from '../../assets/images/icon-food.png';
import cash from '../../assets/images/cash.png';
import bank from '../../assets/images/bankAccount.png';
import cod from '../../assets/images/cashOnDelivery.png';
const back = require('../../assets/images/iconBack.png');

function Payment() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const updateCart = useSelector(state => state.updateCart.product_item);
  const auth = useSelector(state => state.auth.userData);
  const [paymentMethod, setPaymentMethod] = useState();
  const [isLoading, setLoading] = useState(false);
  const payments = useSelector(state => state.updateCart);
  const [productItem, setProductItem] = useState({
    product_item: payments.product_item,
    subtotal: payments.subtotal,
    tax_and_fee: payments.tax_and_fee,
    shipping_cost: payments.shipping_cost,
    address_detail: payments.address_detail,
    phone_number: payments.phone_number,
    delivery_methods_id: payments.delivery_methods_id,
  });

  const rupiah = number => {
    return `IDR ${number
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
  };

  const subTotal = () => {
    const sub_total = payments.subtotal;
    const tax = sub_total * 0.11;
    const total = sub_total + tax + 5000;
    return `IDR ${total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
  };

  const handlePayment = () => {
    console.log(paymentMethod);
    if (paymentMethod === undefined) {
      return ToastAndroid.showWithGravity(
        'Select payment method!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }

    const newProductItem = {
      ...productItem,
      payment_method: paymentMethod,
      set_time: '00:00:00',
      status_order: 'pending',
    };

    setProductItem(newProductItem);

    const createTransactionSuccess = () => {
      dispatch(transactionActions.cartReset());
      dispatch(updateCartAction.updateCartReset());
      return ToastAndroid.showWithGravity(
        'Create transaction success!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        navigation.navigate('ProfileTab', {screen: 'History'}),
      );
    };

    const createTransactionDenied = () => {
      ToastAndroid.showWithGravity(
        // `${auth.error}`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    };

    dispatch(
      transactionActions.createTransactionThunk(
        newProductItem,
        auth.token,
        createTransactionSuccess,
        createTransactionDenied,
      ),
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={styles.textHeader}>Checkout</Text>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <>
          <Text style={styles.TitleProduct}>Products</Text>
          {updateCart.length > 0 &&
            updateCart.map((item, idx) => {
              return (
                <View style={styles.Containercard}>
                  <View style={styles.card}>
                    <>
                      <Image
                        source={{
                          uri: item.image !== null ? item.image : ImageDefault,
                        }}
                        style={styles.imageCard}
                      />
                    </>
                    <View
                      style={{
                        marginHorizontal: 15,
                        minWidth: 100,
                        maxWidth: 80,
                      }}>
                      <Text style={styles.Title}>{item.product_name}</Text>
                      <Text style={styles.Title}>X {item.quantity}</Text>
                      <Text style={styles.Title}>{item.size_product_name}</Text>
                    </View>
                    <View style={{marginHorizontal: 5}}>
                      <Text style={styles.price}>{rupiah(item.price)}</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          <Text style={styles.TitleProduct}>Payment method</Text>
          <View style={styles.CardMethods}>
            <View>
              <View style={styles.radio}>
                <Pressable
                  style={
                    paymentMethod === '1'
                      ? styles.checkedOuter
                      : styles.unchekedOuter
                  }
                  onPress={() => {
                    setPaymentMethod('1');
                  }}>
                  <View
                    style={
                      paymentMethod === '1' ? styles.checkedInner : undefined
                    }
                  />
                </Pressable>
              </View>
              <View style={styles.radio}>
                <Pressable
                  style={
                    paymentMethod === '3'
                      ? styles.checkedOuter
                      : styles.unchekedOuter
                  }
                  onPress={() => {
                    setPaymentMethod('3');
                  }}>
                  <View
                    style={
                      paymentMethod === '3' ? styles.checkedInner : undefined
                    }
                  />
                </Pressable>
              </View>
              <View style={styles.radio}>
                <Pressable
                  style={
                    paymentMethod === '2'
                      ? styles.checkedOuter
                      : styles.unchekedOuter
                  }
                  onPress={() => {
                    setPaymentMethod('2');
                  }}>
                  <View
                    style={
                      paymentMethod === '2' ? styles.checkedInner : undefined
                    }
                  />
                </Pressable>
              </View>
            </View>
            <View>
              <View style={styles.methodList}>
                <View style={styles.methodCard}>
                  <Image source={cash} />
                </View>
                <Text
                  style={styles.textMethod}
                  onPress={() => {
                    setPaymentMethod('1');
                  }}>
                  Cash
                </Text>
              </View>
              <Divider
                width={1}
                style={{width: '100%', marginTop: 5, marginBottom: 3.5}}
              />
              <View style={styles.methodList}>
                <View style={styles.methodBank}>
                  <Image source={bank} />
                </View>
                <Text
                  style={styles.textMethod}
                  onPress={() => {
                    setPaymentMethod('3');
                  }}>
                  Bank account
                </Text>
              </View>
              <Divider
                width={1}
                style={{width: '100%', marginTop: 5, marginBottom: 3.5}}
              />
              <View style={styles.methodList}>
                <View style={styles.methodCod}>
                  <Image source={cod} />
                </View>
                <Text
                  style={styles.textMethod}
                  onPress={() => {
                    setPaymentMethod('2');
                  }}>
                  Cash on delivery
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 10,
              paddingBottom: 20,
              alignItems: 'center',
            }}>
            <Text style={styles.totals}>Total</Text>
            <Text style={styles.prices}>{subTotal()}</Text>
          </View>
          <View style={{paddingBottom: 30}}>
            <TouchableOpacity
              activeOpacity={0.8}
              // onPress={() => {
              //   handlePress();
              // }}
            >
              {isLoading ? (
                <View style={styles.btnLoading}>
                  <ActivityIndicator size="large" color="white" />
                </View>
              ) : (
                <Pressable style={styles.btnPayment} onPress={handlePayment}>
                  <Text style={styles.textBtnPayment}>Proceed payment</Text>
                </Pressable>
              )}
            </TouchableOpacity>
          </View>
        </>
      </ScrollView>
    </View>
  );
}

export default Payment;
