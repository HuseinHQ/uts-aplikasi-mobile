import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigator from './StackNavigation';

export default function Navigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
