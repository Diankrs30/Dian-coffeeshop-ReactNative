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
import DefaultImg from '../../assets/images/default-img.png';
import Hambuger from '../../assets/images/hamburger.png';
import ShoppingCart from '../../assets/images/shopping-cart.png';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';

function Navbar({children}) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile[0]);
  const auth = useSelector(state => state.auth.userData);

  const [modalVisible, setModalVisible] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigation = useNavigation();

  const logoutHandler = () => {
    const LogoutSuccess = () => {
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
  }, [dispatch]);

  const renderDrawer = () => {
    return (
      <View>
        <View style={styles.continerSwipe}>
          <Image
            source={{uri: profile.image !== null ? profile.image : DefaultImg}}
            style={styles.imageDrawer}
          />
          <Text style={styles.username}>{profile.display_name}</Text>
          <Text style={styles.email}>{profile.email}</Text>
        </View>
        <View style={styles.content}>
          <View>
            <View style={styles.containerBottom}>
              <Image source={IconProfile} style={styles.imageBottom} />
              <Text style={styles.textBottom}>Edit Profile</Text>
            </View>
            <Divider style={styles.devider} />
            <View style={styles.containerBottom}>
              <Image source={IconCart} style={styles.imageBottom} />
              <Text style={styles.textBottom}>Orders</Text>
            </View>
            <Divider style={styles.devider} />
            <View style={styles.containerBottom}>
              <Image source={IconMenu} style={styles.imageBottom} />
              <Text style={styles.textBottom}>All menu</Text>
            </View>
            <Divider style={styles.devider} />
            <View style={styles.containerBottom}>
              <Image source={IconPolicy} style={styles.imageBottom} />
              <Text style={styles.textBottom}>Privacy policy</Text>
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
          <View>
            <Image source={Hambuger} />
          </View>
          <View>
            <Image source={ShoppingCart} />
          </View>
        </View>
        {children}
      </DrawerLayout>
    </>
  );
}

export default Navbar;
