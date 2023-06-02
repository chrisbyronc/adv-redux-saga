import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch({ type: 'FETCH_WEATHER' });
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Weather App</h1>
    </div>
  );
}

export default App;
