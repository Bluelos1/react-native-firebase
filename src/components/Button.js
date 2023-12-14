import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFA07A',
    padding: 15,
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
});

export default Button;
