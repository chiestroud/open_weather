import React, { useState } from 'react';
import { Button } from 'reactstrap';
import getWeatherData from '../helpers/data/weatherData';
import './Weather.scss';

function Weather() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);

  async function getWeather() {
    await getWeatherData(city)
      .then((response) => setData(response));
  }

  return (
    <div className='Weather'>
      <div className="hiddenDiv">
        {data
          ? <div className="weatherContainer">
            <h1>{data.name}</h1>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="img" />
            <p className="center">{data.weather[0].description}</p>
            <h1>{data.main.temp} degrees</h1>
          </div>
          : null}
      </div>
      <div className="formContainer">
        <form onSubmit={(e) => {
          e.preventDefault();
          getWeather();
        }}>
          <h2>Watch The Weather</h2>
          <input
            type="text"
            placeholder="ZIP Code, City, etc"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button className="mt-2" color="success" size="lg" type="submit">Submit</Button>
          </form>
        </div>
    </div>
  );
}

export default Weather;
