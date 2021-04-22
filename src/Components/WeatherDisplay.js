import React from 'react';

function WeatherDisplay(props) {
  // eslint-disable-next-line react/prop-types
  const { temp, desc, name } = props;
  return (
    <div className="WeatherDisplay">
      <h1>{name}</h1>
      <h1>{temp}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default WeatherDisplay;
