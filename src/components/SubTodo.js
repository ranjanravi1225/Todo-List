import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { Colors } from "./Colors";

export default function SubTodo(props) {
    return (
        <View style={styles.firstView} contentContainerStyle={{ flex: 1 }}>
            <View style={styles.flatlistView} >
                <TouchableOpacity
                >
                    <Icon
                        name={
                            props.item.check
                                ? "checkbox-marked-circle-outline"
                                : "checkbox-blank-circle-outline"
                        }
                        size={30}
                        color={props.item.check ? Colors.skyBlue : Colors.skyBlue}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchView}
                >
                    <Text
                        style={props.item.check ? styles.flatlistText1 : styles.flatlistText}
                    >
                        {props.item.text}
                    </Text>

                    <Octicons
                        name="primitive-dot"
                        size={30}
                        color={props.item.check ? Colors.green : Colors.red}
                    />
                    <View style={styles.priorityText}>
                        <Text style={{ fontSize: 20 }}>{props.item.value}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    firstView: {
        flexDirection: "row",
        justifyContent: "space-around",
    },

    flatlistView: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 20,
        marginHorizontal: 15,
        height: 50,
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

});
