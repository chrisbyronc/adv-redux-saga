import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import weatherSaga from './sagas';

// Initial state
const initialState = {
  weather: {},
  forecastWeather: {},
  loading: false,
  error: null,
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    // Handle actions here
    case 'FETCH_CURRENT_WEATHER_SUCCESS':
      return {
        ...state,
        error: '',
        weather: action.payload
      }
    case 'FETCH_FORECAST_WEATHER_SUCCESS':
      return {
        ...state,
        error: '',
        forecastWeather: action.payload
      }
    case 'FETCH_WEATHER_FAILURE':
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}

const sagaMiddleware = createSagaMiddleware({
    onError: (error, { sagaStack }) => {
      console.log('Uncaught error in saga:', error, sagaStack);
    },
  }
);

// Create store
const store = configureStore({
  reducer,
  middleware: [sagaMiddleware]
});

// Run the saga
sagaMiddleware.run(weatherSaga)

export default store;
