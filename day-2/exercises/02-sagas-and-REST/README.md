# Weather Forecast App Project

In this project, you will be building a weather forecast application using Redux Saga and the OpenWeatherMap API. The application will allow users to search for a city and view the current weather and 5-day forecast.

StarterCode

```npm i node-fetch```

```javascript
import { call, put, takeEvery } from 'redux-saga/effects';

// Fetch data from the weather API
const fetchApi = () => {
  return fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Something went wrong on api server!');
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error;
    });
};
```

## Task 1: Set up your Redux and Saga middleware

Install and setup Redux-Saga. This includes creating your Redux store, applying the Saga middleware, and running your root Saga.

---

## Task 2: Create your first saga

Create a Saga that fetches weather data when a certain action is dispatched. This saga should:

* Take a 'FETCH_WEATHER' action
* Make a request to the Open-Meteo API
* On success, dispatch a 'FETCH_WEATHER_SUCCESS' action with the received data
* On failure, dispatch a 'FETCH_WEATHER_FAILURE' action with the error

---

## Task 3: Connect your component to Redux and dispatch the action

Create a weather component, connect it to your Redux store and dispatch the 'FETCH_WEATHER' action when the component mounts.

---

## Task 4: Display the data

Update your weather component to display the fetched data when available, show a loading indicator while the data is being fetched and an error message if the fetch fails.

---

## Task 5: Test your error handling

Introduce an error (e.g. by changing the API URL to a wrong one) and ensure that your application handles it gracefully.

---

## Bonus Task 1: Implement a refresh feature

Implement a button in your weather component that when clicked, refreshes the data by dispatching the 'FETCH_WEATHER' action again.

---

## Bonus Task 2: Implement a search feature

Implement a search feature that allows the user to fetch weather data for different locations. This involves updating your 'FETCH_WEATHER' action to take a location parameter, updating your saga to use this parameter in the API request and adding a form to your component that dispatches the action with the entered location when submitted.

---

### Bonus Task 3: Add Weather Detail View

Create a detailed view for each day of the 5-day forecast. When a day is clicked, the application should display a more detailed breakdown of the weather for that day, including the weather description, humidity, wind speed, etc.

To achieve this, you might need to update your sagas, reducer, and components.

In your saga, extract more detailed data from the forecast API response and include it in the FETCH_FORECAST_WEATHER_SUCCESS action.

In your reducer, add a new piece of state for the selected day's detailed weather. Update this state when the FETCH_FORECAST_WEATHER_SUCCESS action is dispatched.

In your component, add interactivity to each day of the forecast. When a day is clicked, dispatch an action to update the selected day in the state. Display the detailed weather for the selected day in a separate section of your component.