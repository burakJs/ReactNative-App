import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppTextInput from '../../components/textfield/AppTextInput';
import AuthButton from '../../components/button/AuthButton';
import NavigateEnum from '../../components/enum/NavigateEnum.js';

export default SignUpView = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passConfirm, setPassConfirm] = useState('');

  const checkRightCredentials = (
    email,
    firstName,
    lastName,
    password,
    passConfirm,
  ) => {
    return (
      email != '' &&
      firstName != '' &&
      lastName != '' &&
      password != '' &&
      passConfirm != '' &&
      password == passConfirm
    );
  };

  return (
    <View style={styles.pageView}>
      <View style={styles.loginTextView}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </View>
      <AppTextInput placeholder="E-Mail" onChangeText={setEmail} />
      <AppTextInput placeholder="First Name" onChangeText={setFirstName} />
      <AppTextInput placeholder="Last Name" onChangeText={setLastName} />
      <AppTextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <AppTextInput
        placeholder="Password Confirm"
        secureTextEntry={true}
        onChangeText={setPassConfirm}
      />

      <View style={styles.loginView}>
        <AuthButton
          name={'Sign Up'}
          onPress={() => {
            if (
              checkRightCredentials(
                email,
                firstName,
                lastName,
                password,
                passConfirm,
              )
            ) {
              navigation.replace(NavigateEnum.SIGNIN);
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageView: {
    width: 100 + '%',
    height: 100 + '%',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 40,
  },
  loginTextView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10 + '%',
  },
  loginText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  loginView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
