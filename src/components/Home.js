import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import Heading from "./Heading";
import Todos from "./Todos";
import Constants from "expo-constants";
import { Colors } from "./Colors";

export default function Home() {

    const [page, setPage] = useState(1);

    const [edittext, setEditText] = useState('');

    const [todos, setTodos] = useState([])

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
