import React, { useState } from "react";
import {
    FlatList,
    StyleSheet,
    SafeAreaView,
} from "react-native";
import { Colors } from "./Colors";
import UpdateTodo from './UpdateTodo';
import AddSubTodo from './AddSubTodo';
import TodoList from './TodoList';

export default function Todos(props) {

    const [subModalval, setSubModalval] = useState(false);

    const showSubModal = () => {
        setSubModalval(!subModalval);
    }


    return (
        <>
            <SafeAreaView style={styles.firstView} contentContainerStyle={{ flex: 1 }}>
                <FlatList
                    data={props.todos.slice(props.page * 10 - 10, props.page * 10).sort((a, b) => {
                        let x = a.date
                        let y = b.date
                        if (x === y) {
                            { return a.value - b.value }
                        } else {
                            { return new Date(...a.date.split('/').reverse()) - new Date(...b.date.split('/').reverse()) }
                        }
                    }
                    )}
                    renderItem={({ item }) => (
                        <TodoList
                            changeStatus={props.changeStatus}
                            updateTodo={props.updateTodo}
                            showSubModal={showSubModal}
                            addSubTodo={props.addSubTodo}
                            todos={props.todos}
                            item={item}
                            changeSubTodoStatus={props.changeSubTodoStatus}
                        />
                    )}
                />
            </SafeAreaView>

            {props.updateModal ? (
                <UpdateTodo
                    updateModal={props.updateModal}
                    showUpdateModal={props.showUpdateModal}
                    setUpdateModal={props.setUpdateModal}
                    addTodo={props.addTodo}
                    edittext={props.edittext}
                    todos={props.todos}
                    setSum={props.setSum}
                />
            ) : null}

            {subModalval ? (
                <AddSubTodo
                    subModalval={subModalval}
                    showSubModal={showSubModal}
                    setSubModalval={setSubModalval}
                    getTodokey={props.getTodokey}
                    todos={props.todos}
                    setTodos={props.setTodos}
                />
            ) : null}
        </>
    );
}

const styles = StyleSheet.create({
    firstView: {
        height: 560,
    },

    flatlistView: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 20,
        marginHorizontal: 15,
        height: 70,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.lightgray,
    },

    flatlistText: {
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 0.5,
        fontSize: 25,
        minWidth: 250,
        borderBottomColor: Colors.lightgray,

    },
    flatlistText1: {
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 0.5,
        fontSize: 25,
        minWidth: 250,
        borderBottomColor: Colors.lightgray,
        textDecorationLine: "line-through",
        opacity: 0.5,
    },

    touchView: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginHorizontal: 10,
        marginBottom: 5,
    },
    priorityText: {
        margin: 1,
        marginHorizontal: 10,
        marginBottom: 5,
        alignItems: 'center',
    },
    addTouchable: {
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderLeftColor: Colors.lightgray,
        height: 70,
        padding: 5
    }
});
