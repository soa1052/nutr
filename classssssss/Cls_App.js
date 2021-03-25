import React from 'react';
import axios from "axios";
import Nutr from "./Nutr";
import Loading from "./Loading";

const API_KEY = "f0f68bd4a1cd8bed890e5a0fa8b901f2";

export default class extends React.Component {
  state ={

    isLoading: true,

    servingSize: 0,
    calories : 0,
    totalCarbo : 0,
    protein : 0,

    totalFat : 0,

    sugar :0,
    sodium :0,

    cholesterol :0,
    saturatedFat :0,
    
    transFat :0,

    groupName :0,

    korName :0,
    makerName :0,

    researchRef :0,
    researchYear :0,

    foodNumber :0,
    foodCodenNmber :0,


  };

  searchNutr = async (searchingWord) => {

    const {data : {results}} 
      = await axios.get("http://27.96.130.14:8787/api/v1/foods/search_nut/?pd_name=%ED%98%B8%EB%9E%91%EC%9D%B4%EB%96%A1");

    this.setState({
      isLoading:false, 
      
      //SERVING_SIZE : JSON.stringify(results[0].SERVING_SIZE),
      servingSize : results[0].SERVING_SIZE,
      calories :results[0].NUTR_CONT1,
      totalCarbo :results[0].NUTR_CONT2,
      protein :results[0].NUTR_CONT3,
      totalFat :results[0].NUTR_CONT4,
      sugar :results[0].NUTR_CONT5,
      sodium :results[0].NUTR_CONT6,
      cholesterol :results[0].NUTR_CONT7,
      saturatedFat :results[0].NUTR_CONT8,
      transFat :results[0].NUTR_CONT9,

      groupName :results[0].GROUP_NAME,

      korName :results[0].DESC_KOR,
      makerName :results[0].MAKER_NAME,

      researchRef :results[0].SUB_REF_NAME,
      researchYear :results[0].RESEARCH_YEAR,

      foodNumber :results[0].NUM,
      foodCodenNmber :results[0].FOOD_CD,

      /*
      unit :results[0].UNIT,
      dietaryFiber :results[0].DIETARY_FIBER,
      sugerAlcohol :results[0].SUGAR_ALCOHOL,
      erythritol :results[0].ERYTHRITOL
*/
    })

  };

  getNutrData = () => {

    const searchingWord = "호랑이떡";
    this.searchNutr(searchingWord);

    this.setState({
      isLoading:false, 
    });
  };

  componentDidMount() {
    this.getNutrData();
  }

  render(){
    const { 

      isLoading, 

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
      foodCodenNmber,
/*
      unit,
      dietaryFiber,
      sugerAlcohol,
      erythritol,
*/
    } = this.state;

    return isLoading ? <Loading></Loading> : <Nutr 
      
      servingSize ={servingSize}
      calories ={calories}
      totalCarbo ={totalCarbo}
      protein ={protein}
      totalFat ={totalFat}
      sugar ={sugar}
      sodium ={sodium}
      cholesterol ={cholesterol}
      saturatedFat ={saturatedFat}
      transFat ={transFat}
  
      groupName ={groupName}
      korName ={korName}
      makerName ={makerName}
      researchRef ={researchRef}
      researchYear ={researchYear}
  
      foodNumber ={foodNumber}
      foodCodenNmber ={foodCodenNmber}
/*  
      unit ={unit}
      dietaryFiber ={dietaryFiber}
      sugerAlcohol ={sugerAlcohol}
      erythritol ={erythritol}
*/
    ></Nutr>;
  }
}