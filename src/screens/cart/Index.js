import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import ImageDefault from '../../assets/images/icon-food.png';
const back = require('../../assets/images/iconBack.png');

const Cart = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.containerContent}>
        <Text style={styles.textTitle}>May Cart</Text>
        <View style={styles.wrapperCard}>
          <View style={styles.card}>
            <View style={styles.wrapperImg}>
              <Image source={ImageDefault} style={styles.image} />
            </View>
            <View style={styles.order}>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 17,
                  color: '#000',
                  height: 50,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  lineHeight: 20,
                }}>
                Cocho caffe latte cococo
              </Text>
              <Text>IDR 28.000</Text>
              <Text>XL</Text>
            </View>
            <View>
              <View style={styles.wrapperCount}>
                <Text>1</Text>
              </View>
            </View>
            <View />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Cart;
