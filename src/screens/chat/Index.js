import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
// import icon_search from '../assets/cupon/icon_search.png';
import icon_cheryn from '../../assets/images/icon_cheryn.png';
import icon_jason from '../../assets/images/icon_jason.png';
import icon_lou from '../../assets/images/icon_lou.png';
const back = require('../../assets/images/iconBack.png');
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Chat = () => {
  const navigation = useNavigation();
  const profile = useSelector(state => state.user.profile);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={styles.textHeader}>Chat</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.content_all}>
          <View style={styles.content_chat}>
            <View style={styles.search}>
              {/* <Image source={icon_search} style={styles.icon_search} /> */}
              <FontAwesome icon={SolidIcons.search} style={styles.iconSearch} />
              <TextInput
                style={styles.input}
                placeholder="Browse coupons"
                keyboardType="text"
              />
            </View>
          </View>
          {profile.role === 'admin' ? null : (
            <Text style={styles.talk}>
              Choose a staff you want to talk with
            </Text>
          )}
          {profile.role === 'admin' ? null : (
            <View style={styles.content_image}>
              <View style={styles.content_img}>
                <Image source={icon_cheryn} style={styles.icon_cheryn} />
                <Image source={icon_jason} style={styles.icon_cheryn} />
                <Image source={icon_lou} style={styles.icon_cheryn} />
              </View>
              <View style={styles.content_name}>
                <Text style={styles.name}>Cheryn</Text>
                <Text style={styles.name}>Lou</Text>
                <Text style={styles.name}>Jason</Text>
              </View>
            </View>
          )}
          {profile.role === 'admin' ? null : <View style={styles.line} />}
          {/* <View style={styles.line}></View> */}
          {profile.role === 'admin' ? null : (
            <View style={styles.content_message}>
              <Text style={styles.message}>Message</Text>
            </View>
          )}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ChatTab', {screen: 'Chat Room'})
            }>
            <View style={styles.warp_message}>
              <View style={styles.img_contentSec}>
                <View style={styles.img_content}>
                  <Image source={icon_cheryn} style={styles.icon_cheryn} />
                  <View style={styles.warp_name}>
                    <Text style={styles.jason}>Cheryn</Text>
                    <Text style={styles.text_chat}>
                      What beans do you use for making cold brew?
                    </Text>
                  </View>
                </View>
                <Text style={styles.day}>Yesterday</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ChatTab', {screen: 'Chat Room'})
            }>
            <View style={styles.warp_message}>
              <View style={styles.img_contentSec}>
                <View style={styles.img_content}>
                  <Image source={icon_jason} style={styles.icon_cheryn} />
                  <View style={styles.warp_name}>
                    <Text style={styles.jason}>Jason</Text>
                    <Text style={styles.text_chat}>
                      What beans do you use for making cold brew?
                    </Text>
                  </View>
                </View>
                <Text style={styles.day}>Yesterday</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.conversation}>You have no conversation left</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Chat;
