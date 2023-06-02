---
marp: true
---

# What is Redux Saga?

---

# What is Redux Saga

Redux Saga is a library used to handle side effects in your Redux app. These might be asynchronous operations like fetching data, or even synchronous operations like accessing the browser cache

---

# What is the Redux Pattern?

---

# Redux Pattern

The Redux state management pattern revolves around a few key concepts:

1. **Store**: This is the central repository of all state in a Redux application. There is typically only one store in a Redux application.

2. **Actions**: Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. Actions are plain JavaScript objects, and they must have a type property that indicates the type of action being performed. They often also include a payload of data.

3. **Reducers**: Reducers specify how the application's state changes in response to actions sent to the store. Actions describe the fact that something happened, but don't specify how the application's state changes in response. This is the job of reducers.

---

# Saga and Generators

Redux Saga uses ES6 features like Generators to make asynchronous flows easy to read, write and test

---

# Saga and Generators - cont.

```javascript
// saga.js
import { takeEvery, call } from 'redux-saga/effects'

// Worker saga
function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

// Watcher saga
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
```

---

# What are Side Effects?

---

# Side Effects

Side effects are any changes or operations that affect the outside scope of the function, typically these are operations that are asynchronous or that mutate data

---

# Side Effect Examples

1. Data fetching
2. Caching
3. Accessing the browser APIs
4. Computationally expensive tasks
5. Synchronizing multiple async operations
6. Debouncing or throttling API calls
7. Chaining asynchronous actions
8. Error handling
9. Executing conditional asynchronous logic


---

# Installing Redux Saga

To start using Redux Saga, you first need to add it to your project
<br>

```javascript
npm install redux-saga
```

---

# Setting Up the Middleware

The Redux Saga middleware needs to be added to the Redux Store


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

# Creating a Saga

A Saga in Redux Saga is like a separate thread in your application that solely handles side effects
<br>

Sagas are implemented as Generator functions that yield objects to the redux-saga middleware

---

# Creating a Saga

The middleware inspects these yielded objects and then decides what to do
<br>

```javascript
function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}
```

---

# Running Sagas

After we define your Sagas, you can start them by passing them to the sagaMiddleware.run() method

```javascript
sagaMiddleware.run(mySaga)
```