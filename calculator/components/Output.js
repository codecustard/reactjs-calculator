import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Output extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.output}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create( {
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'black',
        padding: '0.5em'
    },

    text: {
        color: 'white'
    }
});