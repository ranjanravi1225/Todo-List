import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import { Colors } from './Colors';
import AddTodo from './AddTodo';


export default function Heading(props) {

    const [modalval, setModalVal] = useState(false);

    const showModal = () => {
        setModalVal(!modalval);
    }

    return (
        <>
            <View style={styles.headingView}>
                <Text style={styles.heading}> Add Todo </Text>
                <TouchableOpacity
                    style={styles.touchableHeading}
                    onPress={showModal}
                >
                    <Icon name="pluscircleo" size={30} />
                </TouchableOpacity>
            </View>
            {modalval ? (
                <AddTodo
                    modalval={modalval}
                    showModal={showModal}
                    setModalVal={setModalVal}
                    addTodo={props.addTodo}
                />
            ) : null}
        </>
    )
}

const styles = StyleSheet.create({
    headingView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: Colors.black,
        marginTop: 5,
        paddingHorizontal: 5,
        minHeight: 100,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.black,
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold",
    },
    touchableHeading: {
        fontWeight: "bold",
        marginRight: 10,
    },
});
