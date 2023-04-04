import { Button } from '@material-ui/core';
import { Slider, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';
import '../../App.css'
import getGeoData from '../GetGeoData';
import getWeather from '../GetWeatherData';
import WeatherChart from '../WeatherChart';

const marks = [
  {
    value: 0,
    label: '0:00',
  },
  {
    value: 1,
    label: '1:00',
  },
  {
    value: 2,
    label: '2:00',
  },
  {
    value: 3,
    label: '3:00',
  },
];

const Historical = () => {
  
  const [weatherData, setWeatherData] = useState(null)
  
  const [loading, setLoading] = useState(false);

  return (
    <div className='historical-container'>
      <div className='input-container'>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={24}
        />
        <Button onClick={() => {
          getGeoData().then(result => {
            getWeather({lon: result.data[0].lon, lat: result.data[0].lat}).then((result: { data: any }) => { console.log("Bratislava weather:", result.data); setWeatherData(result.data); setLoading(false) })
          });
        }}>Click</Button>
      </div>
      <div>
      <WeatherChart />
      </div>
    </div>
  )
}

export default Historical;