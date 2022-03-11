import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default AuthButton = props => {
  return (
    <TouchableOpacity style={styles.buttonStyle} {...props}>
      <Text style={styles.buttonTextStyle}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: 24,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: 'gray',
    borderRadius: 10,
  },
});
