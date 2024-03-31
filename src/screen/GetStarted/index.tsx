import React, {useEffect} from 'react';
import {View, Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import Spacer from '../../components/Spacer';
import text from '../../consts/text';
import colors from '../../consts/colors';
import Button from '../../components/Button';
import {NavigationProps} from '../../screen/navigationTypes';
import storage from '../../storage';

export default function GetStarted({
  navigation,
}: NavigationProps): React.JSX.Element {
  useEffect(() => {
    storage
      .load({key: 'authToken'})
      .then(authToken => {
        if (authToken) {
          (navigation.navigate as any)('Bottom Tab');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [navigation.navigate]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/splash_image.png')}
        style={styles.img}
      />

      <Spacer height={30} />

      <View>
        <Text style={styles.title}>Hear Music Anywhere</Text>
        <Spacer height={10} />
        <Text style={styles.subtitle}>
          Playlist with the best tracks expecially for you
        </Text>
      </View>

      <Spacer height={30} />

      <Button
        title="Get Started"
        style={styles.button}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          })
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 30,
  },
  img: {
    width: 300,
    height: 300,
  },
  title: {
    ...text.XL,
    color: colors.black.default,
  },
  subtitle: {
    ...text.M,
    color: colors.black.default,
  },
  button: {
    position: 'absolute',
    bottom: 30,
  },
});
