import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = props => {
    return (
        <View style={styles.container}>
          <Text style={styles.numberText}>{props.children}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    borderColor: Colors.accent,
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%'
  },
  numberText: {
    fontSize: 25,
    color: Colors.accent
  }
});

export default NumberContainer;
