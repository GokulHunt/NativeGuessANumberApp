import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import EndGameScreen from './screens/EndGameScreen';

const loadFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <AppLoading startAsync={loadFonts} onFinish={() => setLoading(false)} onError={(error) => console.log(error)}/>
  }


  const onConfirmationHandler = confirmedNumber => {
    setSelectedNumber(confirmedNumber);
  }

  const onGameOverHandler = guess => {
    setTotalGuesses(guess);
  }

  const onRestartGameHandler = () => {
    setSelectedNumber(null);
    setTotalGuesses(0);
  }

  let mainContent = <StartGameScreen onConfirmation={onConfirmationHandler}/>

  if (selectedNumber && totalGuesses <= 0) {
    mainContent = <GameScreen confirmedNumber={selectedNumber} onGameOver={onGameOverHandler}/>
  } else if (totalGuesses > 0) {
    mainContent = <EndGameScreen userNumber={selectedNumber} totalGuesses={totalGuesses} restartGame={onRestartGameHandler}/>
  }

  return (
    <View style={styles.container}>
      <Header title="Guess A Number" />
        {mainContent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
