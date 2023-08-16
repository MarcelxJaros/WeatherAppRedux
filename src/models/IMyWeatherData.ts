interface WeatherHourlyData {
  city: string;
  date: string;
  time: string[];
  temperature_2m: number[];
  apparent_temperature: number[];
  rain: number[];
  windspeed_10m: number[];
  relativehumidity_2m: number[];
  weathercode: number[];
}

interface WeatherMinMax {
  minTemperature: number;
  maxTemperature: number;
}

export default interface IMyWeatherData {
  forecast: WeatherHourlyData | undefined;
  today: WeatherHourlyData | undefined;
  timeUnits: string[] | undefined;
  minMax: WeatherMinMax | undefined;
  meta: 'future' | 'history' | undefined;
}
