import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Button from './components/Button'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.row}>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>/</Button>
          </View>

          <View style={styles.row}>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>x</Button>
          </View>

          <View style={styles.row}>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </View>

          <View style={styles.row}>
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button>-</Button>
          </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    backgroundColor: '#F5FCFF',
  },

  row: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row'
  },

  wrapper: {
    width: '400px',
    height: '600px'
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
