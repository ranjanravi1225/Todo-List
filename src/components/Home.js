import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import Heading from "./Heading";
import Todos from "./Todos";
import Constants from "expo-constants";
import { Colors } from "./Colors";

export default function Home() {

    const [todos, setTodos] = useState([])

    const [sum, setSum] = useState(0);

    const addTodo = (text, valueText) => {
        if (text.trim().length > 0) {
            setTodos([
                ...todos,
                { text: text.trim(), value: valueText.trim(), key: Math.random().toString(), check: false },
            ]
            );
        } else {
            alert("List can't be empty");
        }
    }

    const addPriotiyValue = (valueText) => {
        let temp = parseInt(valueText);
        setSum(sum + temp);
    }
    const changeStatus = (key) => {
        const checkStatus = todos.map((e) => {
            if (e.key === key) {
                return { ...e, check: !e.check };
            } else {
                return { ...e };
            }
        });
        setTodos(checkStatus);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Heading addTodo={addTodo} sum={sum} addPriotiyValue={addPriotiyValue} />
            <View>
                <Todos todos={todos} changeStatus={changeStatus} />
            </View>
            <View style={styles.mainView}>
                <View style={styles.totalView}>
                    <Text style={styles.totalText}> Total : </Text>
                </View>
                <View style={styles.totalView}>
                    <Text style={styles.totalText}> {sum}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        marginTop: Constants.statusBarHeight,
    },
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
    },
    totalView: {
        margin: 15,
        justifyContent: 'flex-start'

    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',

    }
});
