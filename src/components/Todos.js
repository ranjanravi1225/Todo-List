import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { Colors } from "./Colors";
import UpdateTodo from './UpdateTodo';

export default function Todos(props) {
    return (
        <>
            <SafeAreaView style={styles.firstView} contentContainerStyle={{ flex: 1 }}>
                <ScrollView>
                    <FlatList
                        data={props.todos.slice(props.page * 10 - 10, props.page * 10)}
                        renderItem={({ item }) => (
                            <View style={styles.flatlistView} onPress={props.showModal}>
                                <TouchableOpacity onPress={() => props.changeStatus(item.key)}>
                                    <Icon
                                        name={
                                            item.check
                                                ? "checkbox-marked-circle-outline"
                                                : "checkbox-blank-circle-outline"
                                        }
                                        size={30}
                                        color={item.check ? Colors.green : Colors.red}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.touchView}
                                    onPress={() => {
                                        props.updateTodo(item.key, item.text, item.value)
                                    }}
                                >
                                    <Text
                                        style={item.check ? styles.flatlistText1 : styles.flatlistText}
                                    >
                                        {item.text}
                                    </Text>

                                    <Octicons
                                        name="primitive-dot"
                                        size={30}
                                        color={item.check ? Colors.green : Colors.red}
                                    />
                                    <View style={styles.priorityText}>
                                        <Text style={{ fontSize: 20 }}>{item.value}</Text>

                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </ScrollView>
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
        </>
    );
}

const styles = StyleSheet.create({
    firstView: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 560,
    },

    flatlistView: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 20,
        marginHorizontal: 15,
        minHeight: 70,
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
        alignItems: 'center'
    }
});
