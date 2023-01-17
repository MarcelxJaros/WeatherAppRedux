import axios from 'axios';
import { useState } from 'react';

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m

interface IGetWeather {
  lat: number,
  lon: number,
  timezone: string
}

function getWeather ({lat, lon, timezone}: IGetWeather) {
// function getWeather (lat: number = 52.52, lon: number = 13.41, timezone: string) {

  return axios.get("https://api.open-meteo.com/v1/forecast", {
    params: {
      latitude: lat,
      longitude: lon,
      hourly: "temperature_2m"
    }
  })
}

export default getWeather;