import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import Heading from "./Heading";
import Todos from "./Todos";
import Constants from "expo-constants";
import { Colors } from "./Colors";

export default function Home() {

    const [edittext, setEditText] = useState('');

    const [todos, setTodos] = useState([])

    const [sum, setSum] = useState(0);

    const [updateModal, setUpdateModal] = useState(false)
    const showUpdateModal = () => {
        setUpdateModal(!updateModal);
    }


    const addTodo = (text, valueText) => {
        if (parseInt(valueText) > 10 || parseInt(valueText) < 0) {
            alert("Priority value should be in between 1-10");
        }
        else if (text.trim().length > 0 && valueText.length > 0) {
            setTodos([
                ...todos,
                { text: text.trim(), value: valueText, key: Math.random().toString(), check: false },
            ]
            );
            setSum(sum + parseInt(valueText));

        } else {
            alert("Fill all the input field");
        }
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

    const updateTodo = (key, text, value) => {
        showUpdateModal(true)
        const arr = todos.filter((e) => e.key == key)
        setEditText(arr);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Heading addTodo={addTodo} />
            <View>
                <Todos edittext={edittext} setSum={setSum} todos={todos} addTodo={addTodo} updateTodo={updateTodo} changeStatus={changeStatus}
                    showUpdateModal={showUpdateModal} updateModal={updateModal} setUpdateModal={setUpdateModal} />
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
