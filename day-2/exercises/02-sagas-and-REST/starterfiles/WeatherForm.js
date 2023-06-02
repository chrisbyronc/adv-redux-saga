import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const WeatherForm = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'FETCH_WEATHER_REQUEST', payload: city });
        setCity('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={city} 
                onChange={e => setCity(e.target.value)} 
                placeholder="Enter city name" 
                required 
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default WeatherForm;
