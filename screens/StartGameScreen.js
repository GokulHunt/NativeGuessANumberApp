import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {
  const [enteredText, setEnteredText] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedNumber, setConfirmedNumber] = useState(null);

  const inputChangeHandler = inputText => {
    setEnteredText(inputText.replace(/[^0-9]/g, ''));
  }

  const resetHandler = () => {
    setEnteredText('');
    setConfirmed(false);
  }

  const continueHandler = () => {
    const enteredNumber = parseInt(enteredText);
    if (isNaN(enteredNumber) || enteredNumber < 0 || enteredNumber > 99) {
      Alert.alert('Invalid Number', 'The number should be between 0 and 99', [{text: 'OK', style: 'destructive', onPress: resetHandler}]);
      return;
    }
    setEnteredText('');
    setConfirmed(true),
    setConfirmedNumber(enteredNumber)
  }

  let confirmedText = null;
  if (confirmed) {
    confirmedText =
    <Card style={styles.confirmedTextContainer}>
      <Text style={styles.confirmedText}>You have entered</Text>
      <NumberContainer>{confirmedNumber}</NumberContainer>
      <MainButton title="Confirm" onPress={() => props.onConfirmation(confirmedNumber)}/>
    </Card>
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.bodyText}>Enter a number</Text>
          <Input style={styles.input} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2} onChangeText={inputChangeHandler} value={enteredText}/>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button style={styles.buttonText} title="Reset" onPress={resetHandler} color={Colors.accent}/>
            </View>
            <View style={styles.button}>
              <Button style={styles.buttonText} title="Continue" onPress={continueHandler} color={Colors.primary} />
            </View>
          </View>
        </Card>
        {confirmedText}
      </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 30
  },
  title: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%'
  },
  bodyText: {
    fontFamily: 'open-sans',
    fontSize: 14
  },
  input: {
    width: 50,
    textAlign: 'center'
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
  confirmedTextContainer: {
    marginVertical: 40,
    alignItems: 'center',
    width: '40%',
    padding: 20
  },
  confirmedText : {
    fontSize: 14
  }

});

export default StartGameScreen;
