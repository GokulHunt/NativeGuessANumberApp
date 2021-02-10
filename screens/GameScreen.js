import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Colors from '../constants/colors';

const generateRandomNumber = (min, max, ignore) => {
  const minN = Math.ceil(min);
  const maxN = Math.floor(max);
  const random =  Math.floor(Math.random() * (maxN - minN) + minN);

  if (random === ignore) {
    return generateRandomNumber(min, max, ignore);
  } else {
    return random;
  }
}

const GameScreen = (props) => {
  const initialGuess = generateRandomNumber(0, 100, props.confirmedNumber)
  const [guess, setGuess] = useState(initialGuess);
  const [totalGuesses, setTotalGuesses] = useState(1);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const minVal = useRef(0);
  const maxVal = useRef(99);

  useEffect(() => {
    if (parseInt(guess) === parseInt(props.confirmedNumber)){
      props.onGameOver(totalGuesses);
    }
  }, [guess]);

  const directionHandler = direction => {
    if ((props.confirmedNumber > guess && direction === 'lower') || (props.confirmedNumber < guess && direction === 'greater')) {
      Alert.alert('Don\'t Lie', 'Click the correct button!!', [{text: 'OK', style: 'cancel'}]);
      return;
    } else if (direction === 'lower') {
      maxVal.current = guess;
    } else if (direction === 'greater') {
      minVal.current = guess + 1;
    }

    const updatedGuess = generateRandomNumber(minVal.current, maxVal.current, guess);
    setGuess(updatedGuess);
    setTotalGuesses(currentGuess => currentGuess + 1);
    setPastGuesses(oldGuesses => [updatedGuess, ...oldGuesses]);
  }

  const listItem = (each, id) => {
    return (<View style={styles.listItem} key={each}>
      <Text style={styles.listText}>#{id}</Text>
      <Text style={styles.listText}>{each}</Text>
    </View>);
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.mainText}>The guess number is</Text>
      <NumberContainer>{guess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button style={styles.buttonText} title='Lower' onPress={() => directionHandler('lower')} color={Colors.accent}/>
        </View>
        <View style={styles.button}>
          <Button style={styles.buttonText} title='Greater' onPress={() => directionHandler('greater')} color={Colors.accent}/>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((each, id) => listItem(each, totalGuesses - id))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginVertical: 20,
    alignItems: 'center'
  },
  mainText: {
    padding: 10,
    fontSize: 14,
    paddingBottom: 10,
    fontFamily: 'open-sans'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    paddingHorizontal: 10,
    width: '40%'
  },
  buttonText: {
    fontFamily: 'open-sans-bold',
    color: Colors.white
  },
  listContainer: {
    marginVertical: 20,
    flex: 1
  },
  list: {
    width: '100%',
    alignItems: 'center'
  },
  listItem: {
    width: '80%',
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10
  },
  listText:{
    fontSize: 14,
    fontFamily: 'open-sans'
  }

});

export default GameScreen;
