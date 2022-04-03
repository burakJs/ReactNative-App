import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default TodoCard = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardView}>
        <Text style={styles.cardText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    padding: 24,
    marginVertical: 15,
    marginHorizontal: 8,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
  removeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  cardText: {
    color: 'black',
    fontSize: 20,
  },
});
