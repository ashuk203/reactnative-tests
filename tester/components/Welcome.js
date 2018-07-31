import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Button} from 'react-native'
import styles from '../styles/my.styles';

const Welcome = (props) => {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title = {determineText(props.numClicks)}  onPress={props.messageToConsole} />
      </View>
    );
}

function determineText(clicks) {
  if (clicks < 1) {
    return "Click to start";
  } else if (clicks < 5) {
    return "Keep going...";
  } else {
    return "Click count: " + clicks;
  }
}


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default Welcome

