import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  

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
