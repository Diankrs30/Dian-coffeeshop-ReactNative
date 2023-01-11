import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Divider} from '@rneui/themed';
import updateCartAction from '../../redux/actions/updateCart';

import styles from './style';
const back = require('../../assets/images/iconBack.png');

const DeliveryMethod = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const profile = useSelector(state => state.user.profile);
  const updateCart = useSelector(state => state.updateCart);
  const [method, setMethod] = useState('3');
  const [productItem, setproductItem] = useState({
    product_item: updateCart.product_item,
    subtotal: updateCart.subtotal,
    tax_and_fee: null,
    shipping_cost: null,
    address_detail: '',
    phone_number: '',
    delivery_methods_id: null,
  });

  const subTotal = () => {
    const subtotal = updateCart.subtotal;

    const tax = subtotal * 0.11;
    const total = subtotal + tax + 5000;
    return `IDR ${total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
  };

  const handleMethodDelivery = () => {
    const sub_total = updateCart.subtotal;

    const newProductItem = {
      ...productItem,
      tax_and_fee: sub_total * 0.11,
      shipping_cost: 5000,
      address_detail: profile.delivery_address,
      phone_number: profile.phone_number,
      delivery_methods_id: method,
    };

    dispatch(updateCartAction.newCart(newProductItem));
    navigation.navigate('Payment');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={styles.textHeader}>Checkout</Text>
        </View>
      </View>
      <ScrollView style={{paddingHorizontal: 50, paddingTop: 20}}>
        <Text style={styles.title}>Delivery</Text>
        <View style={styles.wrapperAddress}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontFamily: 'Poppins-Bold', fontSize: 17, color: '#000'}}>
              Address detail
            </Text>
            <Pressable>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 15,
                  color: '#6A4029',
                }}>
                change
              </Text>
            </Pressable>
          </View>
          <View style={styles.cardAddress}>
            <TextInput
              style={styles.input}
              placeholder={profile.first_name + ' ' + profile.last_name}
              placeholderTextColor="#000"
            />
            <TextInput
              style={styles.input}
              placeholder={profile.delivery_address}
              placeholderTextColor="#000"
            />
            <TextInput
              style={styles.input2}
              placeholder={profile.phone_number}
              placeholderTextColor="#000"
            />
          </View>
        </View>
        <View style={styles.wrapperAddress}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontFamily: 'Poppins-Bold', fontSize: 17, color: '#000'}}>
              Delivery and Time
            </Text>
          </View>
          <View style={styles.cardDeliveryMethods}>
            {/* <View style={styles.CardMethods}> */}
            <View>
              <View style={styles.radio}>
                <Pressable
                  style={
                    method === '3' ? styles.checkedOuter : styles.unchekedOuter
                  }
                  onPress={() => {
                    setMethod('3');
                  }}>
                  <View
                    style={method === '3' ? styles.checkedInner : undefined}
                  />
                </Pressable>
              </View>
              <View style={styles.radio}>
                <Pressable
                  style={
                    method === '2' ? styles.checkedOuter : styles.unchekedOuter
                  }
                  onPress={() => {
                    setMethod('2');
                  }}>
                  <View
                    style={method === '2' ? styles.checkedInner : undefined}
                  />
                </Pressable>
              </View>
              <View style={styles.radio}>
                <Pressable
                  style={
                    method === '1' ? styles.checkedOuter : styles.unchekedOuter
                  }
                  onPress={() => {
                    setMethod('1');
                  }}>
                  <View
                    style={method === '1' ? styles.checkedInner : undefined}
                  />
                </Pressable>
              </View>
            </View>
            <View>
              <Text
                style={styles.textMethod}
                onPress={() => {
                  setMethod('3');
                }}>
                Door delivery
              </Text>
              <Divider
                width={1}
                style={{width: '100%', marginTop: 5, marginBottom: 5.5}}
              />
              <Text
                style={styles.textMethod}
                onPress={() => {
                  setMethod('2');
                }}>
                Pick up at store
              </Text>
              <Divider
                width={1}
                style={{width: '100%', marginTop: 5, marginBottom: 5.5}}
              />
              <Text
                style={styles.textMethod}
                onPress={() => {
                  setMethod('1');
                }}>
                Dine in
              </Text>
            </View>
            {/* </View> */}
          </View>
          <View style={styles.wrapperCost}>
            <Text style={styles.textCost}>Cost</Text>
            <Text style={styles.textCost}>{subTotal()}</Text>
          </View>
          <TouchableOpacity
            style={styles.btnConfirm}
            onPress={handleMethodDelivery}>
            <Text style={styles.textConfirm}>Confirm and pay</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DeliveryMethod;
