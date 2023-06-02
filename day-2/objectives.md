What did we learn yesterday?

1. Generator functions
   1. allows us to pause and continue execution, using yields
   2. iterative function
   3. .next() allows us to continue execution
   4. yield
   5. for...of loop to handle indefinite yields
      1. while loop
   6. yields response { value: "", done: false }
      1. value comes back from the .next() or yield response
2. callback functions
   1. function passed as an argument to another function
   2. function passed in and invoked by another function
3. promises
   1. object with two callback functions, resolve and reject
   2. .then()
   3. .catch()
   4. we can string together promises in a chain
   5. didn't entirely learn, but became aware
      1. .all()
      2. .any()
      3. .race()
4. async/await
   1. runs and handles promises


Today's Objectives

1. Sagas
2. REST with sagas
3. error handling for saga
4. Saga features
   1. Sequential
   2. Parallel
   3. Composing Sagas
   4. Cancelling tasks
   5. Fork model
   6. Concurrency


Today's Agenda

1. Icebreaker
2. Recap
3. Installing and creating sagas
4. Rest calls
5. Error handling
6. Aspects of saga* (some stretch goal)
7. Q&A
