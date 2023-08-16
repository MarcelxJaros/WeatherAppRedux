export default interface IMyWeatherData {
  city: string;
  relativehumidity_2m: number[];
  weathercode: string[];
  temperature_2m: number[];
  apparent_temperature: number[];
  rain: number[];
  windspeed_10m: number[];
  date: Date;
}
