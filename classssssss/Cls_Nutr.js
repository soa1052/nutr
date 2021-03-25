import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from "prop-types";



/*
    Nutr.propTypes = {

        servingSize :PropTypes.string.isRequired,
        calories :PropTypes.string.isRequired,
        totalCarbo :PropTypes.string.isRequired,
        protein :PropTypes.string.isRequired,
        totalFat :PropTypes.string.isRequired,
        sugar :PropTypes.string.isRequired,
        sodium :PropTypes.string.isRequired,
        cholesterol :PropTypes.string.isRequired,
        saturatedFat :PropTypes.string.isRequired,
        transFat :PropTypes.string.isRequired,
        groupName :PropTypes.string.isRequired,
        korName :PropTypes.string.isRequired,
        makerName :PropTypes.string.isRequired,
        researchRef :PropTypes.string.isRequired,
        researchYear :PropTypes.string.isRequired,
        foodCodenNmber :PropTypes.string.isRequired,
        unit :PropTypes.string.isRequired,
        dietaryFiber :PropTypes.string.isRequired,
        sugerAlcohol :PropTypes.string.isRequired,
        erythritol : PropTypes.string.isRequired,
        foodNumber : PropTypes.number.isRequired,
    };


*/




export default function Nutr(
    {
    servingSize,
    calories,
    totalCarbo,
    protein,
    totalFat,
    sugar,
    sodium,
    cholesterol,
    saturatedFat,
    transFat,
    groupName,
    korName,
    makerName,
    researchRef,
    researchYear,
    foodNumber,
    foodCodenNmber
    }) {

    return (
    <View style={styles.container}>
        <StatusBar style="auto" />

    <View style ={styles.titleCont}>
    <Text style ={styles.title}>
        {korName}</Text></View>

    <View style ={styles.fiveContainer}>
    <Text style ={styles.subTitle}>
        ({groupName})</Text></View>

    <View style ={styles.calCont}>
    <Text style ={styles.calTitle}>
        {servingSize} g?ml? 당 {calories} kcal</Text></View>

    <View style ={styles.carboCon}>
    <Text style ={styles.mainNutr}>
        탄수화물</Text>
        <Text style ={styles.number}>
        {totalCarbo}</Text></View>
        
    <View style ={styles.sevenContainer}>
    <Text style ={styles.subNutr}>
        🥬  식이섬유</Text>
        <Text style ={styles.number}>
        ??????</Text></View>  

    <View style ={styles.sevenContainer}>
    <Text style ={styles.subNutr}>
        🍬 당류</Text>
        <Text style ={styles.number}>
        {sugar}</Text></View>

    <View style ={styles.sevenContainer}>
    <Text style ={styles.subNutr}>
        🍬 당질 (순탄수화물)</Text>
        <Text style ={styles.number}>
        ????</Text></View>

    <View style ={styles.proteinCon}>
    <Text style ={styles.mainNutr}>
        단백질</Text>
        <Text style ={styles.number}>
        {protein}</Text></View>
    
    <View style ={styles.fatCon}>
    <Text style ={styles.mainNutr}>
        지방</Text>
        <Text style ={styles.number}>
        {totalFat}</Text></View>
    
    <View style ={styles.sevenContainer}>
    <Text style ={styles.subNutr}>     트랜스지방</Text>
    <Text style ={styles.number}>
        {transFat}</Text></View>
    
    <View style ={styles.sevenContainer}>
    <Text style ={styles.subNutr}>     포화지방</Text>
    <Text style ={styles.number}>
        {saturatedFat}</Text></View>
    
    <View style ={styles.sodiumCon}>
    <Text style ={styles.mainNutr}>
        나트륨</Text>
        <Text style ={styles.number}>
            {sodium}</Text></View>
    
    <View style ={styles.ColesterolCon}>
    <Text style ={styles.mainNutr}>
        콜레스테롤</Text>
        <Text style ={styles.number}>
        {cholesterol}</Text></View>
    
    <View style ={styles.fiveContainer}>
    <Text style ={styles.description}>
        제조사 : {makerName}</Text></View>
    
    <View  style ={styles.fiveContainer}>
    <Text style ={styles.description}>
        {researchYear}년 {researchRef}</Text></View>

    </View>);
}


const styles = StyleSheet.create({


  //container style 

container: {
    flex: 1,
    marginTop: 20,
},

titleCont: {
    flex: 1.2,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white'
},

calCont: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
},

fiveContainer: {
    flex: 0.5,
    backgroundColor:'#E6E6E6',
    alignItems: 'stretch',
    justifyContent: 'center',
},

sevenContainer: {
    flex: 0.7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems:'center',
},

carboCon: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "#FBC1B3",
},

proteinCon: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "#BCE2D7",
},

fatCon: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "#E9D1E1",
},

sodiumCon: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "#D9F1FD",
},

ColesterolCon: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "#D9F1FD",
},




  // text style

title: {
    fontSize: 22,
    fontWeight:'bold',
    textAlign: 'center',
},

calTitle: {
    fontSize: 18,
    fontWeight:'bold',
    textAlign: 'center',
},

subTitle: {
    textAlign: 'center',
},

description: {
    textAlign: 'center',
},

mainNutr: {
    flex: 1.5,
},

subNutr: {
    flex: 1.5,
},

number:{
    flex: 1,
}
});
