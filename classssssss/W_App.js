//import { StatusBar } from 'expo-status-bar';
import React from "react";
import {Alert} from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import Web from "./Web";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "f0f68bd4a1cd8bed890e5a0fa8b901f2";

export default class extends React.Component {
  state ={
    isLoading: true                           /////////////////////////
  };

  getWeather = async (latitude, longitude) => {

    const { data: { main: {temp}, weather }}
      = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

    this.setState({
      isLoading:false,                                             /////////////////////

      condition: weather[0].main,
      temp
    });
  };

  getLocation = async () => {
    try{ await Location.requestPermissionsAsync();

    const { coords:{ latitude, longitude } } 
      = await Location.getCurrentPositionAsync();

    this.getWeather(latitude, longitude);

    this.setState({ isLoading: flase });                         ////////////////////////////
    // Send to API and get weather!
    
    } catch (error){
      Alert.alert("Can't find you.","So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading></Loading> : <Weather temp={temp} condition={condition}></Weather>;
//    return isLoading ? <Loading></Loading> : <Web></Web>;
  }
}