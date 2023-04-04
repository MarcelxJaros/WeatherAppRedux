import axios from 'axios';
import { useState } from 'react';

// https://open-meteo.com/
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m


function getGeoData () {
// function getWeather (lat: number = 52.52, lon: number = 13.41, timezone: string) {
  return axios.get("http://api.openweathermap.org/geo/1.0/direct?q=Bratislava&appid=8bd71818d4ce90bc1d4ffd65a3856d9e")
  // return axios.get("https://api.open-meteo.com/v1/forecast", {
  //   params: {
  //     latitude: lat,
  //     longitude: lon,
  //     hourly: "temperature_2m"
  //   }
  // })
}

export default getGeoData;