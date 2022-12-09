import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomePage from './src/screens/welcomePage/Index';
import Welcome from './src/screens/welcome/Index';
import SignUp from './src/screens/signUp/Index';
import Login from './src/screens/login/Index';
import Forgot from './src/screens/forgot/Index';

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome Page"
          component={WelcomePage}
          options={{
            // options local
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            // options local
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            // options local
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            // options local
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{
            // options local
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
