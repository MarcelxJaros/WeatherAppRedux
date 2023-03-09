import axios from 'axios';
import { useState } from 'react';

// https://open-meteo.com/
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m

interface IGetWeather {
  lat: number,
  lon: number,
  timezone: string
}

function getWeather ({lat, lon, timezone}: IGetWeather) {
// function getWeather (lat: number = 52.52, lon: number = 13.41, timezone: string) {
  return axios.get("https://api.open-meteo.com/v1/forecast?latitude=48.15&longitude=17.11&hourly=temperature_2m,rain,showers,snowfall,windspeed_10m&current_weather=true&start_date=2023-01-15&end_date=2023-01-21")
  // return axios.get("https://api.open-meteo.com/v1/forecast", {
  //   params: {
  //     latitude: lat,
  //     longitude: lon,
  //     hourly: "temperature_2m"
  //   }
  // })
}

export default getWeather;