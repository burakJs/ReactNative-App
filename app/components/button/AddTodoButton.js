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
    color: 'white',
    fontWeight: 'bold',
  },
  addButtonStyle: {
    backgroundColor: 'gray',
    borderRadius: 10,
    width: 15 + '%',
    alignItems: 'center',
  },
});
