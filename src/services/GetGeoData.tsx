import axios from 'axios';
import { useState } from 'react';
import { Dayjs } from 'dayjs';

// https://open-meteo.com/
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m
interface ILoacation {
  data: {
    name: string;
    local_names: {
      [key: string]: string;
    };
    lat: number;
    lon: number;
    country: string;
    state: string;
  };
}

function getGeoData(city: String) {
  return axios.get('https://api.openweathermap.org/geo/1.0/direct', {
    params: {
      q: city,
      appid: '8bd71818d4ce90bc1d4ffd65a3856d9e',
    },
  });
}

export default getGeoData;
