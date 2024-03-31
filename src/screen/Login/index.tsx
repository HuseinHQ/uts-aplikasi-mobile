import colors from '../../consts/colors';
import text from '../../consts/text';
import React from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Spacer from '../../components/Spacer';
import Form from '../../components/Form';
import {RatioHelper} from '../../helpers';

export default function Login(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Fontisto name="applemusic" size={30} color={colors.black.default} />
        <Text style={styles.text}>MUSIC</Text>
      </View>

      <Spacer height={50} />

      <View>
        <View style={styles.textContainer}>
          <MaterialCommunityIcons
            name="hand-wave"
            size={20}
            color={colors.orange.default}
          />
          <Text style={styles.text}>Welcome in</Text>
        </View>
        <Text style={styles.text}>Music Platform</Text>
      </View>

      <Spacer height={50} />

      <View>
        <Form fields={['username', 'password']} />
      </View>

      <Spacer height={20} />

      <View style={styles.textContainer2}>
        <Text style={styles.text2}>
          By signin up, you confirm our{' '}
          <Text style={styles.bold}>Terms of use</Text> and
          <Text style={styles.bold}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  textContainer2: {
    width: RatioHelper.screenWidth / 1.6,
    alignSelf: 'center',
  },
  text: {
    ...text.M,
    fontWeight: 'bold',
    color: colors.black.default,
  },
  text2: {
    ...text.S,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});
