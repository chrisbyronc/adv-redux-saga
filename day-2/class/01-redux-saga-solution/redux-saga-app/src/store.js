import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import weatherSaga from './sagas';

// Initial state
const initialState = {
  weather: {},
  loading: false,
  error: null,
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    // Handle actions here
    case 'FETCH_WEATHER_SUCCESS':
      console.log(action.payload)
      return {
        ...state,
        weather: action.payload
      }
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

// Run the saga
sagaMiddleware.run(weatherSaga)

export default store;
