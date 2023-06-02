import React from 'react';
import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
    const weather = useSelector(state => state.weather);
    const error = useSelector(state => state.error);

    if (error) {
        return <p>{error}</p>;
    }
    
    return (
        <div>
            {/* You can modify this part to display the data as you wish. */}
            <p>Temperature: {weather?.temperature}</p>
            <p>Weather: {weather?.weather}</p>
        </div>
    );
};

export default WeatherDisplay;