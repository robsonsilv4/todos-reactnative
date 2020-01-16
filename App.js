import { Alert, FlatList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Estudar CSS' },
    { id: 2, text: 'Estudar FlexBox' },
    { id: 3, text: 'Estudar React' },
    { id: 4, text: 'Estudar React Native' },
    { id: 5, text: 'Estudar Redux' },
  ]);

  const pressHandler = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id);
    });
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [...prevTodos, { text, id: todos.length + 1 }]; // UUID
      });
    } else {
      Alert.alert(
        'Deu ruim!',
        'As tarefas precisam ter no mínimo 3 caracteres.',
        [{ text: 'Entendi', onPress: () => console.log('Alerta fechado.') }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            keyExtractor={todo => todo.id}
            renderItem={({ item }) => (
              <TodoItem item={item} onPress={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: { marginTop: 20 },
});
