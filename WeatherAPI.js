import config from './config';
import { locationInformation } from './LocalAPI';

const KEY = config.API_KEY;

function getWeatherData() {
  const { latitude, longitude } = locationInformation.getLocation();
  if (latitude && longitude) {
    const res = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}&units=metric`
    );
    return res;
  }
  return null;
}

export default getWeatherData;
