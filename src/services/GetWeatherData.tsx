import axios from 'axios';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import IWeatherData from '../models/IWeatherDataApi';

// https://open-meteo.com/
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m

interface IGetWeather {
  lat: number;
  lon: number;
  date?: Dayjs;
}

function getWeather({ lon, lat, date = dayjs() }: IGetWeather) {
  return axios.get<IWeatherData>('https://api.open-meteo.com/v1/forecast', {
    params: {
      latitude: lat,
      longitude: lon,
      hourly:
        'temperature_2m,apparent_temperature,rain,showers,snowfall,windspeed_10m,weathercode,relativehumidity_2m',
      current_weather: true,
      start_date: date.format('YYYY-MM-DD'),
      end_date: date.format('YYYY-MM-DD'),
    },
  });
}

export default getWeather;
