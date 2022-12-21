import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import userAction from '../../redux/actions/user';

import styles from './style';
import DefaultImg from '../../assets/images/default-img.png';

const back = require('../../assets/images/iconBack.png');
const next = require('../../assets/images/arrowRight.png');

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const profile = useSelector(state => state.user.profile);
  const auth = useSelector(state => state.auth.userData);

  const toOerderHistory = () => {
    navigation.navigate('History');
  };

  useEffect(() => {
    dispatch(userAction.getProfileThunk(auth.token));
  }, [dispatch, auth.token]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.containerContent}>
        <Text style={styles.titleContent}>My profile</Text>
        <View style={styles.subTitle}>
          <Text style={styles.textInfo}>Your Information</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')}>
            <Text style={styles.btnEdit}>edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapperProfile}>
          <View style={styles.contentImage}>
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 200,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {profile.isLoading ? (
                <ActivityIndicator />
              ) : (
                <Image
                  source={
                    profile[0].image ? {uri: profile[0].image} : DefaultImg
                  }
                  style={{width: 80, height: 80, borderRadius: 200}}
                />
              )}
            </View>
          </View>
          <View>
            <Text style={styles.textName}>{profile[0].display_name}</Text>
            <View
              style={{
                borderBottomWidth: 0.5,
                width: 160,
                borderBottomColor: '#6A4029',
                marginBottom: 10,
              }}>
              <Text style={styles.textEmail}>{profile[0].email}</Text>
            </View>
            <View
              style={{
                borderBottomWidth: 0.5,
                width: 160,
                borderBottomColor: '#6A4029',
                marginBottom: 10,
              }}>
              <Text style={styles.textPhone}>{profile[0].phone_number}</Text>
            </View>
            <Text style={styles.address}>{profile[0].delivery_address}</Text>
          </View>
        </View>
        <View style={{marginTop: 25}}>
          <TouchableOpacity style={styles.btn} onPress={toOerderHistory}>
            <Text
              style={{fontFamily: 'Poppins-Bold', fontSize: 18, color: '#000'}}>
              Order History
            </Text>
            <Image source={next} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Edit Password')}>
            <Text
              style={{fontFamily: 'Poppins-Bold', fontSize: 18, color: '#000'}}>
              Edit password
            </Text>
            <Image source={next} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={{fontFamily: 'Poppins-Bold', fontSize: 18, color: '#000'}}>
              FAQ
            </Text>
            <Image source={next} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={{fontFamily: 'Poppins-Bold', fontSize: 18, color: '#000'}}>
              Help
            </Text>
            <Image source={next} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSave}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 18,
                color: '#fff',
              }}>
              Save Change
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
