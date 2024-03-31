import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Octions from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import storage from '../storage';

const ComingSoonIcon = () => <Entypo name="help" size={20} />;
const HomeIcon = () => <Octions name="home" size={20} />;
const LogoutIcon = () => <MaterialCommunityIcons name="logout" size={20} />;

export default function BottomTabNavigator(): React.JSX.Element {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Tab.Screen
        name="Coming Soon"
        component={Home}
        options={{tabBarIcon: ComingSoonIcon}}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            Alert.alert('Coming Soon', 'Tab is under development');
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarIcon: HomeIcon}}
      />
      <Tab.Screen
        name="Logout"
        component={Home}
        options={{
          tabBarIcon: LogoutIcon,
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            Alert.alert('Are you sure want to logout?', '', [
              {
                text: 'cancel',
                style: 'cancel',
              },
              {
                text: 'yes',
                onPress: () => {
                  storage.remove({
                    key: 'authToken',
                  });
                  (navigation.navigate as any)('Get Started');
                },
              },
            ]);
          },
        }}
      />
    </Tab.Navigator>
  );
}
