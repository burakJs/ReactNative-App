import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default AddTodoButton = props => {
  return (
    <TouchableOpacity style={styles.addButtonStyle} {...props}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButtonText: {
    fontSize: 30,
    padding: 5,
    color: 'black',
  },
  addButtonStyle: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 15 + '%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
});
