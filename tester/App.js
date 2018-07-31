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
