import { all, call, put, fork, take, cancel, takeEvery } from 'redux-saga/effects';

// Fetch data from the weather API - current data
const fetchCurrentApi = (latitude, longitude) => {
  return fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&forecast_days=1&start_date=2023-06-02&end_date=2023-06-02`
    ).then(response => {
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

const fetchForecast7Api = (latitude, longitude) => {
  return fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&start_date=2023-06-02&end_date=2023-06-09`
    ).then(response => {
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

function* fetchCurrentWeather(action) {
  const { latitude, longitude } = action.payload
  const weatherCurrentData = yield call(fetchCurrentApi, latitude, longitude)
  yield put({ type: 'FETCH_CURRENT_WEATHER_SUCCESS', payload: weatherCurrentData})
}

function* fetchForecastWeather(action) {
  const { latitude, longitude } = action.payload
  const weatherForecastData = yield call(fetchForecast7Api, latitude, longitude)
  yield put({ type: 'FETCH_FORECAST_WEATHER_SUCCESS', payload: weatherForecastData})
}

function* weatherSaga() {
  while(true) {
    const action = yield take('FETCH_WEATHER')
    const currentWeatherTask = yield fork(fetchCurrentWeather, action)
    const forecastWeatherTask = yield fork(fetchForecastWeather, action)

    yield take('STOP_FETCHING')
    yield cancel(currentWeatherTask)
    yield cancel(forecastWeatherTask)
  }


  //For running concurrent individual sagas
  // yield all([
  //   takeEvery('FETCH_CURRENT_WEATHER', fetchCurrentWeather),
  //   takeEvery('FETCH_FORECAST_WEATHER', fetchForecastWeather),
  // ])
}

export default rootSaga