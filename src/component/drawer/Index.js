import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import authAction from '../../redux/actions/auth';
import userAction from '../../redux/actions/user';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';

import {Divider} from '@rneui/themed';
import styles from './style';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import IconProfile from '../../assets/images/profile.png';
import IconCart from '../../assets/images/cart.png';
import IconMenu from '../../assets/images/menu.png';
import IconSecurity from '../../assets/images/security.png';
import IconPolicy from '../../assets/images/policy.png';
// import DefaultImg from '../../assets/images/default-img.png';
import Hambuger from '../../assets/images/hamburger.png';
import ShoppingCart from '../../assets/images/shopping-cart.png';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import {clearState} from '../../helper/clearState';

function Navbar({children}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const profile = useSelector(state => state.user.profile);
  const auth = useSelector(state => state.auth.userData);
  const [modalVisible, setModalVisible] = useState(false);
  // const [openDrawer, setOpenDrawer] = useState(false);

  const logoutHandler = () => {
    const LogoutSuccess = () => {
      clearState(dispatch);
      navigation.navigate('Welcome');
    };
    const LogoutError = error => {
      ToastAndroid.showWithGravityAndOffset(
        `${error}`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    };
    dispatch(authAction.logoutThunk(auth.token, LogoutSuccess, LogoutError));
  };

  useEffect(() => {
    dispatch(userAction.getProfileThunk(auth.token));
  }, [dispatch, auth.token]);

  const renderDrawer = () => {
    return (
      <View>
        {profile.length > 0 && (
          <View style={styles.continerSwipe}>
            <Image
              // source={{
              //   uri:
              //     `${profile[0].image}` !== null
              //       ? `${profile[0].image}`
              //       : DefaultImg,
              // }}
              source={profile[0].image}
              style={styles.imageDrawer}
            />
            <Text style={styles.username}>{profile[0].display_name}</Text>
            <Text style={styles.email}>{profile[0].email}</Text>
          </View>
        )}
        <View style={styles.content}>
          <View>
            <Pressable
              style={styles.containerBottom}
              onPress={() =>
                navigation.navigate('ProfileTab', {screen: 'Edit Profile'})
              }>
              <Image source={IconProfile} style={styles.imageBottom} />
              <Text style={styles.textBottom}>Edit Profile</Text>
            </Pressable>
            <Divider style={styles.devider} />
            <View style={styles.containerBottom}>
              <Image source={IconCart} style={styles.imageBottom} />
              <Text style={styles.textBottom}>Orders</Text>
            </View>
            <Divider style={styles.devider} />
            <Pressable
              style={styles.containerBottom}
              onPress={() =>
                navigation.navigate('HomeTab', {screen: 'Screen Favorite'})
              }>
              <Image source={IconMenu} style={styles.imageBottom} />
              <Text style={styles.textBottom}>All menu</Text>
            </Pressable>
            <Divider style={styles.devider} />
            <View style={styles.containerBottom}>
              <Image source={IconPolicy} style={styles.imageBottom} />
              {auth.role === 'user' ? (
                <Text style={styles.textBottom}>Privacy policy</Text>
              ) : (
                <Text style={styles.textBottom}>Sales report</Text>
              )}
            </View>
            <Divider style={styles.devider} />
            <View style={styles.containerBottom}>
              <Image source={IconSecurity} style={styles.imageBottom} />
              <Text style={styles.textBottom}>Security</Text>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.containerLogout}
            onPress={() => setModalVisible(true)}>
            <FontAwesome
              icon={SolidIcons.arrowRight}
              style={styles.iconArrow}
              // onPress={tooglePassword}
            />
            <Text style={styles.textBottom}>Sign-out</Text>
          </TouchableOpacity>
        </View>
        <Modal
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Are you sure want to logout?</Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Pressable
                  style={[styles.button, styles.buttonYes]}
                  onPress={logoutHandler}>
                  {auth.isLoading ? (
                    <ActivityIndicator size="small" color="white" />
                  ) : (
                    <Text style={styles.textStyle}>YES</Text>
                  )}
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonNo]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>NO</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <>
      <DrawerLayout
        drawerWidth={300}
        drawerPosition={DrawerLayout.positions.Left}
        drawerType="front"
        drawerBackgroundColor="#F2F2F2"
        overlayColor="rgba(255, 255, 255, 0.8)"
        drawerContainerStyle={{borderTopRightRadius: 30}}
        renderNavigationView={renderDrawer}>
        <View style={styles.header}>
          <Pressable
          // onPress={() => DrawerLayout.current.openDrawer(true)}
          >
            <Image source={Hambuger} />
          </Pressable>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image source={ShoppingCart} />
          </TouchableOpacity>
        </View>
        {children}
      </DrawerLayout>
    </>
  );
}

export default Navbar;
