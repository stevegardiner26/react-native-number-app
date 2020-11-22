import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOver = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <Text>The Computer took {props.rounds} tries to guess the number!</Text>
            <Text>The Number was: {props.number}</Text>
            <Button style={styles.button} title="Restart Game" onPress={props.onRestart} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: 10
    }
});

export default GameOver;