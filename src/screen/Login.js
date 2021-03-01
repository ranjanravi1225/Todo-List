import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, } from 'react-native';
import { Colors } from '../components/Colors';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-community/async-storage';


export default function Login({ navigation }) {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const pressHandler = async () => {
        await AsyncStorage.setItem("id", uuidv4());
        navigation.navigate('Home');
    }

    return (
        <ImageBackground
            source={require('../../assets/Image/backGround.jpg')}
            style={styles.image}
        >
            <Text style={styles.headerText}>Sign In</Text>
            <View>
                <Text style={styles.text}> User Name: </Text>
                <TextInput
                    style={styles.textInput}
                    value={name}
                    onChangeText={(e) => setName(e)}
                />
                <Text style={styles.text}> Password: </Text>
                <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => pressHandler()}
            >
                <Text style={styles.opacityText}> Sign In </Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: 'center'

    },
    headerText: {
        alignSelf: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 50,
        color: Colors.skyBlue
    },
    text: {
        fontSize: 20,
        margin: 5,
        color: Colors.white,

    },
    textInput: {
        height: 40,
        fontSize: 20,
        margin: 10,
        borderWidth: 1,
        borderColor: Colors.white,
        color: Colors.white,
        minWidth: 300,
        padding: 10,
        borderRadius: 10
    },
    opacityText: {
        alignSelf: 'center',
        color: Colors.white,
        fontSize: 20,
    },
    button: {
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.white,
        width: 200,
        backgroundColor: Colors.skyBlue,
        height: 50,
        borderRadius: 20,
        marginTop: 15
    }
})
