import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default AppTextInput = props => {
  return <TextInput style={styles.textinput} {...props} />;
};

const styles = StyleSheet.create({
  textinput: {
    marginBottom: 30,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    height: 10 + '%',
    fontSize: 18,
  },
});
