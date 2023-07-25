import { Button, createMuiTheme } from '@material-ui/core';
import { ButtonProps, TextField, debounce } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useCallback, useState } from 'react';
import '../../App.css'
import getGeoData from '../GetGeoData';
import getWeather from '../GetWeatherData';
import WeatherChart from '../WeatherChart';
import TimeSlider from './TimeSlider';
import dayjs, { Dayjs } from 'dayjs';
import { bindActionCreators } from 'redux';
import { State, actionCreators } from '../../state';
import { useDispatch, useSelector } from 'react-redux';
import WeatherCard from '../WeatherCard';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

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

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[300],
    '&:hover': {
      backgroundColor: pink[200]
    },
  }));



  const handleSliderChange = (values: number[]) => {
    console.log(values);
    setSlider(values)
    // console.log(weatherdata);
    // setWeatherData
    let newData = { city: formData.city, date: formData.date, slider: values }
    setFormData(newData)
  }

  const handleClick = useCallback(debounce(() => {
    setFormData({ city, date, slider });
    if (city !== null && date !== null) {
      getGeoData(city).then(async result => {
        const [resultForecast, resultToday] = await Promise.all([
          getWeather({ lon: result.data[0].lon, lat: result.data[0].lat, date: date }),
          getWeather({ lon: result.data[0].lon, lat: result.data[0].lat })
        ]);
        console.log("full weather data:", resultForecast);

        const time = resultToday?.data?.hourly?.time?.slice(formData.slider[0], formData.slider[1] + 1).map((unit: any) => {
          const timeStr = unit?.slice(0, -1).split('T')[1];
          const hour = timeStr?.slice(0, 2);
          const minute = timeStr?.slice(3, 5).padStart(2, '0');
          return `${hour}:${minute}`;
        });

        const allTemperatures = resultForecast.data.hourly.apparent_temperature.concat(resultToday.data.hourly.apparent_temperature);
        const minTemperature = Math.min(...allTemperatures);
        const maxTemperature = Math.max(...allTemperatures);
        setWeatherData(
          {
            forecast:
            {
              date: date.format('DD.MM.YYYY'),
              time: resultForecast.data.hourly.time,
              temperature_2m: resultForecast.data.hourly.temperature_2m,
              apparent_temperature: resultForecast.data.hourly.apparent_temperature,
              rain: resultForecast.data.hourly.rain,
              windspeed_10m: resultForecast.data.hourly.windspeed_10m,
              relativehumidity_2m: resultForecast.data.hourly.relativehumidity_2m,
              weathercode: resultForecast.data.hourly.weathercode,
            },
            today:
            {
              date: dayjs().format('DD.MM.YYYY'),
              time: resultToday.data.hourly.time,
              temperature_2m: resultToday.data.hourly.temperature_2m,
              apparent_temperature: resultToday.data.hourly.apparent_temperature,
              rain: resultToday.data.hourly.rain,
              windspeed_10m: resultToday.data.hourly.windspeed_10m,
              relativehumidity_2m: resultToday.data.hourly.relativehumidity_2m,
              weathercode: resultToday.data.hourly.weathercode,
            },
            timeUnits:
              time,
            minMax:
              { minTemperature: minTemperature, maxTemperature: maxTemperature },
            meta: (date.format('DD.MM.YYYY') > dayjs().format('DD.MM.YYYY') ? "future" : "history")
          }
        );
      });
    } else {
      console.log("error");
    }

  }, 100), [city, date, slider, setFormData, setWeatherData]);


  return (
    <div className='historical-container'>
      <div className="form-container">

      <div className='input-container'>
        <TextField id="outlined-basic" className="input-field" value={city} name="city" label="City" variant="outlined" onChange={e => setCity(e.target.value)} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker value={date} label="Date" format="DD.MM.YYYY" onChange={(newValue) => setDate(newValue)} />
        </LocalizationProvider>
        <ColorButton variant="contained" size="large" sx={{ ml: 1, color: '#fff', width: "30%", marginLeft: "0 !important" }} style={{ outline: "none", border: "none" }} onClick={handleClick}>Update</ColorButton>
      </div>
        
      <TimeSlider handleSliderChange={handleSliderChange}/>
      {/* <ThemeProvider theme={theme}>
      <TimeSlider color="brown" />
    </ThemeProvider> */}
      </div>
      <div>
        <WeatherChart />
        <br />
        <div className='cards-container'>
          {weatherdata ? <>
            <WeatherCard {...weatherdata.today} />
            <WeatherCard {...weatherdata.forecast} />
          </>
            : <></>}
        </div>
      </div>
    </div>
  )
}

export default Historical;