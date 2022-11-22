import React, { useState, useEffect } from "react";
import "./App.css";
import { usePosition } from "use-position";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();
  console.log(latitude);
  console.log(longitude);

  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_DATA;
    console.log(key);
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
      );
      console.log(data);
    } catch (error) {
      alert("!!!!!");
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div className="App">
      <p>Look</p>
    </div>
  );
}

export default App;
