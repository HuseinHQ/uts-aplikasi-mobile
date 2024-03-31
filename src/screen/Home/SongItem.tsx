import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {dummyDataType} from './dummyData';
import text from '../../consts/text';
import colors from '../../consts/colors';

export default function SongItem({
  item,
}: {
  item: dummyDataType;
}): React.JSX.Element {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>
          {item.author + ` (${item.releaseYear})`}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    ...text.M,
    fontWeight: 'bold',
    color: colors.black.default,
  },
  author: {
    ...text.S,
    color: colors.black.halfOpacity,
  },
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});
