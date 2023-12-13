import axios from 'axios';
import dayjs from 'dayjs';
import getWeather from '../GetWeatherData';

jest.mock('axios'); // Mock the axios module

describe('getWeather', () => {
  it('fetches weather data correctly', async () => {
    // Mocked response data
    const mockedResponse = {
      'latitude': 48.16,
      'longitude': 17.119999,
      'generationtime_ms': 0.6819963455200195,
      'utc_offset_seconds': 0,
      'timezone': 'GMT',
      'timezone_abbreviation': 'GMT',
      'elevation': 159.0,
      'current_weather': {
        'temperature': 31.6,
        'windspeed': 6.5,
        'winddirection': 87,
        'weathercode': 2,
        'is_day': 1,
        'time': '2023-08-16T12:00',
      },
      'hourly_units': {
        'time': 'iso8601',
        'temperature_2m': '°C',
        'rain': 'mm',
        'showers': 'mm',
        'snowfall': 'cm',
        'windspeed_10m': 'km/h',
      },
      'hourly': {
        'time': [
          '2023-08-16T00:00',
          '2023-08-16T01:00',
          '2023-08-16T02:00',
          '2023-08-16T03:00',
          '2023-08-16T04:00',
          '2023-08-16T05:00',
          '2023-08-16T06:00',
          '2023-08-16T07:00',
          '2023-08-16T08:00',
          '2023-08-16T09:00',
          '2023-08-16T10:00',
          '2023-08-16T11:00',
          '2023-08-16T12:00',
          '2023-08-16T13:00',
          '2023-08-16T14:00',
          '2023-08-16T15:00',
          '2023-08-16T16:00',
          '2023-08-16T17:00',
          '2023-08-16T18:00',
          '2023-08-16T19:00',
          '2023-08-16T20:00',
          '2023-08-16T21:00',
          '2023-08-16T22:00',
          '2023-08-16T23:00',
        ],
        'temperature_2m': [
          23.5, 22.6, 22.0, 21.1, 20.4, 20.9, 22.0, 24.1, 26.1, 28.0, 29.6, 30.8, 31.6, 31.9, 31.2,
          30.5, 26.7, 24.1, 24.8, 24.0, 23.2, 22.8, 21.3, 21.3,
        ],
        'rain': [
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
        ],
        'showers': [
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
        ],
        'snowfall': [
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
        ],
        'windspeed_10m': [
          5.4, 3.6, 1.3, 2.1, 3.2, 3.5, 5.6, 5.4, 4.2, 6.6, 5.4, 5.4, 6.5, 9.8, 14.6, 5.2, 13.8,
          10.8, 5.1, 5.6, 6.2, 4.0, 9.8, 6.9,
        ],
      },
    };

    // Type the axios mock
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    // Set up axios mock to return the mocked response
    mockedAxios.get.mockResolvedValue(mockedResponse);

    // Define your input parameters
    const lat = 52.52;
    const lon = 13.41;
    const date = dayjs('2023-08-16'); // Use a specific date for testing

    // Call the function and await the response
    const result = await getWeather({ lat, lon, date });

    // Assertions
    expect(result).toEqual(mockedResponse); // Check if the response matches the mocked data
    expect(mockedAxios.get).toHaveBeenCalledWith('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude: lat,
        longitude: lon,
        hourly:
          'temperature_2m,apparent_temperature,rain,showers,snowfall,windspeed_10m,weathercode,relativehumidity_2m',
        current_weather: true,
        start_date: date.format('YYYY-MM-DD'),
        end_date: date.format('YYYY-MM-DD'),
      },
    });
  });
});
