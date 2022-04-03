import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default TodoCard = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardView}>
        <Text style={styles.cardText}>
          {item.index}. {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'gray',
    padding: 24,
    marginVertical: 10,
    borderRadius: 23,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  removeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  cardText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
