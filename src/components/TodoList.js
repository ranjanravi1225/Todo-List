import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import PlusIcon from "react-native-vector-icons/AntDesign";
import { Colors } from "./Colors";
import SubTodo from './SubTodo';
import moment from "moment";


export default function TodoList(props) {

    let newdate = moment(props.item.date).format("YY");

    return (
        <>
            <View style={styles.firstView} contentContainerStyle={{ flex: 1 }}>
                <View style={styles.flatlistView} onPress={props.showModal}>
                    <TouchableOpacity onPress={() => props.changeStatus(props.item.key)}>
                        <Icon
                            name={
                                props.item.check
                                    ? "checkbox-marked-circle-outline"
                                    : "checkbox-blank-circle-outline"
                            }
                            size={30}
                            color={props.item.check ? Colors.green : Colors.red}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.touchView}
                        onPress={() => {
                            props.updateTodo(props.item.key, props.item.text, props.item.value)
                        }}
                    >
                        <Text
                            style={props.item.check ? styles.flatlistText1 : styles.flatlistText}
                        >
                            {props.item.text}
                        </Text>
                        <View style={styles.dateView}>
                            <Text
                                style={moment(props.item.date).format("MMM D, YY") < moment().format("MMM D, YY") ? styles.backDateText : styles.dateText}
                            >
                                {parseInt(newdate) < 21 ? moment(props.item.date).format("MMM D, YY") : moment(props.item.date).format("MMM D")}
                            </Text>
                        </View>
                        {/* <Octicons
                            name="primitive-dot"
                            size={30}
                            color={props.item.check ? Colors.green : Colors.red}
                        /> */}
                        <View style={styles.priorityText}>
                            <Text style={styles.valueText}>{props.item.value}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.addTouchable}
                        onPress={() => {
                            props.showSubModal();
                            props.addSubTodo(props.item.key)
                        }}
                    >
                        <PlusIcon name="pluscircleo" size={25} color={Colors.skyBlue} />
                    </TouchableOpacity>
                </View>
            </View>
            { props.item.subTodo ?
                <FlatList
                    data={props.item.subTodo}
                    renderItem={({ item }) => (
                        <SubTodo item={item} changeSubTodoStatus={props.changeSubTodoStatus} />
                    )}
                />
                : null
            }
        </>
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
        marginHorizontal: 10,
        height: 70,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.lightgray,

    },

    flatlistText: {
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 5,
        marginBottom: 0.5,
        fontSize: 25,
        width: 200,
        height: 35,
        borderBottomColor: Colors.lightgray,
    },
    dateView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 1
    },
    dateText: {
        fontSize: 20,
        color: Colors.green
    },
    backDateText: {
        fontSize: 20,
        color: Colors.red,
    },
    flatlistText1: {
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 5,
        marginBottom: 0.5,
        fontSize: 25,
        width: 200,
        height: 35,
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
        marginRight: 10,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    valueText: {
        fontSize: 20,
        color: Colors.blue,
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
