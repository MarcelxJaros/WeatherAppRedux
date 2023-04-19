import { Button } from '@material-ui/core';
import { Slider, TextField, debounce } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import '../../App.css'
import getGeoData from '../GetGeoData';
import getWeather from '../GetWeatherData2';
import WeatherChart from '../WeatherChart';
import TimeSlider from './TimeSlider';
import { Dayjs } from 'dayjs';
import IFormData from '../../models/IFormData';
import { bindActionCreators } from 'redux';
import { State, actionCreators } from '../../state';
import { useDispatch, useSelector } from 'react-redux';
import IWeatherData from '../../models/IWeatherData'
import WeatherCard from '../WeatherCard';

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

  const dispatch = useDispatch()
  const { setFormData, setWeatherData } = bindActionCreators(actionCreators, dispatch)

  const formData = useSelector((state: State) => state.formData)
  console.log("formData:", formData)

  const [date, setDate] = useState<Dayjs | null>(formData?.date || null);
  const [city, setCity] = useState<string>(formData?.city || '');
  const [slider, setSlider] = useState<number[]>(formData?.slider || [0, 23]);
  const weatherdata = useSelector((state: State) => state.weatherdata)
  console.log("weatherdata:", weatherdata);

  const handleSliderChange = (values: number[]) => {
    console.log(values);
    setSlider(values)
    // console.log(weatherdata);
    // setWeatherData
    let newData = {city: formData.city, date: formData.date, slider: values}
    setFormData(newData)
  }

  const handleClick = useCallback(debounce(() => {
    setFormData({ city, date, slider });
    if (city !== null && date !== null) {
      getGeoData(city).then(async result => {
        // getWeather({ lon: result.data[0].lon, lat: result.data[0].lat, date: date }).then((result: { data: IWeatherData }) => {
        //   console.log(result);

        //       // setWeatherData(result.data.hourly.temperature_2m.slice(slider[0], slider[1]));
        // });
        const [resultHistory, resultToday] = await Promise.all([
          getWeather({ lon: result.data[0].lon, lat: result.data[0].lat, date: date }),
          getWeather({ lon: result.data[0].lon, lat: result.data[0].lat })
        ]);
        console.log("full weather data:", resultHistory);
        
        const [weatherDataToday, weatherDataHistory, timeUnits] = [resultToday.data.hourly.temperature_2m, resultHistory.data.hourly.temperature_2m, resultHistory.data.hourly.time];
        // const [weatherDataToday, weatherDataHistory] = [resultToday.data.hourly.temperature_2m, resultHistory.data.hourly.temperature_2m].map(data => data.slice(slider[0], slider[1]));

        setWeatherData({history: weatherDataHistory, today: weatherDataToday, timeUnits: timeUnits});
      });
    } else {
      console.log("error");
    }

  }, 100), [city, date, slider, setFormData, setWeatherData]);

  return (
    <div className='historical-container'>
      <div className='input-container'>
        <TextField id="outlined-basic" style={{ width: "30%"}} value={city} name="city" label="City" variant="outlined" onChange={e => setCity(e.target.value)} />
        {/* <br /> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker value={date} label="Date" onChange={(newValue) => setDate(newValue)} />
        </LocalizationProvider>
        {/* <br /> */}
        <Button variant="contained" size="large" sx={{ ml: 1, color: '#fff', width: "30%", marginLeft: "0 !important" }} style={{ outline: "none", border: "none" }} onClick={handleClick}>Update</Button>
        {/* <br /> */}
      </div>
        <TimeSlider handleSliderChange={handleSliderChange} />
      <div>
        <WeatherChart />
        <br />
        <div className='cards-container'>
        <WeatherCard />
        <WeatherCard />
        </div>
      </div>
    </div>
  )
}

export default Historical;