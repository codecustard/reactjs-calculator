import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


import * as math from 'mathjs';

import Button from './components/Button';
import Output from './components/Output';
import Clear from './components/Clear'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      output: ""
    }
  }

  addToOutput = value => {
    this.setState( { output: this.state.output + value })
  }

  calculate = () => {
    this.setState( {output: math.evaluate(this.state.output)});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Output output={this.state.output}></Output>
          <View style={styles.row}>
            <Button handleClick={this.addToOutput}>7</Button>
            <Button handleClick={this.addToOutput}>8</Button>
            <Button handleClick={this.addToOutput}>9</Button>
            <Button handleClick={this.addToOutput}>/</Button>
          </View>

          <View style={styles.row}>
            <Button handleClick={this.addToOutput}>4</Button>
            <Button handleClick={this.addToOutput}>5</Button>
            <Button handleClick={this.addToOutput}>6</Button>
            <Button handleClick={this.addToOutput}>x</Button>
          </View>

          <View style={styles.row}>
            <Button handleClick={this.addToOutput}>1</Button>
            <Button handleClick={this.addToOutput}>2</Button>
            <Button handleClick={this.addToOutput}>3</Button>
            <Button handleClick={this.addToOutput}>+</Button>
          </View>

          <View style={styles.row}>
            <Button handleClick={this.addToOutput}>.</Button>
            <Button handleClick={this.addToOutput}>0</Button>
            <Button handleClick={() => this.calculate()}>=</Button>
            <Button handleClick={this.addToOutput}>-</Button>
          </View>

          <View style={styles.row}>
            <Clear handleClear={() => this.setState({output: ''})}>Clear</Clear>
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
    height: '400px'
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
