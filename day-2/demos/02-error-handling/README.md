---
marp: true
---

# What is Error Handling?

---

# Why do we need Error Handling?

---

# Error Handling in Redux Saga


* Sagas can catch errors in called functions by wrapping them in a try/catch block.
  
* If an error is thrown in the called function, the catch block will be executed.

<br>

```javascript
function* someSaga() {
  try {
    const data = yield call(Api.fetch, '/data');
    yield put({ type: 'DATA_FETCH_SUCCEEDED', data });
  } catch (error) {
    yield put({ type: 'DATA_FETCH_FAILED', error });
  }
}
```

---

# What is Error Propagation?

---

# Error Propagation

* Errors in a saga will bubble up to their parent saga.
  
* If not caught, they will cause all parent sagas to be cancelled.
  
* Ultimately, if not caught in any saga, they will reach the middleware and cause the application to crash.



```javascript
function* parentSaga() {
  try {
    yield call(childSaga);
  } catch (error) {
    console.log('Caught error from child saga:', error);
  }
}
```

--- 

# onError Hook

* You can provide an `onError` hook to the middleware during configuration.
  
* This function will be called for uncaught errors that reach the middleware.

```javascript
const sagaMiddleware = createSagaMiddleware({
  onError: (error, { sagaStack }) => {
    console.log('Uncaught error in saga:', error, sagaStack);
  },
});
```

---

# What are some error handling best practices?

---

# Best Practices

* Always wrap saga calls in try/catch to handle potential errors.
* Use the `onError` hook for uncaught errors.
* Dispatch an action when an error occurs to allow your reducers to handle the error and update the state.