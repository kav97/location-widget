import { useState, useEffect } from "react";
import './App.scss';
import WeeklyForecast from "./containers/WeeklyForecast/WeeklyForecast";
import Header from "./containers/Header/Header";

const App = () => {

  const [coordinates, setCoordinates] = useState({});
  const [weather, setWeather] = useState({});

  const key = process.env.REACT_APP_KEY;

  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCoordinates({ latitude, longitude });
    });
  };

  const getWeather = async ( key, latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${latitude},${longitude}&days=7`,
      );
      if (!response.ok) {
        throw new Error(response.status + " error with request");
      }
      const weatherApiData = await response.json();
      setWeather(weatherApiData);
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    getGeolocation();
  }, []);

  useEffect(() => {
    coordinates.longitude &&
      getWeather(
        key,
        coordinates.latitude,
        coordinates.longitude
      );
  }, [key, coordinates]);

  console.log(weather);
  return (
    <div className="app">
       {weather.location ? (
        <>
          <Header location={weather.location} />
          <WeeklyForecast
            forecastData={weather.forecast}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
