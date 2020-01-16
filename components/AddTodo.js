import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nova tarefa..."
        onChangeText={changeHandler}
        // onChangeText={val => changeHandler(val)}
      />
      <Button
        title="Adicionar"
        color="coral"
        onPress={() => {
          submitHandler(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
