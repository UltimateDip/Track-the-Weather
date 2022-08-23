import React, { useState } from 'react'
import axios from 'axios';

import Header from './components/Header';
import WeatherCard from './components/WeatherCard';

function App() {
  const key = process.env.REACT_APP_API_KEY;
  console.log("Need to ther api key manually for now");
  const [places, setPlaces] = useState([]);

  function addPlace(cityName) {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + key + "&units=metric";


    axios.get(url).then((response) => {
      // data we get from api
      // console.log(response.data);

      setPlaces(prev => [...prev, {
        name: response.data.name,
        temp: response.data.main.temp,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        windSpeed: response.data.wind.speed
      }]);
    })
  }

  function deletePlace(id) {
    setPlaces(prev => {
      return prev.filter(function (ele, idx) {
        return idx !== id;
      })
    })
  }

  return (
    <div>
      <Header addPlace={addPlace} />
      {places.length > 0 ? places.map((place, idx) => {
        return <WeatherCard
          key={idx}
          place={place}
          id={idx}
          deletePlace={deletePlace} />
      }) : null}
    </div>
  );
}

export default App;