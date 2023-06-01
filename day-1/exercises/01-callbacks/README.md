# Callback Exercises

## Exercise 1

Write a function that takes two numbers and a callback function as arguments and invokes the callback with the result of the sum of the two numbers

---

## Exercise 2

Write a function that takes a number and a callback function. The function checks if the number is even or odd and invokes the callback function with true if the number is even, false otherwise

---

## Exercise 3

Create a function called 'doHomework' that takes a subject and a callback. It logs "Starting my 'subject' homework", waits 2 seconds and then calls the callback function. Test this function with a callback that logs "Finished homework"

---

## Exercise 4

Write a function that emulates the array map function. The function takes an array and a callback as arguments. It returns a new array where every element is the result of the callback function

---

## Exercise 5

Write a function called 'downloadFile' that takes two arguments: a URL and a callback function. The function should log a message saying that the download has started, wait for 3 seconds, and then call the callback function with the string: "Download finished: " followed by the URL

---

<br>

# Bonus Exercises

## Bonus Exercise 1

Create a function that emulates the behavior of Promise.all using callbacks. The function should take an array of asynchronous functions (that use callbacks), and a final callback. It should execute all the asynchronous functions in parallel, and once all are complete, call the final callback with an array of all results

---

## Bonus Exercise 2

Implement a debounce function which takes a function and a delay as arguments and returns a debounced version of the original function that will postpone its execution until after delay milliseconds have passed since the last time it was invoked

---

## Bonus Exercise 3

Implement a simple event emitter class. The class should have methods on, off, and emit. The on method should register a callback for an event. The off method should remove a callback. The emit method should call all callbacks associated with an event.