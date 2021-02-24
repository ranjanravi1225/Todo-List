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
    const [valueText, setValueText] = useState('');
    const [todoKey, setTodoKey] = useState(getTempKey);

    const todoText = (val) => {
        setText(val)
    }

    const priorityValue = (val) => {
        setValueText(val)
    }


    return (
        <View>
            <Modal visible={props.subModalval} animationType="fade" transparent={true}>
                <View style={styles.externalView}>
                    <View style={styles.internalView}>
                        <Text style={styles.headerText}> Todo Key </Text>

                        <TextInput
                            style={styles.priorityInputBox}
                            value={todoKey}
                            onChangeText={setTodoKey}
                            editable={false}
                        />
                        <Text style={styles.headerText}> Add Sub Todo </Text>

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
                            <TouchableOpacity onPress={props.showSubModal}>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    props.setSubModalval(false);
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

