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
  const [todoList, setTodoList] = useState(['Todo - 1', 'Todo - 2']);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    setTodoList([...todoList, todoText]);
    setTodoText('');
  };
  const removeTodo = index => {
    const tempArray = [...todoList];
    tempArray.splice(index, 1);
    setTodoList(tempArray);
    console.log(todoList);
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
              item={{text: todo.item, index: todo.index + 1}}
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
    padding: 40,
  },
  addView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  todoTextInput: {
    fontSize: 16,
    width: 75 + '%',
  },
});
