// src/components/WeatherCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

function WeatherCard({ weatherData }) {
  if (!weatherData) return null;

  const { name, weather, main, wind } = weatherData;
  
  // Set colors based on the weather condition
  let iconColor = '';
  if (weather[0].main === 'Clear') {
    iconColor = 'yellow';  // Sun color
  } else if (weather[0].main === 'Clouds') {
    iconColor = 'gray';    // Cloudy color
  } else {
    iconColor = 'skyblue'; // Default color (for other conditions)
  }

  return (
    <div className="card mx-auto" style={{ maxWidth: '400px' }}>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <h4 className="card-subtitle mb-2 text-muted">
          {weather[0].description}
        </h4>
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
          style={{ filter: `hue-rotate(${iconColor === 'yellow' ? 60 : iconColor === 'gray' ? 0 : 190}deg)` }}
        />
        <h3 className="mt-3">{Math.round(main.temp)}°C</h3>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} m/s</p>
      </div>
    </div>
  );
}

WeatherCard.propTypes = {
  weatherData: PropTypes.object,
};

export default WeatherCard;
