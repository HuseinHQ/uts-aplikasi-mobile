import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Spacer({
  width = 0,
  height = 0,
}: {
  width?: number;
  height?: number;
}): React.JSX.Element {
  const styles = StyleSheet.create({
    spacer: {
      width: width,
      height: height,
    },
  });

  return <View style={styles.spacer} />;
}
