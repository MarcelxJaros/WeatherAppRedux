export default interface IMyWeatherData {
  relativehumidity_2m: number[];
  weathercode: string[];
  temperature_2m: number[];
  apparent_temperature: number[];
  rain: number[];
  windspeed_10m: number[];
  date: Date;
}