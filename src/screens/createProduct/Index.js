import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  ToastAndroid,
  Platform,
  TouchableOpacity,
  Pressable,
  Modal,
  ActivityIndicator,
} from 'react-native';
import styles from './style';

import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import productAction from '../../redux/actions/product';

const back = require('../../assets/images/iconBack.png');
const trash = require('../../assets/images/trash.png');
import camera from '../../assets/images/camera.png';

function NewProduct() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const token = useSelector(state => state.auth.userData.token);
  const detailProduct = useSelector(state => state.product.detailProduct);

  const [modal, setModalVisible] = useState(false);

  const [category, setCategory] = useState(detailProduct[0].category);
  const [body, setBody] = useState({});
  const [file, setFile] = useState();

  const changeHandler = (text, name) => {
    setBody(body => ({...body, [name]: text}));
  };

  const saveHandler = () => {
    const updateSuccess = () => {
      ToastAndroid.showWithGravity(
        'Create Product successfully',
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
    if (category !== detailProduct[0].category_id) {
      bodies.append('category_id', category);
    }

    dispatch(
      productAction.createProductThunk(
        bodies,
        token,
        updateSuccess,
        updateDenied,
      ),
    );
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
  return (
    <>
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={back} />
          </TouchableOpacity>
          <View style={{justifyContent: 'center', flex: 1}}>
            <Text style={styles.textHeader}>New Product</Text>
          </View>
          <TouchableOpacity style={styles.iconTrash}>
            <Image source={trash} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.all_container}>
          <View />
          <View style={styles.container_up}>
            <Image
              source={file ? {uri: file[0].uri} : camera}
              style={styles.image}
            />
            <Pressable
              style={styles.wrapperPencil}
              onPress={() => setModalVisible(true)}>
              <Text style={{fontSize: 30, color: '#fff'}}>+</Text>
            </Pressable>
          </View>
          <View>
            <Text style={styles.text}>Product Name</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Type product name min. 30 characters"
              keyboardType="none"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(text, 'product_name')}
            />
            <Text style={styles.text}>Price</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Type product price"
              keyboardType="numeric"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(parseInt(text), 'price')}
            />
            <Text style={styles.text}>Category</Text>
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
            <Text style={styles.text}>Description</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Describe your product max. 150 characters"
              keyboardType="none"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(text, 'product_description')}
            />
            <Text style={styles.text}>Stock Product</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Type your stock product"
              keyboardType="none"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(text, 'stock_product')}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={saveHandler}>
              {/* {isPending ? (
                <ActivityIndicator size="large" color="white" />
              ) : ( */}
              <Text style={styles.textBtn}>Save change</Text>
              {/* )} */}
            </TouchableOpacity>
          </View>
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
    </>
  );
}

export default NewProduct;
