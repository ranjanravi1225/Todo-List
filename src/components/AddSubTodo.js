import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Colors } from "./Colors";

export default function AddSubTodo(props) {


    const [text, setText] = useState('');

    const todoText = (val) => {
        setText(val)
    }

    const addSubTodo = () => {
        if (text.trim().length > 0) {
            if (props.getTodokey.length > 0) {
                const { key } = props.getTodokey[0]
                let getKey = key;
                const addSub = props.todos.map((e) => {
                    if (e.key == getKey) {
                        return { ...e, subTodo: [...e.subTodo, { text: text, key: Math.random().toString(), check: false, parentKey: getKey }] };
                    }
                    else {
                        return { ...e };
                    }
                })
                props.setTodos(addSub);
            }
        } else {
            alert("Fill all the field")
        }
    }


    return (
        <View>
            <Modal visible={props.subModalval} animationType="fade" transparent={true}>
                <View style={styles.externalView}>
                    <View style={styles.internalView}>
                        <Text style={styles.headerText}> Add Sub Todo </Text>

                        <TextInput
                            style={styles.inputBox}
                            value={text}
                            onChangeText={todoText}
                        />
                        <View style={styles.thirdView}>
                            <TouchableOpacity onPress={props.showSubModal}>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    props.setSubModalval(false);
                                    addSubTodo(text);
                                }}
                            >
                                <Text style={styles.textStyle}> Done </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    externalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    internalView: {
        borderRadius: 15,
        paddingRight: 5,
        borderWidth: 1,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingTop: 15,
        paddingRight: 10,
        minWidth: 350,
        borderColor: Colors.lightgray,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
    },

    inputBox: {
        borderWidth: 1,
        borderColor: Colors.lightgray,
        borderRadius: 10,
        height: 150,
        minWidth: 350,
        padding: 10,
    },
    priorityInputBox: {
        borderWidth: 1,
        borderColor: Colors.lightgray,
        borderRadius: 10,
        height: 50,
        minWidth: 350,
        padding: 10,
    },

    thirdView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
    },

    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 10,
    },

    textStyle: {
        color: Colors.skyBlue,
        fontSize: 20,
    },
});
