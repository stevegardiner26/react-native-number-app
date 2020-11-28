import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
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
    },
    button: {
        marginVertical: 10,
    }
});

export default GameOver;