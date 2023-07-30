import axios from 'axios';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import IWeatherData from '../../models/IWeatherData';

// https://open-meteo.com/
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m

interface IGetWeather {
  lat: number,
  lon: number,
  date?: Dayjs
  // timezone: string
}

function getWeather ({lon, lat, date = dayjs()}: IGetWeather) {
// function getWeather (lat: number = 52.52, lon: number = 13.41, timezone: string) {
  // return axios.get("https://api.open-meteo.com/v1/forecast?latitude=48.15&longitude=17.11&hourly=temperature_2m,rain,showers,snowfall,windspeed_10m&current_weather=true&start_date=2023-01-16&end_date=2023-01-21")
  // https://api.open-meteo.com/v1/forecast?latitude=48.15&longitude=17.11&hourly=temperature_2m&start_date=2023-04-01&end_date=2023-04-01
  // const myDate: Dayjs = `${date.year()}-${date.month()}-${date.day()}` 
  
  return axios.get<IWeatherData>("https://api.open-meteo.com/v1/forecast", {
    params: {
      latitude: lat,
      longitude: lon,
      hourly: "temperature_2m,apparent_temperature,rain,showers,snowfall,windspeed_10m,weathercode,relativehumidity_2m",
      current_weather: true,
      start_date: date.format('YYYY-MM-DD'),
      end_date: date.format('YYYY-MM-DD')
    }
  })
}

export default getWeather;