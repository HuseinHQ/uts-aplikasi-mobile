import React, {ComponentProps} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../consts/colors';
import text from '../consts/text';

type ButtonProps = ComponentProps<typeof TouchableOpacity> & {
  title: string;
  backgroundColor?: string;
  color?: string;
};

export default function Button({
  title,
  backgroundColor = colors.primary.default,
  color = colors.white.default,
  ...props
}: ButtonProps): React.JSX.Element {
  const styles = StyleSheet.create({
    button: {
      borderRadius: 10,
      backgroundColor: backgroundColor,
      padding: 15,
      width: '100%',
      alignItems: 'center',
      elevation: 3,
    },
    title: {
      ...text.L,
      color: color,
    },
  });

  return (
    <TouchableOpacity {...props} style={[styles.button, props.style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
