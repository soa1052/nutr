import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar Style="auto"></StatusBar>
            <Text style={styles.text}>
                정보를 가져오고 있어요 
                <MaterialCommunityIcons name="star-face" size={30} color="black" />
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fdf6aa"
    },

    text:{
        color: "#2c2c2c",
        fontSize: 30
    }
});
