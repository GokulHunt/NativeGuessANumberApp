import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const EndGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.gameOverText}>GAME OVER!!</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/success.png')} resizeMode="cover"/>
      </View>
      <View style={styles.scoreCard}>
        <Text style={styles.messageText}>The selected number is
          <Text style={styles.highlightedText}> {props.userNumber}</Text>.
        </Text>
        <Text style={styles.messageText}>The computer took
          <Text style={styles.highlightedText}> {props.totalGuesses}</Text> guesses.
        </Text>
        <View style={styles.button}>
          <MainButton title="Restart Game" onPress={() => props.restartGame()}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 20,
    alignItems: 'center'
  },
  gameOverText: {
    color: Colors.black,
    fontSize: 18,
    paddingVertical: 10,
    fontFamily: 'open-sans-bold'
  },
  messageText: {
    fontSize: 14,
    color: Colors.gray,
    fontFamily: 'open-sans'
  },
  highlightedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.accent,
    fontFamily: 'open-sans-bold'
  },
  scoreCard: {
    height: 200,
    alignItems: 'center',
    marginVertical: 10
  },
  button: {
    marginTop: 20,
    width: '40%'
  },
  image: {
    width: 300,
    height: 300
  },
  imageContainer: {
    borderWidth: 4,
    borderColor: Colors.black,
    borderRadius: 150,
    overflow: 'hidden'
  }
});

export default EndGameScreen;
