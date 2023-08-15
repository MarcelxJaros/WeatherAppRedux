import { Card, Typography } from "@mui/material"
import { useSelector } from 'react-redux/es/exports'
import { State } from "../../state"
import dayjs from "dayjs";
import { useRef } from "react";
import getOpenWeatherIcon from "../../services/GetWeatherIcon";
import IMyCardWeatherData from "../../models/IMyCardWeatherData";

const WeatherCard = (props: IMyCardWeatherData) => {
  const hoveredPoint = useSelector((state: State) => state.hoveredPoint)
  const minMaxTemperature = useSelector((state: State) => state.weatherdata.minMax)

  const minValue = minMaxTemperature?.minTemperature;
  const maxValue = minMaxTemperature?.maxTemperature;
  const minColor = [173, 216, 230]; // RGB values for the starting color (light blue)
  const maxColor = [255, 182, 193]; // RGB values for the ending color (light pink)

  const labelRef = useRef<SVGElement>(null);

  // Function to calculate the intermediate color based on the value
  const calculateInterpolatedColor = (value: any) => {
    const weight = (value - minValue) / (maxValue - minValue);
    const interpolatedColor = minColor.map((minValue, index) => {
      const maxValue = maxColor[index];
      return Math.round(minValue + weight * (maxValue - minValue));
    });
    return `rgb(${interpolatedColor.join(',')})`;
  };
  
  if (hoveredPoint.index === -1 || !props && labelRef.current && labelRef.current.getAttribute('opacity') === '0') {
    return <><Card className="weather-card empty"></Card></>

  } else {
    return (
      <div className="weather-cards-container">
        <Card className="weather-card" sx={{ backgroundColor: calculateInterpolatedColor(props?.temperature_2m[hoveredPoint.index]) }}>
          <Typography variant="h6" component="div" sx={{ padding: 1 }}>
            <div className="card-heading">
            {props?.city}, <br className="line-break-phone" />{props?.date?.toString() === dayjs().format('DD.MM.YYYY') ? "TODAY" : props?.date?.toString()},<br className="line-break-phone" /> {hoveredPoint.time} <div className={props?.date?.toString() === dayjs().format('DD.MM.YYYY') ? "black-square" : "blue-dot"}></div>
            </div>
          </Typography>
          <div className="weather-card-container">
            <Typography variant="h4" component="div" sx={{ padding: 1 }}>
              {props?.apparent_temperature[hoveredPoint.index] % 1 === 0
                ? `${props?.apparent_temperature[hoveredPoint.index]}.0`
                : props?.apparent_temperature[hoveredPoint.index]}
              <span className="degree-text">°C</span></Typography>
            <img
              className="weather-card-img"
              src={`https://openweathermap.org/img/wn/${getOpenWeatherIcon(props?.weathercode[hoveredPoint.index])}@2x.png`}
              alt="weathericon"
            />
          </div>
          <div className="weather-card-text">
          <Typography variant="body1">
            real temp: {props?.temperature_2m[hoveredPoint.index]} °C
          </Typography>
          <Typography color="text.secondary">
            rain: {props?.rain[hoveredPoint.index] * 100} % <br />
          </Typography>
          <Typography color="text.secondary">
            wind: {props?.windspeed_10m[hoveredPoint.index]} kh/h <br />
          </Typography>
          <Typography color="text.secondary">
            humidity: {props?.relativehumidity_2m[hoveredPoint.index]} % <br />
          </Typography>
          </div>
        </Card>
      </div>
    )
  }
}

export default WeatherCard