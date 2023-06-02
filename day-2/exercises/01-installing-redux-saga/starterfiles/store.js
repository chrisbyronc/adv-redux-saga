import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import weatherSaga from './sagas';

const initialState = {
  weather: null,
  error: null
};

// Reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_WEATHER_SUCCESS':
      return {
        ...state,
        weather: action.payload,
        error: null
      };
    case 'FETCH_WEATHER_FAILURE':
      return {
        ...state,
        weather: null,
        error: action.error
      };
    default:
      return state;
  }
}

const sagaMiddleware = createSagaMiddleware();

// Create store
const store = configureStore({
  reducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(weatherSaga);

export default store;
