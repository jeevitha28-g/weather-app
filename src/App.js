// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '37cfa8f09a8bd69fb7c233b77d1fe084'; // <-- Put your OpenWeatherMap API key here

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setWeatherData(null);
      setError('City not found. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">🌤️ Weather App</h1>

      <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
