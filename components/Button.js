import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({setModalVisible}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 40,
    color: 'black',
  },
});
