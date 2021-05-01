import getWeatherData from '../../WeatherAPI';
import './Location.css';

function Location({
  element,
  initialState,
  onHandleGeoSuccess,
  onHandleGeoError,
}) {
  this.state = initialState;

  this.target = document.createElement('div');
  this.target.className = 'weather';

  this.handleSuccess = onHandleGeoSuccess;
  this.handleError = onHandleGeoError;

  element.appendChild(this.target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.askForLocation = () => {
    navigator.geolocation.getCurrentPosition(
      this.handleSuccess,
      this.handleError
    );
  };

  this.render = () => {
    const { isCurrentLocation: userLocation } = this.state;
    if (!userLocation) {
      this.askForLocation();
    } else {
      const res = getWeatherData();
      res
        .then((respond) => respond.json())
        .then((data) => {
          const {
            weather: [{ main: condition }],
          } = data;
          const {
            main: { temp: temperature },
          } = data;
          const {
            main: { humidity },
          } = data;
          const { name: place } = data;

          this.target.innerHTML = `오늘 날씨 : ${
            condition.includes('Cloud')
              ? '☁️ ' + condition
              : condition.includes('Clear')
              ? '☀️ ' + condition
              : condition.includes('Rain')
              ? '🌧 ' + condition
              : condition.includes('Snow')
              ? '❄️ ' + condition
              : condition
          } 현재 위치 : ${place} 현재 온도 : ${temperature}℃ 현재 습도 : ${humidity}%`;
        })
        .catch((e) => console.log(e));
    }
  };

  this.render();
}

export default Location;
