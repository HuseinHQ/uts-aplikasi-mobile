import React from 'react';
import {
  FlatList,
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../consts/colors';
import {Text} from 'react-native';
import dummyData from './dummyData';
import SongItem from './SongItem';
import text from '../../consts/text';
import Spacer from '../../components/Spacer';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Home(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.title}>Discover</Text>
            <Text style={styles.subtitle}>
              based on your streaming activity
            </Text>

            <Spacer height={10} />

            <ImageBackground
              source={require('../../assets/hero.png')}
              style={styles.imageBackground}>
              <View style={styles.heroLeftComponent}>
                <Text style={styles.heroTitle}>Official Music</Text>
                <Text style={styles.heroTitle}>Video</Text>
                <View>
                  <Text style={styles.heroSubtitle}>by Yoasobi</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.heroRightComponent}>
                <AntDesign name="play" size={40} color={colors.green.default} />
              </TouchableOpacity>
            </ImageBackground>

            <Spacer height={20} />

            <Text style={styles.title}>Popular</Text>
          </>
        }
        showsVerticalScrollIndicator={false}
        data={dummyData}
        contentContainerStyle={styles.flatlist}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <SongItem item={item} />}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white.default,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
  },
  flatlist: {
    gap: 10,
    paddingBottom: 20,
  },
  heroLeftComponent: {
    position: 'absolute',
    bottom: 0,
    padding: 15,
  },
  heroRightComponent: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 1000,
    margin: 15,
    backgroundColor: colors.white.default,
  },
  heroTitle: {
    ...text.L,
    color: colors.white.default,
  },
  heroSubtitle: {
    ...text.S,
    color: colors.white.default,
  },
  title: {
    ...text.XL,
    color: colors.black.default,
  },
  subtitle: {
    ...text.S,
    color: colors.black.default,
  },
  imageBackground: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
