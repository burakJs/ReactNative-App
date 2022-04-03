import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
} from 'react-native';
import AddTodoButton from '../../components/button/AddTodoButton.js';
import TodoCard from '../../components/card/TodoCard.js';

export default HomeView = ({navigation}) => {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (todoText == '') return;
    setTodoList([...todoList, todoText]);
    setTodoText('');
  };
  const removeTodo = index => {
    const tempArray = [...todoList];
    tempArray.splice(index, 1);
    setTodoList(tempArray);
  };

  return (
    <SafeAreaView>
      <View style={styles.pageView}>
        <View style={styles.addView}>
          <TextInput
            placeholder="Todo text..."
            style={styles.todoTextInput}
            value={todoText}
            onChangeText={setTodoText}
          />
          <AddTodoButton onPress={addTodo} />
        </View>
        <FlatList
          data={todoList}
          renderItem={todo => (
            <TodoCard
              item={{text: todo.item}}
              onPress={() => removeTodo(todo.index)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageView: {
    width: 100 + '%',
    height: 100 + '%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  addView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  todoTextInput: {
    fontSize: 16,
    width: 75 + '%',
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
