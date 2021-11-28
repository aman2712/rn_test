import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const Input = ({value, onChange}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        placeholderTextColor="#ccc"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 9,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 17,
    color: '#000',
  },
});
