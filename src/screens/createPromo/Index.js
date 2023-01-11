import React, {useEffect, useState} from 'react';
import camera from '../../assets/images/camera.png';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import productAction from '../../redux/actions/product';
import DatePicker from 'react-native-date-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
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
  ActivityIndicator,
} from 'react-native';

import styles from './style';
import calendar from '../../assets/images/calendar.png';
import SelectDropdown from 'react-native-select-dropdown';
const back = require('../../assets/images/iconBack.png');
const trash = require('../../assets/images/trash.png');

function CreatePromo() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const promo = useSelector(state => state.product.detailPromo);
  const AllProduct = useSelector(state => state.product.allProduct);
  const errorMsg = useSelector(state => state.product.error);
  const token = useSelector(state => state.auth.userData.token);
  const isLoading = useSelector(state => state.product.isLoading);
  const product = useSelector(state => state.product.allProduct);
  const [body, setBody] = useState({});
  const [file, setFile] = useState();
  const [updateDateStart, setUpdateDateStart] = useState('');
  const [updateDateEnd, setUpdateDateEnd] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const changeHandler = (text, name) => {
    setBody(body => ({...body, [name]: text}));
  };

  const dateHandler = date => new Date(date).toLocaleDateString();

  const createPromoHandler = () => {
    const createSuccess = () => {
      ToastAndroid.showWithGravity(
        'Create promo successfully',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        navigation.navigate('All Promo'),
      );
    };
    const createDenied = () => {
      ToastAndroid.showWithGravity(
        `${errorMsg}`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    };

    let bodies = new FormData();
    // if (body?.products_id) {
    //   bodies.append('products_id', body.products_id);
    // }
    if (body?.code_promo) {
      bodies.append('code_promo', body.code_promo);
    }
    if (body?.discount) {
      bodies.append('discount', body.discount);
    }
    if (updateDateEnd !== promo[0].end_discount) {
      bodies.append('end_discount', updateDateEnd);
    }
    if (file) {
      bodies.append('image', {
        name: 'test.' + file[0]?.type?.substr(6),
        type: file[0]?.type,
        uri:
          Platform.OS !== 'android' ? 'file://' + file[0]?.uri : file[0]?.uri,
      });
    }
    if (body?.promo_description) {
      bodies.append('promo_description', body.promo_description);
    }
    if (body?.promo_name) {
      bodies.append('promo_name', body.promo_name);
    }
    if (updateDateStart !== promo[0].start_discount) {
      bodies.append('start_discount', updateDateStart);
    }

    console.log(bodies);
    console.log(body);

    dispatch(
      productAction.createPromoThunk(
        bodies,
        token,
        createSuccess,
        createDenied,
      ),
    );
  };

  let cameraLauncher = () => {
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

  let libraryLauncher = () => {
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

  // useEffect(() => {
  //   dispatch(productAction.getDetailPromoThunk(token));
  // }, [dispatch, token]);

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={styles.textHeader}>New Promo</Text>
        </View>
        <TouchableOpacity style={styles.iconTrash}>
          <Image source={trash} />
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <ScrollView>
          <View style={styles.all_container}>
            <View />
            <View style={styles.container_up}>
              <View>
                <Image
                  style={styles.image}
                  source={
                    file
                      ? {uri: file[0].uri}
                      : promo[0].image
                      ? {uri: promo[0].image}
                      : camera
                  }
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  backgroundColor: '#000000',
                  height: 40,
                  width: '60%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 13,
                  marginBottom: 10,
                  marginTop: 20,
                }}
                onPress={cameraLauncher}>
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: 'Poppins',
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}>
                  Open Camera
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  backgroundColor: '#000000',
                  height: 40,
                  width: '60%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 13,
                  marginBottom: 30,
                  marginTop: 20,
                }}
                onPress={libraryLauncher}>
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: 'Poppins',
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}>
                  Open Gallery
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.text}>Promo Name</Text>
              <TextInput
                style={styles.input_bottom}
                placeholder={'Type promo name max. 30 characters'}
                keyboardType="none"
                placeholderTextColor="#000"
                onChangeText={text => changeHandler(text, 'promo_name')}
              />
              {/* <SelectDropdown
                data={AllProduct}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                  setBody({...body, products_id: selectedItem.id});
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem.product_name;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item.product_name;
                }}
              /> */}
              <Text style={styles.text}>Discount</Text>
              <TextInput
                style={styles.input_bottom}
                placeholder={'Type Discount Percentage'}
                keyboardType="numeric"
                placeholderTextColor="#000"
                onChangeText={num => changeHandler(parseInt(num), 'discount')}
              />
              <Text style={styles.text}>Promo Code</Text>
              <TextInput
                style={styles.input_bottom}
                placeholder={'Type Promo Code'}
                keyboardType="none"
                placeholderTextColor="#000"
                onChangeText={text => changeHandler(text, 'code_promo')}
              />
              <Pressable>
                <Text style={styles.text}>Start Discount</Text>
                <Pressable style={styles.inputDate}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={
                        updateDateStart === promo[0].start_discount
                          ? styles.berubah
                          : styles.tanggal
                      }>
                      {dateHandler(date)}
                    </Text>
                    <Pressable
                      onPress={() => {
                        setOpen(true);
                      }}>
                      <Image source={calendar} />
                    </Pressable>
                  </View>
                </Pressable>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  mode={'date'}
                  onConfirm={date => {
                    setOpen(false);
                    let dd = String(date.getDate()).padStart(2, '0');
                    let mm = String(date.getMonth() + 1).padStart(2, '0');
                    let yyyy = date.getFullYear();
                    const updatedDate = `${yyyy}/${mm}/${dd}`;
                    setDate(date);
                    setUpdateDateStart(updatedDate);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </Pressable>
              <Pressable>
                <Text style={styles.text}>End Discount</Text>
                <Pressable style={styles.inputDate}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={
                        updateDateEnd === promo[0].end_discount
                          ? styles.berubah
                          : styles.tanggal
                      }>
                      {dateHandler(date)}
                    </Text>
                    <Pressable
                      onPress={() => {
                        setOpen(true);
                      }}>
                      <Image source={calendar} />
                    </Pressable>
                  </View>
                </Pressable>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  mode={'date'}
                  onConfirm={date => {
                    setOpen(false);
                    let dd = String(date.getDate()).padStart(2, '0');
                    let mm = String(date.getMonth() + 1).padStart(2, '0');
                    let yyyy = date.getFullYear();
                    const updatedDate = `${yyyy}/${mm}/${dd}`;
                    setDate(date);
                    setUpdateDateEnd(updatedDate);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </Pressable>
              <Text style={styles.text}>Description</Text>
              <TextInput
                style={styles.input_bottom}
                placeholder={'Describe your promo max. 150 characters'}
                keyboardType="none"
                placeholderTextColor="#000"
                onChangeText={text => changeHandler(text, 'promo_description')}
              />

              <View>
                <TouchableOpacity
                  style={styles.btnSave}
                  onPress={createPromoHandler}>
                  {isLoading ? (
                    <ActivityIndicator size="large" color="white" />
                  ) : (
                    <Text style={styles.textBtnSave}>Save promo</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
}

export default CreatePromo;
