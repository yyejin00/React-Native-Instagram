import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Counter = ({value, onIncrement, onDecrement}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>clicked 💥{value}💥 times</Text>
        <TouchableOpacity style={styles.button} onPress={onIncrement}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onDecrement}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderRadius: 5,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#343434',
  },
  button: {
    backgroundColor: '#00a1ff',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
});

export default Counter;
