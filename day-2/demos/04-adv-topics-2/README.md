---
marp: true
---

# Fork Model 

You can perform multiple sagas concurrently.
You can use the `fork` effect creator for this purpose.

The rootSaga will be completed as soon as saga1 and saga2 are started, not finished.

```javascript
function* saga1() {
  //...
}

function* saga2() {
  //...
}

function* rootSaga() {
  yield fork(saga1);
  yield fork(saga2);
}
```

---

# Concurrency patterns

Two common patterns are all and race

They involve handling multiple tasks at the same time

```javascript
function* rootSaga() {
  // run tasks in parallel
  yield all([call(task1), call(task2)]);
  // start tasks concurrently and finish when the first one finishes
  yield race([call(task1), call(task2)]);
}
```

In the all pattern, all tasks are started at the same time and the saga waits for all of them to finish.
In the race pattern, all tasks are started at the same time, but the saga finishes as soon as the first task finishes.

---

# Channels

We are able to communicate between two different sagas

```javascript
import { channel } from 'redux-saga';
import { take, put } from 'redux-saga/effects';

function* watchForActions() {
  const chan = yield call(channel);

  yield takeEvery(chan, function* (action) {
    // handle action
  });

  while (true) {
    const action = yield take('ACTION_TYPE');
    yield put(chan, action);
  }
}
```

In this example, the watchForActions saga creates a channel and sets up a takeEvery on the channel.
Then it starts an infinite loop where it waits for 'ACTION_TYPE' actions and puts them into the channel.

