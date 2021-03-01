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

export default function UpdateTodo(props) {


    let temp = "";
    let temp1 = "";
    if (props.edittext.length > 0) {
        const { text, value } = props.edittext[0]
        temp = text,
            temp1 = value
    }


    const [text, setText] = useState(temp);
    const [valueText, setValueText] = useState(temp1);

    const todoText = (val) => {
        setText(val)
    }

    const priorityValue = (val) => {
        setValueText(val)
    }

    let updatedValue = 0;
    const updateValue = () => {
        if (parseInt(valueText) > 10 || parseInt(valueText) < 0) {
            alert("Priority value should be in between 1-10");
        }
        else if (text.trim().length > 0 && valueText.length > 0) {
            if (props.edittext.length > 0) {
                let res = props.edittext[0]
                res.text = text.trim();
                res.value = valueText;
                props.todos.forEach((a, i) => {
                    if (a.key == res.key) {
                        props.todos[i] = res;
                    }
                })
                props.todos.forEach((a) => {
                    updatedValue = updatedValue + parseInt(a.value)
                    props.setSum(parseInt(updatedValue))
                })
            }
        } else {
            alert("Fill all the field")
        }
        props.setUpdateModal(false);
    }

    return (
        <View>
            <Modal visible={props.modalval} animationType="fade" transparent={true}>
                <View style={styles.externalView}>
                    <View style={styles.internalView}>
                        <Text style={styles.headerText}> Update Todo </Text>

                        <TextInput
                            style={styles.inputBox}
                            value={text}
                            onChangeText={todoText}
                        />
                        <Text style={styles.headerText}> Priority Value(1-10) </Text>

                        <TextInput
                            style={styles.priorityInputBox}
                            keyboardType='numeric'
                            maxLength={2}
                            value={valueText}
                            onChangeText={priorityValue}
                        />
                        <View style={styles.thirdView}>
                            <TouchableOpacity onPress={props.showUpdateModal}>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={updateValue}
                            >
                                <Text style={styles.textStyle}>Update</Text>
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
        color: Colors.blue,
        fontSize: 20,
    },
});
