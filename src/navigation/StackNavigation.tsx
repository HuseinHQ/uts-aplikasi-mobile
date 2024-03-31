import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import Login from '../screen/Login';
import GetStarted from '../screen/GetStarted';
import BottomTabNavigator from './BottomTabNavigator';
import storage from '../storage';

export default function StackNavigator(): React.JSX.Element {
  const [initialRoute, setInitialRoute] = useState('Get Started');

  useEffect(() => {
    storage
      .load({key: 'authToken'})
      .then(authToken => {
        if (authToken) {
          setInitialRoute('Bottom Tab');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={initialRoute}>
      <Stack.Screen name="Get Started" component={GetStarted} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen name="Bottom Tab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
