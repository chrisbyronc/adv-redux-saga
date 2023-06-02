import { all, call, put, takeEvery } from 'redux-saga/effects';

// Fetch data from the weather API
const fetchApi = (latitude, longitude) => {
  return fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}`)
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

function* rootSaga() {
  try{
    yield all([
      call(weatherSaga)
    ])
  } catch(e) {
    console.error('An error has occurred:', e)
  }
}

function* fetchWeather(action) {
  const { latitude, longitude } = action.payload
  try {
    const weatherData = yield call(fetchApi, latitude, longitude)
    yield put({ type: 'FETCH_WEATHER_SUCCESS', payload: weatherData})
  } catch(e) {
    yield put({ type: 'FETCH_WEATHER_FAILURE', error: e.message})
  }
}

function* weatherSaga() {
  yield takeEvery('FETCH_WEATHER', fetchWeather)
}

export default rootSaga