import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';

const App = () => (
    <div>
        <h1>Weather Forecast App</h1>
        <WeatherForm />
        <WeatherDisplay />
    </div>
);

export default App;