"use client"
import { useEffect, useState } from 'react';
import Modal from '../cityModal/modal';
import { fetchWeatherData } from '@/utils/api';
import styles from './info.module.css'

const Info = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Delhi');

  useEffect(() => {
    const fetchWeatherForCity = async () => {
      const data = await fetchWeatherData(city);
      setWeather(data);
      console.log(data);
    };

    fetchWeatherForCity();
  }, [city]); 

  const handleCitySubmit = (cityValue) => {
    setCity(cityValue);
  };

  return (
    <div className={styles.info}>
      <Modal onSubmit={handleCitySubmit} />
      {weather && (
        <div className={styles.weatherInfo}>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Description: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Info;