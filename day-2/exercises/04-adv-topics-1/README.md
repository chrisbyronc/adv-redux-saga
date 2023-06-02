### Sequential Sagas

**Exercise 1:** Modify your `weatherSaga` to fetch current weather data and then fetch the forecast for the next 7 days, in that order. Make sure the second API call waits until the first one is completed before it starts. 

**Exercise 2:** Extend Exercise 1 by adding a third API call to fetch historical weather data for the past 7 days, after the current weather data and forecast have been fetched. Again, this should happen sequentially.

**Bonus Exercise:** Handle errors gracefully. If an error occurs during the current weather data fetch, don't attempt to fetch the forecast or historical data. If an error occurs during the forecast fetch, still attempt to fetch the historical data.

### Parallel Sagas

**Exercise 1:** Modify your `weatherSaga` to fetch current weather data and the forecast for the next 7 days in parallel. 

**Exercise 2:** Extend Exercise 1 by adding a third API call to fetch historical weather data for the past 7 days. All three API calls should happen in parallel.

**Bonus Exercise:** Handle errors gracefully. If an error occurs during one fetch, the other fetches should still complete. 

### Composing Sagas

**Exercise 1:** Break down your `weatherSaga` into smaller sagas. One saga should handle fetching current weather data, another should handle fetching the forecast, and another should handle fetching historical data. These sagas should then be composed into the `weatherSaga` using `yield all` or `yield race`.

**Exercise 2:** Add a new saga to your `weatherSaga` that waits for a 'STOP_FETCHING' action and then cancels all active fetches.

**Bonus Exercise:** Handle cancellation in a graceful way. When a fetch is cancelled, it should dispatch a 'FETCH_CANCELLED' action with a useful message.

### Cancelling Tasks

**Exercise 1:** Add a 'STOP_FETCHING' button to your component that dispatches a 'STOP_FETCHING' action when clicked. Your saga should listen for this action and cancel all active fetches when it's dispatched.

**Exercise 2:** Add a timeout to your sagas. If a fetch takes longer than 10 seconds, it should be automatically cancelled.

**Bonus Exercise:** Extend the timeout from Exercise 2 by allowing the user to specify the timeout duration.

Remember to replace `{latitude}` and `{longitude}` in your API requests with actual values.