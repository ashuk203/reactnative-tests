/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native'
import Welcome from './components/Welcome.js'


var buttonString = 'First Button ';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component {

  constructor(){
    super();

    this.state={
      numClicks : 0
    }
  }
  
  messageToConsole = () => {
    var updatedClicks = this.state.numClicks + 1
    this.setState({numClicks : updatedClicks})
  }
 
  render() {
    return (
      <Welcome numClicks = {this.state.numClicks} messageToConsole = {this.messageToConsole} />
    );
  }
}

/*function messageToConsole(inputs) {
  console.log("Hello world");
  var updatedClicks = {inputs.state.numClicks} + 1;
  inputs.setState({numClicks : updatedClicks});
  numClicks++;
  var tempString = numClicks + " clicks";
  inputs.setState({SampleText : tempString});
}*/
