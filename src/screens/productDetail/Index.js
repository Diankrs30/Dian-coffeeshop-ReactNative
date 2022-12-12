import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import productAction from '../../redux/actions/product';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import ImageDefault from '../../assets/images/icon-food.png';

const cart = require('../../assets/images/shopCart.png');
const back = require('../../assets/images/iconBack.png');

const ProductDetail = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const id = props.route.params.id;
  const detailProduct = useSelector(state => state.product.detailProduct[0]);
  const size = useSelector(state => state.product.size);
  const auth = useSelector(state => state.auth.userData);

  const rupiah = number => {
    return `IDR ${number
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
  };

  const toCart = () => {
    navigation.navigate('Cart');
  };

  useEffect(() => {
    dispatch(productAction.getDetailProductThunk(id, auth.token));
    dispatch(productAction.getSizeThunk());
  }, [dispatch, auth.token, id]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
        <Image source={cart} />
      </View>
      <ScrollView style={styles.section}>
        <View style={styles.wrapperImage}>
          <Image
            source={{
              uri: `${detailProduct.image}`
                ? `${detailProduct.image}`
                : ImageDefault,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.productName}>{detailProduct.product_name}</Text>
            <Text style={styles.price}>{rupiah(detailProduct.price)}</Text>
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
              {detailProduct.product_description}
            </Text>
          </View>
          {detailProduct.category === 'Foods' ? (
            <View style={styles.wrapperBtnSize}>
              {size
                .filter((item, idx) => idx >= 3)
                .map((item, idx) => {
                  return (
                    <View key={idx}>
                      <TouchableOpacity style={styles.btnSize}>
                        <Text style={styles.textBtnSize}>
                          {item.size_product}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
            </View>
          ) : (
            <View style={styles.wrapperBtnSize}>
              {size
                .filter((item, idx) => idx <= 2)
                .map((item, idx) => {
                  return (
                    <View key={idx}>
                      <TouchableOpacity style={styles.btnSize}>
                        <Text style={styles.textBtnSize}>
                          {item.size_product}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
            </View>
          )}

          <TouchableOpacity style={styles.button} onPress={toCart}>
            <Text style={styles.textBtn}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
