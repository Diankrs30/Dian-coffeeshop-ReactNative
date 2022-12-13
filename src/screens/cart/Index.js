import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import ImageDefault from '../../assets/images/icon-food.png';

const back = require('../../assets/images/iconBack.png');
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import car from '../../assets/images/car.png';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const Cart = () => {
  const navigation = useNavigation();
  const cart = useSelector(state => state.transaction.product_item_view[0]);
  const product = useSelector(state => state.product.detailProduct[0]);
  const size = useSelector(state => state.product.size);
  const [counter, setCounter] = useState(1);
  const [body, setBody] = useState({
    product_item: [],
    product_item_view: [],
    sub_total: null,
  });

  const rupiah = number => {
    return `IDR ${number
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
  };

  const subTotal = () => {
    let sub_total = counter * (product.price + size.upsize_cost);
    // setBody({...body, sub_total});
    return `IDR ${sub_total
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
  };

  const onHadlePlus = () => {
    if (counter < product.stock_product) {
      setCounter(counter + 1);
    }
  };
  const onHandleMinus = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.containerContent}>
        <Text style={styles.textTitle}>My Cart</Text>
        <View style={{marginTop: 30}}>
          <View style={styles.card}>
            <View style={styles.wrapperImg}>
              <Image
                source={{uri: cart.image !== null ? cart.image : ImageDefault}}
                style={styles.image}
              />
            </View>
            <View style={styles.order}>
              <Text style={styles.productName}>{cart.product_name}</Text>
              <Text
                style={{
                  fontFamily: 'Poppins-ExtraBold',
                  fontSize: 15,
                  color: '#6A4029',
                }}>
                {rupiah(cart.price)}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  color: '#000',
                }}>
                {cart.size_product_name}
              </Text>
              <View style={styles.wrapperCount}>
                <Text style={{fontSize: 20}} onPress={onHandleMinus}>
                  -
                </Text>
                <TextInput style={styles.inputCount}>{counter}</TextInput>
                <Text style={{fontSize: 20}} onPress={onHadlePlus}>
                  +
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: 'space-between',
                justifyContent: 'space-between',
              }}>
              <View style={styles.wrapperDelete}>
                <Text>X</Text>
              </View>
            </View>
            <View />
          </View>
        </View>
      </ScrollView>
      <View>
        <View style={{flexDirection: 'row', paddingHorizontal: 50}}>
          <View style={styles.car}>
            <Image source={car} />
            <Text
              style={{color: '#000', fontSize: 12, fontFamily: 'Poppins-Bold'}}>
              Free
            </Text>
          </View>
          <View>
            <View style={{borderBottomColor: '#E0E0E2'}}>
              <Text style={{fontFamily: 'Poppins-Reqular', fontSize: 20}}>
                Total Price
              </Text>
              <Text style={styles.price}>IDR</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.completeOrder}>Completed order</Text>
              <TouchableOpacity
                style={styles.iconArrow}
                onPress={() => navigation.navigate('Delivery Method')}>
                <FontAwesome
                  icon={SolidIcons.arrowRight}
                  style={{
                    color: '#fff',
                    fontSize: 30,
                  }}
                  // onPress={tooglePassword}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View />
      </View>
    </View>
  );
};

export default Cart;
