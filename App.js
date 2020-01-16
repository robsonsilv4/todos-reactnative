import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Header from './components/Header';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Estudar CSS' },
    { id: 2, text: 'Estudar FlexBox' },
    { id: 3, text: 'Estudar React' },
    { id: 4, text: 'Estudar React Native' },
    { id: 5, text: 'Estudar Redux' },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            keyExtractor={todo => todo.id}
            renderItem={({ item }) => <Text>{item.text}</Text>}
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
