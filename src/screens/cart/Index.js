import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import transactionAction from '../../redux/actions/transaction';
import updateCartAction from '../../redux/actions/updateCart';

import styles from './style';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import ImageDefault from '../../assets/images/icon-food.png';
const back = require('../../assets/images/iconBack.png');
import car from '../../assets/images/car.png';
import emptyCart from '../../assets/images/emptyCart.png';

const Cart = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cart = useSelector(state => state.transaction.product_item);
  const [productItem, setProductItem] = useState({
    product_item: cart,
    subtotal: null,
  });

  const rupiah = number => {
    return `IDR ${number
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
  };

  const subTotal = () => {
    let temp = 0;
    cart.map((item, index) => {
      return (temp += item.price);
    });
    return `IDR ${temp.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
  };

  const handleOrder = () => {
    let temp = 0;
    cart.map((item, index) => {
      return (temp += item.price);
    });

    const newProductItem = {
      ...productItem,
      subtotal: temp,
    };
    dispatch(updateCartAction.newCart(newProductItem));
    navigation.navigate('Delivery Method');
  };

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <View style={{flex: 1}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={back} />
            </TouchableOpacity>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={styles.textHeader}>Order</Text>
            </View>
          </View>
          <View style={styles.containerEmpty}>
            <>
              <Image source={emptyCart} />
            </>
            <Text style={styles.title}>No orders yet</Text>
            <Text style={styles.decsEmpty}>
              Hit the orange button down below to Create an order
            </Text>
          </View>
          <View style={{paddingHorizontal: 50}}>
            <TouchableOpacity
              style={styles.btnOrder}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.textBtnOrder}>Start ordering</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={back} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.containerContent}>
            <Text style={styles.textTitle}>My Cart</Text>
            <View style={{marginTop: 30}}>
              {/* card */}
              {cart.length > 0 &&
                cart.map((item, idx) => {
                  return (
                    <View style={styles.card} key={idx}>
                      <View style={styles.wrapperImg}>
                        <Image
                          source={{
                            uri:
                              item.image !== null ? item.image : ImageDefault,
                          }}
                          style={styles.image}
                        />
                      </View>
                      <View style={styles.order}>
                        <Text style={styles.productName}>
                          {item.product_name}
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Poppins-ExtraBold',
                            fontSize: 15,
                            color: '#6A4029',
                          }}>
                          {rupiah(item.price)}
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Poppins-Regular',
                            fontSize: 12,
                            color: '#000',
                          }}>
                          {item.quantity} X {item.size_product_name}
                        </Text>
                      </View>
                      <View
                        style={{
                          alignItems: 'space-between',
                          justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity
                          style={styles.wrapperDelete}
                          // onPress={handleDaleteCart}
                        >
                          <Text>X</Text>
                        </TouchableOpacity>
                      </View>
                      <View />
                    </View>
                  );
                })}

              {/* end card */}
            </View>
          </ScrollView>
          <View>
            <View style={{flexDirection: 'row', paddingHorizontal: 50}}>
              <View style={styles.car}>
                <Image source={car} />
                <Text
                  style={{
                    color: '#000',
                    fontSize: 12,
                    fontFamily: 'Poppins-Bold',
                  }}>
                  Free
                </Text>
              </View>
              <View>
                <View style={{borderBottomColor: '#E0E0E2'}}>
                  <Text style={{fontFamily: 'Poppins-Reqular', fontSize: 20}}>
                    Total Price
                  </Text>
                  <Text style={styles.price}>{subTotal()}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onPress={handleOrder}>
                  <Text style={styles.completeOrder}>Completed order</Text>
                  <View style={styles.iconArrow}>
                    <FontAwesome
                      icon={SolidIcons.arrowRight}
                      style={{
                        color: '#fff',
                        fontSize: 30,
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View />
          </View>
        </>
      )}
    </View>
  );
};

export default Cart;
