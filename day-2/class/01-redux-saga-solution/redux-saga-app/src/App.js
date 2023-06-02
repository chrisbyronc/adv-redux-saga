import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather);
  const errorMessage = useSelector(state => state.error);
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const handleLatitudeChange = (event) => {
    setLatitude(event.target.value)
  }

  const handleLongitudeChange = (event) => {
    setLongitude(event.target.value)
  }

  const handleFetch = () => {
    dispatch({
      type: 'FETCH_WEATHER',
      payload: {
        latitude: latitude,
        longitude: longitude
      }
    });
  }

  const stopFetching = () => {
    dispatch({
      type: 'STOP_FETCHING'
    });
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <label>
        latitude
        <input type="text" value={latitude} onChange={handleLatitudeChange}></input>
      </label>
      <label>
        longitude
        <input type="text" value={longitude} onChange={handleLongitudeChange}></input>
      </label>
      <button onClick={handleFetch}>Fetch Weather</button>
      <button onClick={stopFetching}>Stop the Fetch!</button>
      {weatherData && <div>{JSON.stringify(weatherData)}</div>}
      {errorMessage && <div>Error: {JSON.stringify(errorMessage)}</div>}
    </div>
  );
}

export default App;
