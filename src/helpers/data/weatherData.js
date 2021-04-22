import axios from 'axios';
import firebaseConfig from '../apiKeys';

const getWeatherData = (city) => new Promise((resolve, reject) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${firebaseConfig.apiKey}&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});

export default getWeatherData;
