import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import productAction from '../../redux/actions/product';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import ImageDefault from '../../assets/images/coffeeLatte.png';

const cart = require('../../assets/images/shopCart.png');
const back = require('../../assets/images/iconBack.png');

const ProductDetail = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const id = props.route.params.id;
  console.log('cek detail product', id);

  const rupiah = number => {
    return `IDR ${number
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={back} />
        <Image source={cart} />
      </View>
      <ScrollView style={styles.section}>
        <View style={styles.wrapperImage}>
          <Image source={ImageDefault} style={styles.image} />
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.productName}>cold</Text>
            <Text style={styles.price}>1000</Text>
          </View>
          <View style={styles.delivery}>
            <Text style={styles.subTitle}>Delivery</Text>
            <Text style={styles.textDesc}>
              Delivered only on monday until friday from 1 pm to 7 pm
            </Text>
          </View>
          <View style={styles.descContent}>
            <Text style={styles.subTitle}>Description</Text>
            <Text style={styles.textDesc}>
              Cold brewing is a method of brewing that combines ground coffee
              and cool water and uses time instead of heat to extract the
              flavor. It is brewed in small batches and steeped for as long as
              48 hours.
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textBtn}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
