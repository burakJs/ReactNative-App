import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AuthButton from '../../components/button/AuthButton';
import NavigateEnum from '../../components/enum/NavigateEnum.js';
import AppTextInput from '../../components/textfield/AppTextInput';

export default SignInView = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkRightCredentials = (email, password) => {
    return email != '' && password != '';
  };

  return (
    <View style={styles.pageView}>
      <View style={styles.loginTextView}>
        <Text style={styles.loginText}>SIGN IN</Text>
      </View>
      <AppTextInput placeholder="E-Mail" onChangeText={setEmail} />
      <AppTextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <View style={styles.loginView}>
        <AuthButton
          name={'Sign in'}
          onPress={() => {
            if (checkRightCredentials(email, password)) {
              navigation.replace(NavigateEnum.HOME);
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
