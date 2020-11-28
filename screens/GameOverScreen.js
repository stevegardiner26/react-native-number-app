import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';
import defaultStyles from '../constants/default-styles';

const GameOver = props => {
    return (
        <View style={styles.screen}>
            <Text style={{...defaultStyles.title, ...styles.text}}>The Game is Over!</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')}
                    //source={{uri: "https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png"}}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer}>
                <Text style={{...defaultStyles.bodyText, ...styles.text}}>
                    Your phone took <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess the number <Text style={styles.highlight}>{props.number}</Text>!
                </Text>
            </View>
            <MainButton style={styles.button} onPress={props.onRestart} color={Colors.primary}>New Game</MainButton>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 300
    },
    imageContainer: {
        borderColor: 'black',
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        overflow: 'hidden'
    },
    text: {
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 20
    },
    button: {
        marginVertical: 10,
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    }
});

export default GameOver;