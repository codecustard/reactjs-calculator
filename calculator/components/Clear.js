import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Clear extends Component {

    render() {
        return(
            <View onClick={this.props.handleClear} style={styles.buttonContainer}>
                <p>{this.props.children}</p>
            </View>
        );
    }
}

const styles = StyleSheet.create( {
    buttonContainer: {
        height: '4em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'gray'
    }
});