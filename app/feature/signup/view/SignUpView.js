import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppTextInput from '../../../product/textfield/AppTextInput';
import AuthButton from '../../../product/button/AuthButton';
import SignUpViewModel from '../viewmodel/SignUpViewModel.js';
import NavigateEnum from '../../../product/enum/NavigateEnum.js';

export default SignUpView = ({navigation}) => {
  const viewModel = SignUpViewModel.prototype;
  const [email, setEmail] = useState('x');
  const [firstName, setFirstName] = useState('x');
  const [lastName, setLastName] = useState('x');
  const [password, setPassword] = useState('x');
  const [passConfirm, setPassConfirm] = useState('x');

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
              viewModel.checkRightCredentials(
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
