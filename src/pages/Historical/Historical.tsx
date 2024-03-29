import { TextField, debounce } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useCallback, useState } from 'react';
import '../../App.css';
import getGeoData from '../../services/GetGeoData';
import getWeather from '../../services/GetWeatherData';
import WeatherChart from './WeatherChart';
import TimeSlider from './TimeSlider';
import dayjs, { Dayjs } from 'dayjs';
import { bindActionCreators } from 'redux';
import { State, actionCreators } from '../../state';
import { useDispatch, useSelector } from 'react-redux';
import WeatherCard from './WeatherCard';
import CustomButton from '../../components-shared/CustomButton';

const Historical = () => {
  const dispatch = useDispatch();
  const { setFormData, setWeatherData } = bindActionCreators(actionCreators, dispatch);

  const formData = useSelector((state: State) => state.formData);

  const [date, setDate] = useState<Dayjs | null>(formData?.date || null);
  const [city, setCity] = useState<string>(formData?.city || '');
  const [slider, setSlider] = useState<number[]>(formData?.slider || [0, 23]);
  const weatherdata = useSelector((state: State) => state.weatherdata);

  const [isLoading, setIsLoading] = useState(false);

  const myColor = {
    color: '#f06292',
    hover: '#f48fb1',
  };

  const handleSliderChange = (values: number[]) => {
    setSlider(values);
    setFormData({ city: formData.city, date: formData.date, slider: values });
  };

  /*
    This handleClick function is a debounced callback intended for user interactions.
    It triggers a series of asynchronous operations to fetch weather data based on the selected city and date.

    The function handles loading state, sets form data, and retrieves geographical coordinates.
    It then fetches weather data for both the selected date and the current date, processes the information,
    and sets the processed weather data in the component state.

    If errors occur during the data fetching process, they are logged. Finally, loading state is set to false
    after a delay for a smoother user experience.
  */
  const handleClick = useCallback(
    debounce(() => {
      setIsLoading(true);
      setFormData({ city, date, slider });
      if (city !== null && date !== null) {
        getGeoData(city).then(async (coordinates) => {
          let resultForecast, resultToday;
          try {
            [resultForecast, resultToday] = await Promise.all([
              getWeather({
                lon: coordinates.data[0].lon,
                lat: coordinates.data[0].lat,
                date: date,
              }),
              getWeather({ lon: coordinates.data[0].lon, lat: coordinates.data[0].lat }),
            ]);

            console.log('full weather data:', resultForecast);

            const time = resultToday?.data?.hourly?.time?.slice(formData.slider[0], formData.slider[1] + 1).map((unit: any) => {
              const timeStr = unit?.slice(0, -1).split('T')[1];
              const hour = timeStr?.slice(0, 2);
              const minute = timeStr?.slice(3, 5).padStart(2, '0');
              return `${hour}:${minute}`;
            });

            const allTemperatures = resultForecast?.data.hourly.apparent_temperature.concat(
              resultToday?.data.hourly.apparent_temperature
            );
            const minTemperature = Math.min(...allTemperatures);
            const maxTemperature = Math.max(...allTemperatures);
            setWeatherData({
              forecast: {
                city: city,
                date: date.format('DD.MM.YYYY'),
                time: resultForecast?.data.hourly.time,
                temperature_2m: resultForecast?.data.hourly.temperature_2m,
                apparent_temperature: resultForecast?.data.hourly.apparent_temperature,
                rain: resultForecast?.data.hourly.rain,
                windspeed_10m: resultForecast?.data.hourly.windspeed_10m,
                relativehumidity_2m: resultForecast?.data.hourly.relativehumidity_2m,
                weathercode: resultForecast?.data.hourly.weathercode,
              },
              today: {
                city: city,
                date: dayjs().format('DD.MM.YYYY'),
                time: resultToday?.data.hourly.time,
                temperature_2m: resultToday?.data.hourly.temperature_2m,
                apparent_temperature: resultToday?.data.hourly.apparent_temperature,
                rain: resultToday?.data.hourly.rain,
                windspeed_10m: resultToday?.data.hourly.windspeed_10m,
                relativehumidity_2m: resultToday?.data.hourly.relativehumidity_2m,
                weathercode: resultToday?.data.hourly.weathercode,
              },
              timeUnits: time,
              minMax: { minTemperature: minTemperature, maxTemperature: maxTemperature },
              meta: date.format('DD.MM.YYYY') > dayjs().format('DD.MM.YYYY') ? 'future' : 'history',
            });
          } catch (error) {
            // Handle any errors here
            console.error('Error fetching weather data:', error);
          }
          setTimeout(() => {
            setIsLoading(false);
          }, 700);
        });
      } else {
        console.log('error');
      }
    }, 100),
    [city, date, slider, setFormData, setWeatherData]
  );

  return (
    <div className="historical-container">
      <div className="form-container">
        <div className="input-container">
          <TextField
            id="outlined-basic"
            className="input-field"
            value={city}
            name="city"
            label="City"
            variant="outlined"
            onChange={(e) => setCity(e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={date} label="Date" format="DD.MM.YYYY" onChange={(newValue) => setDate(newValue)} />
          </LocalizationProvider>
          <CustomButton
            value="UPDATE"
            className="update-button"
            disabled={isLoading}
            isloading={isLoading ? 'true' : undefined}
            mycolor={myColor}
            variant="contained"
            size="large"
            onClick={handleClick}
          />
        </div>
        <TimeSlider handleSliderChange={handleSliderChange} />
      </div>
      <div className="chart-container">
        <WeatherChart />
      </div>
      <div className="cards-container">
        {weatherdata ? (
          <>
            <WeatherCard {...weatherdata.today} />
            <WeatherCard {...weatherdata.forecast} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Historical;
