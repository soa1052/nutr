import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from "prop-types";

export default function Nutr(
    {
        N,
        CALORIES, 
        TOTAL_CARB,
        DIETARY_FIBER,
        SUGAR,
        GLUCIDE,
        SUGAR_ALCOHOL,
        ERYTHRITOL,
        PROTEIN,
        TOTAL_FAT,
        SATURATED_FAT,
        TRANS_FAT,
        CHOLESTEROL,
        NATRIUM,
    }) {    
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
    
        <View style ={styles.titleCont}>
        <Text style ={styles.title}>
            {N.PROD_NAME}</Text></View>
    
        <View style ={styles.fiveContainer}>
        <Text style ={styles.subTitle}>
            {N.FOOD_GROUP} ({N.FOOD_CLASS}) </Text></View>
    


        <View style ={styles.dataContainer}>
            <View style ={styles.calCont}>
            <Text style ={styles.calTitle}>
                1회 제공량 : {N.SERV_SIZE} {N.UNIT}   ( {CALORIES} kcal ) </Text></View>
        
            <View style ={styles.carboCon}>
            <Text style ={styles.mainNutr}>
                탄수화물</Text>
                <Text style ={styles.number}>
                {TOTAL_CARB} g</Text></View>
                
            <View style ={styles.sevenContainer}>
            <Text style ={styles.subNutr}>
                🥬  식이섬유</Text>
                <Text style ={styles.number}>
                {DIETARY_FIBER} g</Text></View>  
        
            <View style ={styles.sevenContainer}>
            <Text style ={styles.subNutr}>
                🍬 당류</Text>
                <Text style ={styles.number}>
                {SUGAR} g</Text></View>
        
            <View style ={styles.GLUCIDEContainer}>
                    <Text style ={styles.GLUCIDEtext}>
                    🍬 당질 (순탄수화물)
                    </Text>
                <Text style ={styles.number}>
                {GLUCIDE}  g</Text>
                
                </View>
        
            <View style ={styles.proteinCon}>
            <Text style ={styles.mainNutr}>
                단백질</Text>
                <Text style ={styles.number}>
                {PROTEIN} g</Text></View>
            
            <View style ={styles.fatCon}>
            <Text style ={styles.mainNutr}>
                지방</Text>
                <Text style ={styles.number}>
                {TOTAL_FAT} g</Text></View>
            
            <View style ={styles.sevenContainer}>
            <Text style ={styles.subNutr}>     트랜스지방</Text>
            <Text style ={styles.number}>
                {TRANS_FAT} g</Text></View>
            
            <View style ={styles.sevenContainer}>
            <Text style ={styles.subNutr}>     포화지방</Text>
            <Text style ={styles.number}>
                {SATURATED_FAT} g</Text></View>
            
            <View style ={styles.sodiumCon}>
            <Text style ={styles.mainNutr}>
                나트륨</Text>
                <Text style ={styles.number}>
                    {NATRIUM} mg</Text></View>
            
            <View style ={styles.ColesterolCon}>
            <Text style ={styles.mainNutr}>
                콜레스테롤</Text>
                <Text style ={styles.number}>
                {CHOLESTEROL} mg</Text></View>
        </View>


        <View style ={styles.fiveContainer}>
        <Text style ={styles.description}>
            제조사 : {N.MAKER_NAME}</Text></View>
        
        <View  style ={styles.fiveContainer}>
        <Text style ={styles.description}>
            {N.RESEARCH_YEAR}년 {N.REFERENCE}</Text></View>
    
        </View>);
};



const styles = StyleSheet.create({


  //container style 

container: {
    flex: 1,
    marginTop: 20,
    margin: 10,
},


titleCont: {
    flex: 1.2,
    alignItems: 'stretch',
    justifyContent: 'center',
},


dataContainer: {
    flex: 10,
    padding: 10,
    borderRadius: 10 ,
    backgroundColor: '#F2F2F2'
},

calCont: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    borderBottomWidth: 2,
},

fiveContainer: {
    flex: 0.5,
    alignItems: 'stretch',
    justifyContent: 'center',

},

GLUCIDEContainer: {
    flex: 0.7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems:'center',
},
/*
GLUCIDE_title: {
    flex: 1,
    width: '100%',
    backgroundColor: 'tomato'
},
*/
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
    borderBottomWidth: 1,
},

proteinCon: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems:'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
},

fatCon: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems:'center',
    borderBottomWidth: 1,
},

sodiumCon: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems:'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
},

ColesterolCon: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems:'center',
    borderBottomWidth: 1,
},




  // text style

title: {
    fontSize: 22,
    fontWeight:'900',
    textAlign: 'center',
},

calTitle: {
    fontSize: 18,
    fontWeight:'bold',
    textAlign: 'center',
},

GLUCIDEtext: {
    flex: 1.5,
    fontWeight:'bold',
    color: '#F185AE',

    textShadowColor: '#F2C1D4',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 5

},



subTitle: {
    textAlign: 'center',
},

description: {
    textAlign: 'center',
},

mainNutr: {
    flex: 1.5,
    fontWeight:'600',

},

subNutr: {
    flex: 1.5,
},

number:{
    flex: 1,
}
});
