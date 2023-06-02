# Installing and Creating a Saga

For this exercise, we'll install Redux Saga and create a simple Saga that fetches some data from an API when an action is dispatched.

1. Install Redux Saga using npm:

```javascript
npm install redux-saga
```

---

2. Set up the middleware:

```javascript
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)
```

---

3. Create a Saga:

```javascript
import { call, put } from 'redux-saga/effects'

// Worker saga
function* fetchWeather(action) {
  try {
    const weatherData = yield call(fetchApi);
    yield put({ type: 'FETCH_WEATHER_SUCCESS', payload: weatherData });
  } catch (error) {
    yield put({ type: 'FETCH_WEATHER_FAILURE', error });
  }
}
```


Now, whenever a "USER_FETCH_REQUESTED" action is dispatched, the fetchUser saga will be triggered.