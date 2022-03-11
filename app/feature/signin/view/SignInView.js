import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import AppTextInput from '../../../product/textfield/AppTextInput';
import AuthButton from '../../../product/button/AuthButton';
export default SignInView = () => {
  return (
    <View style={styles.pageView}>
      <View style={styles.loginTextView}>
        <Text style={styles.loginText}>SIGN IN</Text>
      </View>
      <AppTextInput placeholder="E-Mail" />
      <AppTextInput placeholder="password" secureTextEntry={true} />
      <View style={styles.loginView}>
        <AuthButton name={'Sign in'} />
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
