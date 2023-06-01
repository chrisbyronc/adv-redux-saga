Today's Objectives

1. Async/Await
2. Callbacks
3. Promises
4. Generators
   1. yield
5. Iterators
6. Stretch goal - Start of redux-saga


Agenda Today

1. Intros
2. Overview
3. Overview of redux-saga
4. Break
5. Asynchronous programming, callbacks
6. Async/await
7. Lunch
8. Promises
9. Generators
10. Generators and Promises
11. Q&A


What did you learn today?

1. Generators
   1. yield
   2. .next()
      1. returns an object with value and done properties
   3. .throw()
   4. yields after throw, not good
   5. can pass generators to generators
      1. yield* for composing
2. Promise
   1. resolve/reject arguments
   2. .then() handles resolve
   3. .catch() from reject or error
   4. instantiate with new
3. async/await
   1. handles promises
4. callback functions
5. fetch()