---
marp: true
---

# Sequential Sagas

- Sagas are executed sequentially by default.
- The `yield` keyword waits for the current effect to finish before moving to the next.

```javascript
function* sequentialSaga() {
  const data1 = yield call(fetchData, '/url1');
  const data2 = yield call(fetchData, '/url2');
  yield put({ type: 'DATA_FETCHED', payload: { data1, data2 } });
}
```

---

# Parallel Sagas

- `all` effect allows multiple sagas to be started at the same time.
- It waits for all of them to complete and collects their results.

```javascript
function* parallelSaga() {
  const [data1, data2] = yield all([
    call(fetchData, '/url1'),
    call(fetchData, '/url2'),
  ]);
  yield put({ type: 'DATA_FETCHED', payload: { data1, data2 } });
}
```

---


# Composing Sagas

- Sagas can be composed to create more complex asynchronous flows.
- You can `call` other sagas from a saga.

```javascript
function* fetchUserSaga() {
  const user = yield call(fetchUser);
  yield put({ type: 'USER_FETCHED', user });
}

function* fetchPostsSaga() {
  const posts = yield call(fetchPosts);
  yield put({ type: 'POSTS_FETCHED', posts });
}

function* composedSaga() {
  yield call(fetchUserSaga);
  yield call(fetchPostsSaga);
}
```


---

# Cancelling Tasks


- Sagas can be cancelled using the `cancel` effect.
- This is useful to prevent unnecessary operations when an action occurs.

```javascript
import { delay, race, call, take, cancel } from 'redux-saga/effects';

function* fetchSaga() {
  try {
    yield delay(5000); // simulate a long request
    yield put({ type: 'FETCH_SUCCESS' });
  } finally {
    if (yield cancelled()) {
      // clean up if this saga was cancelled
    }
  }
}

function* watchSaga() {
  const task = yield fork(fetchSaga);
  yield take('CANCEL_FETCH');
  yield cancel(task);
}
```
