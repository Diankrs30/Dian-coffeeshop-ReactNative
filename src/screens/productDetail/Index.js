import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import productAction from '../../redux/actions/product';
import {useNavigation} from '@react-navigation/native';
import transactionAction from '../../redux/actions/transaction';

import styles from './style';
import ImageDefault from '../../assets/images/icon-food.png';
const cart = require('../../assets/images/shopCart.png');
const back = require('../../assets/images/iconBack.png');

const ProductDetail = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const id = props.route.params.id;
  const detailProduct = useSelector(state => state.product.detailProduct);
  const isPending = useSelector(state => state.product.isLoading);
  const carts = useSelector(state => state.transaction.product_item);
  const size = useSelector(state => state.product.size);
  const auth = useSelector(state => state.auth.userData);
  const [productItem, setProductItem] = useState({});
  const [counter, setCounter] = useState(1);

  const rupiah = number => {
    return `IDR ${number
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
  };

  const addCart = () => {
    if (productItem.size_product_name === undefined) {
      return ToastAndroid.showWithGravity(
        'You have to choose the size!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }

    const filter = carts.filter(
      item => item.products_id === detailProduct[0].id,
    );
    console.log(filter);
    if (filter?.length > 0) {
      return ToastAndroid.showWithGravity(
        'The product is already in the cart',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }

    dispatch(transactionAction.cart(productItem));
    return ToastAndroid.showWithGravity(
      'Added Product To Cart',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      navigation.navigate('Cart'),
    );
  };

  const onHandlePlus = () => {
    if (counter < detailProduct[0].stock_product) {
      setCounter(counter + 1);
    }
  };
  const onHandleMinus = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  const handleSize = item => {
    // const newProductItem = {
    //   ...productItem,
    //   size_products_id: item.id,
    //   size_product_name: item.size_product,
    //   price: detailProduct.price + item.upsize_cost,
    // };

    // setProductItem(newProductItem);

    setProductItem(product => {
      return {
        ...product,
        size_products_id: item.id,
        size_product_name: item.size_product,
        price: (detailProduct[0].price + item.upsize_cost) * counter,
        quantity: counter,
      };
    });
  };

  useEffect(() => {
    const getDetailProduct = data => {
      setProductItem(product => {
        return {
          ...product,
          products_id: data[0].id,
          product_name: data[0].product_name,
          image: data[0].image,
        };
      });
    };
    dispatch(
      productAction.getDetailProductThunk(id, auth.token, getDetailProduct),
    );
    dispatch(productAction.getSizeThunk());
  }, [dispatch, auth.token, id]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Image source={cart} />
        </TouchableOpacity>
      </View>
      {isPending ? (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <ScrollView style={styles.section}>
          <View style={styles.wrapperImage}>
            {detailProduct.length > 0 && (
              <Image
                source={{
                  uri: `${detailProduct[0].image}`
                    ? `${detailProduct[0].image}`
                    : ImageDefault,
                }}
                style={styles.image}
              />
            )}
          </View>
          <View style={styles.content}>
            {detailProduct.length > 0 && (
              <View>
                <Text style={styles.productName}>
                  {detailProduct[0].product_name}
                </Text>
                <Text style={styles.price}>
                  {rupiah(detailProduct[0].price)}
                </Text>
              </View>
            )}
            <View style={styles.delivery}>
              <Text style={styles.subTitle}>Delivery</Text>
              <Text style={styles.textDesc}>
                Delivered only on monday until friday from 1 pm to 7 pm
              </Text>
            </View>
            {detailProduct.length > 0 && (
              <View style={styles.descContent}>
                <Text style={styles.subTitle}>Description</Text>
                <Text style={styles.textDesc}>
                  {detailProduct[0].product_description}
                </Text>
              </View>
            )}
            <View style={styles.wrapperCounter}>
              <TouchableOpacity
                style={styles.btnCounter}
                onPress={onHandleMinus}>
                <Text style={{fontSize: 20, textAlign: 'center'}}>-</Text>
              </TouchableOpacity>
              <Text style={styles.inputCount}>{counter}</Text>
              <TouchableOpacity
                style={styles.btnCounter}
                onPress={onHandlePlus}>
                <Text style={{fontSize: 20, textAlign: 'center'}}>+</Text>
              </TouchableOpacity>
            </View>
            {detailProduct.length > 0 &&
            detailProduct[0].category === 'Foods' ? (
              <View style={styles.wrapperBtnSize}>
                {size
                  .filter((item, idx) => idx >= 3)
                  .map((item, idx) => {
                    return (
                      <View key={idx}>
                        <TouchableOpacity
                          style={styles.btnSize}
                          onPress={() => handleSize(item)}>
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
                        <TouchableOpacity
                          style={styles.btnSize}
                          onPress={() => handleSize(item)}>
                          <Text style={styles.textBtnSize}>
                            {item.size_product}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
              </View>
            )}

            <TouchableOpacity style={styles.button} onPress={addCart}>
              <Text style={styles.textBtn}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default ProductDetail;
