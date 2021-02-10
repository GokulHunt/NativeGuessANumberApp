import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const MainButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: Colors.primary,
    borderRadius: 25,
    width: 160
  },
  buttonText: {
    color: Colors.white,
    fontFamily: 'open-sans',
    textAlign: 'center'
  }
});

export default MainButton;
