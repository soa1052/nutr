import React, {useState, useEffect} from 'react';

import axios from "axios";
import Nutr from "./Nutr";


export default function App() {

  const [word, setWord] = useState("호랑이떡");
  const [nutrData, setNutrData] = useState([]);

  useEffect(() => {    
    let loading = 1;

    async function getApi () { 
      const getData = await axios.get(
        `http://27.96.130.14:7777/nutdata/search_nut/?pd_name=${word}`
        );
        if (loading = 1) setNutrData(getData.data.results[0]); 
    };


    getApi();
      return () => { loading = 0; }
  },[word]); 


  console.log(nutrData);
console.log(Math.round(nutrData.CALORIES));

console.log('111');


    return (
    <Nutr 
    N = {nutrData} 
    CALORIES = {Math.round(nutrData.CALORIES)}
    TOTAL_CARB = {Math.round(nutrData.TOTAL_CARB*10)/10}
    DIETARY_FIBER = {Math.round(nutrData.DIETARY_FIBER*10)/10}
    GLUCIDE = {Math.round((nutrData.TOTAL_CARB-nutrData.DIETARY_FIBER)*10)/10}
    SUGAR = {Math.round(nutrData.SUGAR*10)/10}
    SUGAR_ALCOHOL = {Math.round(nutrData.SUGAR_ALCOHOL*10)/10}
    ERYTHRITOL = {Math.round(nutrData.ERYTHRITOL*10)/10}
    PROTEIN = {Math.round(nutrData.PROTEIN*10)/10}
    TOTAL_FAT = {Math.round(nutrData.TOTAL_FAT*10)/10}
    SATURATED_FAT = {Math.round(nutrData.SATURATED_FAT*10)/10}
    TRANS_FAT = {Math.round(nutrData.TRANS_FAT*10)/10}
    CHOLESTEROL = {Math.round(nutrData.CHOLESTEROL*10)/10}
    NATRIUM = {Math.round(nutrData.NATRIUM*10)/10}
    ></Nutr>
  );
};

