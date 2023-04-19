type WeatherIconMap = {
  [code: string]: string[];
};

const weatherIconMap: WeatherIconMap = {
  0: ["01d", "01n"],
  1: ["02d", "02n"],
  2: ["04d", "04n"],
  3: ["04d", "04n"],
  45: ["50d", "50n"],
  51: ["09d", "09n"],
  53: ["10d", "10n"],
  55: ["11d", "11n"],
  56: ["13d", "13n"],
  57: ["13d", "13n"],
  61: ["10d", "10n"],
  63: ["09d", "09n"],
  65: ["09d", "09n"],
  66: ["13d", "13n"],
  67: ["13d", "13n"],
  71: ["13d", "13n"],
  73: ["13d", "13n"],
  75: ["13d", "13n"],
  77: ["13d", "13n"],
  80: ["09d", "09n"],
  81: ["10d", "10n"],
  82: ["11d", "11n"],
  85: ["13d", "13n"],
  86: ["13d", "13n"],
  95: ["11d", "11n"],
  96: ["11d", "11n"],
  99: ["11d", "11n"],
};

function getOpenWeatherIcon(code: string) {
  const iconCodes = weatherIconMap[code];
  if (!iconCodes) {
    return null;
  }
  return iconCodes[0];
}

export default getOpenWeatherIcon;