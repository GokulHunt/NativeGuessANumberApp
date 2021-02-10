import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const Header = props => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header : {
    width: '100%',
    height: 50,
    paddingTop: 20,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },

  headerText: {
    color: Colors.black,
    fontSize: 18
  }
})

export default Header;
