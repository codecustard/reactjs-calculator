import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Button extends Component {

    render() {
        return(
            <View 
            style={styles.buttonContainer}
            onClick={() => this.props.handleClick(this.props.children)}
            >
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