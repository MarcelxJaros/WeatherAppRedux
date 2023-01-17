interface HourlyUnits {
  time: string;
  temperature_2m: string;
}
interface Hourly {
  time: string[];
  temperature_2m: number[];
}
export default interface IWeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: HourlyUnits;
  hourly: Hourly;
}