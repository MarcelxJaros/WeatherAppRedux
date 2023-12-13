interface WeatherHourlyData {
  city: string;
  date: string;
  time: string[] | undefined;
  temperature_2m: number[] | undefined;
  apparent_temperature: number[] | undefined;
  rain: number[] | undefined;
  windspeed_10m: number[] | undefined;
  relativehumidity_2m: number[] | undefined;
  weathercode: number[] | undefined;
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
