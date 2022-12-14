import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Ionic from 'react-native-vector-icons/Ionicons';
import {View, Image} from 'react-native';
import {StyleSheet} from 'react-native';

import WelcomePage from './src/screens/welcomePage/Index';
import Welcome from './src/screens/welcome/Index';
import SignUp from './src/screens/signUp/Index';
import Login from './src/screens/login/Index';
import Forgot from './src/screens/forgot/Index';
import Reset from './src/screens/resetPassword/Index';
import Home from './src/screens/home/Index';
import Profile from './src/screens/profile/Index';
import Chat from './src/screens/chat/Index';
import ScreenFavorite from './src/screens/favorite/Index';
import ProductDetail from './src/screens/productDetail/Index';
import Cart from './src/screens/cart/Index';
import History from './src/screens/history/Index';
import DeliveryMethod from './src/screens/deliveriMethod/Index';
import Payment from './src/screens/payment/Index';
import EditProfile from './src/screens/editProfile/Index';
import Splashscreen from './src/screens/splash/Index.js';
import EditProduct from './src/screens/editProduct/Index';
import CreateProduct from './src/screens/createProduct/Index';
import AllPromo from './src/screens/promo/Index';
import CreatePromo from './src/screens/createPromo/Index';
import EditPromo from './src/screens/editPomo/Index';
import EditPassword from './src/screens/editPassword/Index';
import ChatRoom from './src/screens/chatRoom/Index';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const iconHome = require('./src/assets/images/home.png');
const iconProfile = require('./src/assets/images/user.png');
const iconChat = require('./src/assets/images/chat.png');

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* <Stack.Navigator> */}
        <Stack.Screen
          name="Welcome Page"
          component={WelcomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Forgot Password"
          component={Forgot}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Reset Password"
          component={Reset}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SplashScreen"
          component={Splashscreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={TabsNav}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeTab = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen
      name="Screen Favorite"
      component={ScreenFavorite}
      screenOptions={{headerShown: true}}
    />
    <Stack.Screen
      name="Product Detail"
      component={ProductDetail}
      screenOptions={{headerShown: true}}
    />
    <Stack.Screen
      name="Cart"
      component={Cart}
      screenOptions={{headerShown: true}}
    />
    <Stack.Screen
      name="Delivery Method"
      component={DeliveryMethod}
      screenOptions={{headerShown: true}}
    />
    <Stack.Screen
      name="Payment"
      component={Payment}
      screenOptions={{headerShown: true}}
    />
    <Stack.Screen
      name="Create Product"
      component={CreateProduct}
      screenOptions={{headerShown: true}}
    />
    <Stack.Screen
      name="Edit Product"
      component={EditProduct}
      screenOptions={{headerShown: true}}
    />
    <Stack.Screen
      name="All Promo"
      component={AllPromo}
      screenOptions={{headerShown: true}}
    />
    <Stack.Screen
      name="Create Promo"
      component={CreatePromo}
      screenOptions={{headerShown: true}}
    />
    <Stack.Screen
      name="Edit Promo"
      component={EditPromo}
      screenOptions={{headerShown: true}}
    />
  </Stack.Navigator>
);

const ProfileTab = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="History" component={History} />
    <Stack.Screen name="Edit Profile" component={EditProfile} />
    <Stack.Screen name="Edit Password" component={EditPassword} />
  </Stack.Navigator>
);

const ChatTab = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Chat" component={Chat} />
    <Stack.Screen name="Chat Room" component={ChatRoom} />
  </Stack.Navigator>
);

const TabsNav = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{headerShown: false, tabBarStyle: {height: 60}}}>
    <Tab.Screen
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <View
            style={{
              ...styles.tabIconWrapper,
              backgroundColor: focused && 'rgba(255, 199, 167, 0.2)',
            }}>
            <Image
              source={iconHome}
              resizeMode="contain"
              resizeMethod="scale"
              style={{
                tintColor: focused ? '#6A4029' : '#DFDEDE',
                ...styles.tabIcon,
              }}
            />
          </View>
        ),
      }}
      name="HomeTab"
      component={HomeTab}
    />
    <Tab.Screen
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <View
            style={{
              ...styles.tabIconWrapper,
              backgroundColor: focused && 'rgba(255, 199, 167, 0.2)',
            }}>
            <Image
              source={iconProfile}
              resizeMode="contain"
              resizeMethod="scale"
              style={{
                tintColor: focused ? '#6A4029' : '#DFDEDE',
                ...styles.tabIcon,
              }}
            />
          </View>
        ),
      }}
      name="ProfileTab"
      component={ProfileTab}
    />
    <Tab.Screen
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <View
            style={{
              ...styles.tabIconWrapper,
              backgroundColor: focused && 'rgba(255, 199, 167, 0.2)',
            }}>
            <Image
              source={iconChat}
              resizeMode="contain"
              resizeMethod="scale"
              style={{
                tintColor: focused ? '#6A4029' : '#DFDEDE',
                ...styles.tabIcon,
              }}
            />
          </View>
        ),
      }}
      name="ChatTab"
      component={ChatTab}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabWrapper: {
    height: 60,
    borderRadius: 5,
  },
  tabIconWrapper: {
    position: 'relative',
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  tabIcon: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 5,
    height: 25,
    opacity: 1,
    width: 25,
  },
});

export default App;
