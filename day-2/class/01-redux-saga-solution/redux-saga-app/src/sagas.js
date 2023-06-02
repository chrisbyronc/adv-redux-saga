import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchWeather(action) {
  try {
    const response = yield call(axios.get, `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`);
    yield put({ type: 'FETCH_WEATHER_SUCCESS', payload: response.data });
  } catch (e) {
    yield put({ type: 'FETCH_WEATHER_FAILURE', message: e.message });
  }
}

export function* weatherSaga() {
  yield takeEvery('FETCH_WEATHER', fetchWeather);
}