import colors from '../../consts/colors';
import text from '../../consts/text';
import React from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Login(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.logo}>MUSIC</Text>
      </View>

      <View>
        <Text>Welcome in</Text>
        <Text>Music Platform</Text>
      </View>

      <View>
        <Text>MUSIC</Text>
      </View>

      <View>
        <Text>MUSIC</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  logo: {
    ...text.M,
    fontWeight: 'bold',
    color: colors.black.default,
  },
});
