export default interface IWeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: string;
    temperature_2m: string;
  };
  hourly: {
    weathercode: any;
    relativehumidity_2m: any;
    windspeed_10m: any;
    rain: any;
    apparent_temperature: any;
    time: string[];
    temperature_2m: number[];
  };
}