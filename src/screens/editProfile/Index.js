import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import userAction from '../../redux/actions/user';
import DatePicker from 'react-native-date-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  ToastAndroid,
  ActivityIndicator,
  Modal,
  Platform,
} from 'react-native';
import styles from './style';

import ImageDefault from '../../assets/images/default-img.png';
import pencil from '../../assets/images/pencil.png';
const back = require('../../assets/images/iconBack.png');
import calendar from '../../assets/images/calendar.png';

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const profile = useSelector(state => state.user.profile);
  const isLoading = useSelector(state => state.user.isLoading);
  const token = useSelector(state => state.auth.userData.token);

  const [gender, setGender] = useState(profile[0].gender);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState();
  const [updateDate, setUpdateDate] = useState('');
  const [body, setBody] = useState({});

  const [modal, setModalVisible] = useState(false);

  const onChangeHandler = (text, name) => {
    setBody(body => ({...body, [name]: text}));
  };

  const saveHandler = () => {
    const updateSuccess = () => {
      ToastAndroid.showWithGravity(
        'Data changed successfully',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        navigation.navigate('Profile'),
      );
    };
    const updateDenied = error => {
      ToastAndroid.showWithGravity(
        `${error}`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        navigation.navigate('Profile'),
      );
    };
    let bodies = new FormData();
    if (body?.delivery_address) {
      bodies.append('delivery_address', body.delivery_address);
    }
    if (body?.display_name) {
      bodies.append('display_name', body.display_name);
    }
    if (body?.first_name) {
      bodies.append('first_name', body.first_name);
    }
    if (body?.last_name) {
      bodies.append('last_name', body.last_name);
    }
    if (updateDate !== profile[0].birthday) {
      bodies.append('date_of_birth', updateDate);
    }
    if (gender !== profile[0].gender) {
      bodies.append('gender', gender);
    }
    if (file) {
      bodies.append('image', {
        name: 'test.' + file[0]?.type?.substr(6),
        type: file[0]?.type,
        uri:
          Platform.OS !== 'android' ? 'file://' + file[0]?.uri : file[0]?.uri,
      });
    }

    // console.log('bodies', bodies);

    dispatch(
      userAction.editProfileThunk(bodies, token, updateSuccess, updateDenied),
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

  const dateHandler = date => new Date(date).toLocaleDateString();

  useEffect(() => {
    if (profile[0].gender === 'male') {
      setGender('male');
    }
    if (profile[0].gender === 'female') {
      setGender('female');
    }
    setUpdateDate(profile[0].date_of_birth);
    setDate(new Date(profile[0].date_of_birth));
    setFile();
  }, [profile]);

  // useEffect(() => {
  //   dispatch(userAction.getProfileThunk(token));
  // }, [dispatch, token]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={styles.textHeader}>Edit Profile</Text>
        </View>
      </View>
      <ScrollView style={{paddingHorizontal: 50}}>
        <View>
          <View style={styles.contentImg}>
            <View style={styles.wrapperImage}>
              <Image
                source={
                  file
                    ? {uri: file[0].uri}
                    : profile[0].image
                    ? {uri: profile[0].image}
                    : ImageDefault
                }
                style={styles.image}
              />
            </View>
            <Pressable
              style={styles.wrapperPencil}
              onPress={() => setModalVisible(true)}>
              <Image source={pencil} />
            </Pressable>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.textForm}>Name</Text>
            <TextInput
              style={styles.textInput}
              keyBoardType="text"
              placeholder={profile[0].display_name || 'Enter your display name'}
              placeholderTextColor="#000"
              onChangeText={text => onChangeHandler(text, 'display_name')}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.radio}>
              <Pressable
                style={
                  gender === 'male' ? styles.checkedOuter : styles.unchekedOuter
                }
                onPress={() => setGender('male')}>
                <View
                  style={
                    gender === 'male'
                      ? styles.checkedInner
                      : styles.uncheckedInner
                  }
                />
              </Pressable>
              <Text
                style={
                  gender === 'male' ? styles.checkedText : styles.uncheckedText
                }>
                Male
              </Text>
            </View>
            <View style={styles.radio}>
              <Pressable
                style={
                  gender === 'female'
                    ? styles.checkedOuter
                    : styles.unchekedOuter
                }
                onPress={() => {
                  setGender('female');
                }}>
                <View
                  style={
                    gender === 'female'
                      ? styles.checkedInner
                      : styles.uncheckedInner
                  }
                />
              </Pressable>
              <Text
                style={
                  gender === 'female'
                    ? styles.checkedText
                    : styles.uncheckedText
                }>
                Female
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.textForm}>Email Address</Text>
            <TextInput
              style={styles.textInput}
              keyBoardType="text"
              placeholder={profile[0].email || 'Enter your email address'}
              placeholderTextColor="#000"
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <View>
            <Text style={styles.textForm}>First Name</Text>
            <TextInput
              style={styles.textInput}
              keyBoardType="text"
              placeholder={profile[0].first_name || 'Enter your first name'}
              placeholderTextColor="#000"
              onChangeText={text => onChangeHandler(text, 'first_name')}
            />
          </View>
          <View>
            <Text style={styles.textForm}>Last Name</Text>
            <TextInput
              style={styles.textInput}
              keyBoardType="text"
              placeholder={profile[0].last_name || 'Enter your last name'}
              placeholderTextColor="#000"
              onChangeText={text => onChangeHandler(text, 'last_name')}
            />
          </View>
          <View>
            <Text style={styles.textForm}>Phone Number</Text>
            <TextInput
              style={styles.textInput}
              keyBoardType="text"
              placeholder={profile[0].phone_number || 'Enter your phone number'}
              placeholderTextColor="#000"
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <Pressable>
            <Text style={styles.textForm}>Date of Birth</Text>
            <Pressable style={styles.inputDate}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={
                    updateDate === profile[0].date_of_birth
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
                setUpdateDate(updatedDate);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </Pressable>
          <View>
            <Text style={styles.textForm}>Delivery Address</Text>
            <TextInput
              style={styles.textInput}
              keyBoardType="text"
              placeholder={
                profile[0].delivery_address || 'Enter your delivery address'
              }
              placeholderTextColor="#000"
              onChangeText={text => onChangeHandler(text, 'delivery_address')}
            />
          </View>
          <TouchableOpacity style={styles.btnSave} onPress={saveHandler}>
            {isLoading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Text style={styles.textBtnSave}>Save and Update</Text>
            )}
          </TouchableOpacity>
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
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;
