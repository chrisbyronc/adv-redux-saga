import { createStore, applyMiddleware } from 'redux';
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

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

// Run the saga

export default store;
