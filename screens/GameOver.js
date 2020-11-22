import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors';
import defaultStyles from '../constants/default-styles';

const GameOver = props => {
    return (
        <View style={styles.screen}>
            <Text style={{...defaultStyles.bodyText, ...styles.text}}>The Game is Over!</Text>
            <Text style={{...defaultStyles.bodyText, ...styles.text}}>The Computer took {props.rounds} tries to guess the number!</Text>
            <Text style={{...defaultStyles.bodyText, ...styles.text}}>The Number was: {props.number}</Text>
            <Button style={styles.button} title="Restart Game" onPress={props.onRestart} color={Colors.primary} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginVertical: 10,
    },
    button: {
        marginVertical: 10,
    }
});

export default GameOver;