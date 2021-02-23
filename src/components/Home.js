import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import Heading from "./Heading";
import Todos from "./Todos";
import Constants from "expo-constants";
import { Colors } from "./Colors";

export default function Home() {

    const [page, setPage] = useState(1);

    const [edittext, setEditText] = useState('');

    const [todos, setTodos] = useState([
        { text: 'abc', key: 1, check: false, value: 1 },
        { text: 'abc', key: 2, check: false, value: 2 },
        { text: 'abc', key: 3, check: false, value: 3 },
        { text: 'abc', key: 4, check: false, value: 4 },
        { text: 'abc', key: 5, check: false, value: 5 },
        { text: 'abc', key: 6, check: false, value: 6 },
        { text: 'abc', key: 7, check: false, value: 7 },
        { text: 'abc', key: 8, check: false, value: 8 },
        { text: 'abc', key: 9, check: false, value: 9 },
        { text: 'abc', key: 10, check: false, value: 10 },
        { text: 'xyz', key: 11, check: false, value: 11 },
        { text: 'xyz', key: 12, check: false, value: 12 },
        { text: 'abc', key: 13, check: false, value: 13 },
        { text: 'abc', key: 22, check: false, value: 14 },
        { text: 'abc', key: 33, check: false, value: 15 },
        { text: 'abc', key: 44, check: false, value: 16 },
        { text: 'abc', key: 55, check: false, value: 17 },
        { text: 'abc', key: 65, check: false, value: 18 },
        { text: 'abc', key: 75, check: false, value: 19 },
        { text: 'abc', key: 85, check: false, value: 20 },
        { text: 'abc', key: 95, check: false, value: 21 },
        { text: 'abc', key: 105, check: false, value: 22 },
        { text: 'xyz', key: 115, check: false, value: 23 },
        { text: 'xyz', key: 125, check: false, value: 24 },
        { text: 'abc', key: 815, check: false, value: 25 },
        { text: 'abc', key: 951, check: false, value: 26 },
        { text: 'abc', key: 1051, check: false, value: 27 },
        { text: 'xyz', key: 1151, check: false, value: 28 },
        { text: 'xyz', key: 1251, check: false, value: 29 },
        { text: 'abc', key: 851, check: false, value: 30 },
        { text: 'abc', key: 955, check: false, value: 31 },
        { text: 'abc', key: 1055, check: false, value: 32 },
        { text: 'xyz', key: 1155, check: false, value: 33 },
        { text: 'xyz', key: 1265, check: false, value: 34 },
    ])

    const [sum, setSum] = useState(0);

    const [updateModal, setUpdateModal] = useState(false)
    const showUpdateModal = () => {
        setUpdateModal(!updateModal);
    }

    let todosLength = 0;
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
    todosLength = Math.ceil(todos.length / 10);


    const prevPage = () => {
        setPage(page - 1);
    }

    const nextPage = () => {
        if (page < todosLength) {
            setPage(page + 1)

        }
    }


    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'flex-start' }}>
                <Heading addTodo={addTodo} />


                <Todos page={page} edittext={edittext} setSum={setSum} todos={todos} addTodo={addTodo} updateTodo={updateTodo} changeStatus={changeStatus}
                    showUpdateModal={showUpdateModal} updateModal={updateModal} setUpdateModal={setUpdateModal} />
            </View>
            <View style={styles.mainView}>
                <View style={styles.totalView} >
                    <View style={styles.totalView}>
                        <Text style={styles.totalText}> Total : </Text>
                    </View>
                    <View style={styles.totalView}>
                        <Text style={styles.totalText}> {sum}</Text>
                    </View>
                </View>
                <View style={styles.paginationView} >
                    {page > 1 ?
                        <TouchableOpacity onPress={prevPage}>
                            <View style={styles.pagingView}>
                                <Text style={styles.pagingText}> Previous </Text>
                            </View>
                        </TouchableOpacity>
                        : null}
                    <View style={styles.pagingView}>
                        <Text style={styles.pageText}>Page: {page}/{todosLength == 0 ? 1 : todosLength}  </Text>
                    </View>
                    {todos.length > 10 ?
                        <TouchableOpacity onPress={nextPage}>
                            <View style={styles.pagingView}>
                                <Text style={styles.pagingText}>{page < todosLength ? "Next" : null}  </Text>
                            </View>
                        </TouchableOpacity>
                        : null}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: Colors.white,
        marginTop: Constants.statusBarHeight,
    },
    mainView: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        borderWidth: 1,
        width: 400,
        borderTopColor: Colors.black,
    },
    totalView: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    pagingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pagingText: {
        color: Colors.blue,
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        alignSelf: 'center'
    },
    pagingText1: {
        color: Colors.blue,
        fontSize: 20,
        fontWeight: 'bold',
    },
    paginationView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 380,
        marginBottom: 5
    },
    pageText: {
        color: Colors.black,
        fontSize: 15,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
