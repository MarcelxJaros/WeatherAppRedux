import axios from 'axios';

// https://open-meteo.com/
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m

function getGeoData(city: string) {
  return axios.get('https://api.openweathermap.org/geo/1.0/direct', {
    params: {
      q: city,
      appid: '8bd71818d4ce90bc1d4ffd65a3856d9e',
    },
  });
}

export default getGeoData;
