import React, {ComponentProps} from 'react';
import {TextInput} from 'react-native';

type InputProps = ComponentProps<typeof TextInput> & {
  // title: string;
};

export default function Input({...props}: InputProps): React.JSX.Element {
  return <TextInput {...props} />;
}
