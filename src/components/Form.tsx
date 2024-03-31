import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput} from 'react-native';
import {View} from 'react-native';
import Button from './Button';
import Spacer from './Spacer';
import {RatioHelper} from '../helpers';
import {useNavigation} from '@react-navigation/native';
import {LOGIN_PASSWORD, LOGIN_USERNAME} from '../../env/env';
import colors from '../consts/colors';
import storage from '../storage';

interface FormProps {
  fields: string[];
  // onSubmit: (values: Record<string, any>) => void;
}

const Form: React.FC<FormProps> = ({fields}) => {
  const navigation = useNavigation();
  const initialFormState = fields.reduce(
    (obj, field) => ({...obj, [field]: ''}),
    {},
  );

  const [formState, setFormState] =
    useState<Record<string, string>>(initialFormState);

  const onChangeHandler = (name: string) => (value: string) => {
    setFormState(prevState => ({...prevState, [name]: value}));
  };

  const onSubmit = () => {
    if (
      formState.username === LOGIN_USERNAME &&
      formState.password === LOGIN_PASSWORD
    ) {
      storage.save({key: 'authToken', data: true});
      (navigation.reset as any)({
        index: 0,
        routes: [{name: 'Bottom Tab'}],
      });
    } else {
      Alert.alert(
        'Invalid Username or Password',
        `Hint\nUsername: ${LOGIN_USERNAME}\nPassword: ${LOGIN_PASSWORD}`,
      );
    }
  };

  return (
    <>
      <View style={styles.container}>
        {fields.map((field, index) => (
          <View key={index} style={styles.inputContainer}>
            <TextInput
              onChangeText={onChangeHandler(field)}
              value={formState[field]}
              placeholder={field}
              placeholderTextColor={colors.black.light}
            />
          </View>
        ))}
        <Spacer height={RatioHelper.screenWidth / 12} />
        <Button onPress={onSubmit} title="Sign In" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  inputContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: colors.grey.default,
    borderRadius: 10,
  },
});

export default Form;
