import React, {useState} from 'react';

import axios from "axios";
import Nutr from "./Nutr";
import Loading from "./Loading";
import { View, Text } from 'react-native';

// http://27.96.130.14:7777/nutdata/search_nut/?pd_name=식품이름


export default function App() {
  
  const [loading, isLoading] = useState(true);
  const [nutrData, getNutrData] = useState(null);

  const GET_NUTR = async (searchingWord) => { 
    const getData = () => {
      getNutrData(await axios.get('http://27.96.130.14:7777/nutdata/search_nut/?pd_name=호랑이떡'));
    }
  };

  GET_NUTR();
  const ddd = () => getNutrData(getData);
  console.log(getData);

  console.log(nutrData);
  const done = () => isLoading(false);
    
  return (
    //    isLoading === 0 ? <Loading></Loading> : <Nutr getNutrData = {getNutrData}></Nutr>

    <View>
      <Text>
        Hello hellp
      </Text>
    </View>

  );
}

