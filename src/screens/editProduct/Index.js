import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
  Pressable,
  Modal,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import productAction from '../../redux/actions/product';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import styles from './style';
import ImageDefault from '../../assets/images/icon-food.png';
import {TextInput} from 'react-native-gesture-handler';
const back = require('../../assets/images/iconBack.png');
const trash = require('../../assets/images/trash.png');
const pencil = require('../../assets/images/pencil.png');

const ProductDetail = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const id = props.route.params.id;
  const detailProduct = useSelector(state => state.product.detailProduct);
  const isPending = useSelector(state => state.product.isLoading);
  const token = useSelector(state => state.auth.userData.token);

  const [modal, setModalVisible] = useState(false);

  const [productItem, setProductItem] = useState({});
  const [category, setCategory] = useState(detailProduct[0].category);
  const [file, setFile] = useState();
  const [body, setBody] = useState({});

  const rupiah = number => {
    return `IDR ${number
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
  };

  const onChangeHandler = (text, name) => {
    setBody(body => ({...body, [name]: text}));
  };

  let launchCameras = () => {
    let options = {
      storageOptions: {
        saveToPhotos: true,
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.errorMessage) {
        console.log(response);
        return ToastAndroid.showWithGravityAndOffset(
          'Do not have access to open the camera',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
          25,
          50,
        );
      }
      setFile(response.assets);
    });
  };

  let launchImageLibrarys = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.errorMessage) {
        return ToastAndroid.showWithGravityAndOffset(
          'Do not have access to open the library',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
          25,
          50,
        );
      }
      setFile(response.assets);
    });
  };

  const saveHandler = () => {
    const updateSuccess = () => {
      ToastAndroid.showWithGravity(
        'Data changed successfully',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        navigation.navigate('HomeTab', {screen: 'Screen Favorite'}),
      );
    };
    const updateDenied = error => {
      ToastAndroid.showWithGravity(
        `${error}`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    };

    let bodies = new FormData();
    if (category !== detailProduct[0].category_id) {
      bodies.append('category_id', category);
    }
    if (body?.product_name) {
      bodies.append('product_name', body.product_name);
    }
    if (body?.product_description) {
      bodies.append('product_description', body.product_description);
    }
    if (body?.price) {
      bodies.append('price', body.price);
    }
    if (file) {
      bodies.append('image', {
        name: 'test.' + file[0]?.type?.substr(6),
        type: file[0]?.type,
        uri:
          Platform.OS !== 'android' ? 'file://' + file[0]?.uri : file[0]?.uri,
      });
    }
    if (body?.stock_product) {
      bodies.append('stock_product', body.stock_product);
    }

    dispatch(
      productAction.editProductThunk(
        bodies,
        id,
        token,
        updateSuccess,
        updateDenied,
      ),
    );
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
    dispatch(productAction.getDetailProductThunk(id, token, getDetailProduct));
    dispatch(productAction.getSizeThunk());
  }, [dispatch, token, id]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconTrash}>
          <Image source={trash} />
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
                source={
                  file
                    ? {uri: file[0].uri}
                    : detailProduct[0].image
                    ? {uri: detailProduct[0].image}
                    : ImageDefault
                }
                style={styles.image}
              />
            )}
            <Pressable
              style={styles.wrapperPencil}
              onPress={() => setModalVisible(true)}>
              <Image source={pencil} />
            </Pressable>
          </View>
          <View style={styles.content}>
            <View>
              <View
                style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}>
                <TextInput
                  style={styles.productName}
                  keyboardType="text"
                  placeholder={
                    `${detailProduct[0].product_name}` || 'Enter product name'
                  }
                  placeholderTextColor="#000"
                  onChangeText={text => onChangeHandler(text, 'product_name')}
                />
              </View>
              <View
                style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}>
                <TextInput
                  style={styles.price}
                  keyboardType="text"
                  placeholder={
                    `${rupiah(detailProduct[0].price)}` || 'Enter product price'
                  }
                  placeholderTextColor="#6A4029"
                  onChangeText={text => onChangeHandler(text, 'price')}
                />
              </View>
            </View>
            <View style={styles.delivery}>
              <Text style={styles.subTitle}>Delivery</Text>
              <View
                style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}>
                <Text style={styles.textDesc}>
                  Delivered only on monday until friday from 1 pm to 7 pm
                </Text>
              </View>
            </View>
            <View style={styles.descContent}>
              <Text style={styles.subTitle}>Description</Text>
              <View
                style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}>
                <TextInput
                  style={styles.textDesc}
                  keyboardType="text"
                  placeholder={
                    `${detailProduct[0].product_description}` ||
                    'Enter product description'
                  }
                  placeholderTextColor="#000"
                  onChangeText={text =>
                    onChangeHandler(text, 'product_description')
                  }
                />
              </View>
            </View>
            <View style={styles.descContent}>
              <Text style={styles.subTitle}>Stock Product</Text>
              <View
                style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}>
                <TextInput
                  style={styles.textDesc}
                  keyboardType="text"
                  placeholder={
                    `${detailProduct[0].stock_product}` || 'Enter product stock'
                  }
                  placeholderTextColor="#000"
                  onChangeText={text => onChangeHandler(text, 'stock_product')}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.radio}>
                <Pressable
                  style={
                    category === '1'
                      ? styles.checkedOuter
                      : styles.unchekedOuter
                  }
                  onPress={() => setCategory('1')}>
                  <View
                    style={category === '1' ? styles.checkedInner : undefined}
                  />
                </Pressable>
                <Text
                  style={
                    category === '1' ? styles.checkedText : styles.uncheckedText
                  }>
                  Food
                </Text>
              </View>
              <View style={styles.radio}>
                <Pressable
                  style={
                    category === '2'
                      ? styles.checkedOuter
                      : styles.unchekedOuter
                  }
                  onPress={() => setCategory('2')}>
                  <View
                    style={category === '2' ? styles.checkedInner : undefined}
                  />
                </Pressable>
                <Text
                  style={
                    category === '2' ? styles.checkedText : styles.uncheckedText
                  }>
                  Coffee
                </Text>
              </View>
              <View style={styles.radio}>
                <Pressable
                  style={
                    category === '3'
                      ? styles.checkedOuter
                      : styles.unchekedOuter
                  }
                  onPress={() => setCategory('3')}>
                  <View
                    style={category === '3' ? styles.checkedInner : undefined}
                  />
                </Pressable>
                <Text
                  style={
                    category === '3' ? styles.checkedText : styles.uncheckedText
                  }>
                  Non Coffee
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={saveHandler}>
              {isPending ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <Text style={styles.textBtn}>Save change</Text>
              )}
            </TouchableOpacity>
          </View>
          <Modal
            visible={modal}
            transparent={true}
            onRequestClose={() => {
              setModalVisible();
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: 15,
                    top: 15,
                  }}>
                  <Text
                    style={{fontSize: 20, paddingRight: 10}}
                    onPress={() => setModalVisible(!modal)}>
                    X
                  </Text>
                </View>
                <Pressable
                  style={{
                    marginTop: 20,
                    marginBottom: 15,
                    padding: 10,
                    backgroundColor: '#DCDCDC',
                  }}
                  onPress={() => {
                    launchCameras();
                    setModalVisible(!modal);
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Black',
                      color: '#868686',
                      fontSize: 17,
                      textAlign: 'center',
                    }}>
                    OPEN CAMERA
                  </Text>
                </Pressable>
                <Pressable
                  style={{padding: 10, backgroundColor: '#DCDCDC'}}
                  onPress={() => {
                    launchImageLibrarys();
                    setModalVisible(!modal);
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Black',
                      color: '#868686',
                      fontSize: 17,
                      textAlign: 'center',
                    }}>
                    OPEN IMAGE LIBRARY
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </ScrollView>
      )}
    </View>
  );
};

export default ProductDetail;
