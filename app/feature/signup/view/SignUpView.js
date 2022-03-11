import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppTextInput from '../../../product/textfield/AppTextInput';
import AuthButton from '../../../product/button/AuthButton';
import SignUpViewModel from '../viewmodel/SignUpViewModel.js';

export default SignUpView = () => {
  const viewModel = SignUpViewModel.prototype;
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passConfirm, setPassConfirm] = useState('');

  return (
    <View style={styles.pageView}>
      <View style={styles.loginTextView}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </View>
      <AppTextInput placeholder="E-Mail" />
      <AppTextInput placeholder="First Name" />
      <AppTextInput placeholder="Last Name" />
      <AppTextInput placeholder="Password" secureTextEntry={true} />
      <AppTextInput placeholder="Password Confirm" secureTextEntry={true} />

      <View style={styles.loginView}>
        <AuthButton name={'Sign Up'} onPress={() => {}} />
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
