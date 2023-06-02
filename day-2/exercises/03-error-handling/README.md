# Error Handling Practice

## **Exercise 1: Catching Errors in Saga**

Modify the saga used to fetch the forecast data to handle any potential errors from the API. If an error occurs, dispatch an action with the error message.

---

## **Exercise 2: Error Action**

Create a new action creator `fetchForecastError` that accepts an error message as a parameter. Modify your reducer to handle this action type and store the error message in the state.

---

## **Exercise 3: Displaying Error**

In your React component, read the error message from the state and display it to the user when an error occurs.

---

## **Exercise 4: Clearing Error**

Create a new action and saga that clears the error message from the state when a new forecast fetch is initiated.

---

## **Exercise 5: Error Propagation**

Create a parent saga that calls your forecast fetch saga. Add error handling to the parent saga and log any errors it catches.

-- 

## **Exercise 6: onError Hook**

Add an onError hook to your saga middleware configuration. Log any uncaught errors that reach the middleware.

---

## **Hard Exercise 1: Retry Failed Requests**

Enhance your error handling saga to retry the failed API request. After three failed attempts, it should stop retrying and dispatch the error action.

---

## **Hard Exercise 2: Network Error Handling**

Improve your saga to differentiate between network errors and other types of errors. For network errors, dispatch a different action that sets a "network error" flag in your state.

---
Here's the basic starter code, focusing on the saga part of Exercise 1 and 2:

```javascript
function* fetchForecastSaga() {
  try {
    const data = yield call(fetchForecast);
    yield put({ type: 'FETCH_FORECAST_SUCCESS', data });
  } catch (error) {
    yield put({ type: 'FETCH_FORECAST_ERROR', error: error.message });
  }
}

function* watchFetchForecastSaga() {
  yield takeEvery('FETCH_FORECAST_REQUEST', fetchForecastSaga);
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FORECAST_SUCCESS':
      return { ...state, forecast: action.data, error: null };
    case 'FETCH_FORECAST_ERROR':
      return { ...state, error: action.error };
    default:
      return state;
  }
};
```


