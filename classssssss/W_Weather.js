import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import WebView from "react-native-webview";

const weatherOptions = {
    Thunderstorm:{
        iconName:"weather-lightning-rainy",
        gradient: ['rgba(0, 8, 117, 1)', 'transparent'],
        title:"Thunderstorm",
        subtitle:"번개"
    },
    Drizzle:{
        iconName:"amazon-drive",
        gradient: ['rgba(61, 127, 174, 1)', 'transparent'],
        title:"Drizzle",
        subtitle:"이슬비"
    },
    Rain:{
        iconName:"weather-rainys",
        gradient: ['rgba(162, 146, 195, 1)', 'transparent'],
        title:"Rain",
        subtitle:"비"
    },
    Snow:{
        iconName:"weather-snowy-heavy",
        gradient: ['rgba(252, 192, 243, 0.97)', 'transparent'],
        title:"Snow",
        subtitle:"눈"
    },
    Atmosphere:{
        iconName:"weather-fog",
        gradient: ['rgba(136, 92, 240, 1)', 'transparent'],
        title:"Atmosphere",
        subtitle:"안개"
    },
    Clear:{
        iconName:"weather-sunny",
        gradient: ['rgba(255, 89, 0, 0.77)', 'transparent'],
        title:"Clear",
        subtitle:"맑음"
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient: ['rgba(153, 0, 255, 0.77)', 'transparent'],
        title:"구름",
        subtitle:"It's cloudy"
    }
};


export default function Weather({temp, condition}){
    return ( 
        <LinearGradient
        // Button Linear Gradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content"></StatusBar>
            
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    name= {weatherOptions[condition].iconName}
                        // || "white-balance-sunny"}
                    size={80}
                    color="white" 
                />
                <Text style={styles.temp}> {temp}º </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}> {weatherOptions[condition].title} </Text>
                <Text style={styles.subtitle}>  {weatherOptions[condition].subtitle}  </Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    halfContainer:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    textContainer: {
        flex: 1,
        justifyContent:"center",
        alignContent:"flex-start",
        paddingHorizontal: 40,
    },
    temp: {
        fontSize: 35,
        color: "white"
    },
    title: {
        fontSize: 40,
        color: "#999999",
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        fontSize: 25,
        color: "#999999"
    }

});