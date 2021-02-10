import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/colors.js'

const Card = props => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 1, height: 2},
    shadowRadius: 4,
    elevation: 6,
    backgroundColor: Colors.white,
    borderRadius: 5
  }
});

export default Card;
