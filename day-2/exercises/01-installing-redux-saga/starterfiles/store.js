import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

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

export default store;
