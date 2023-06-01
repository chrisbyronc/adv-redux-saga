# Practicing Promises

## Exercise 1

Write a function that creates and returns a promise which resolves to the string "Hello, World!" after 2 seconds

---

## Exercise 2

Create a function that fetches data from a URL using the fetch API, which returns a promise. Use the `.then()` syntax to handle the response

---

## Exercise 3

Modify the fetchData function to return a promise that resolves to the fetched data

---

## Exercise 4

Add error handling to the fetchData function. It should catch any errors and log them to the console

---

## Practice project: Mini Weather App

#### Task 1: Fetch Weather Data by City Name
You are to write a function getWeather(city) that makes a fetch request to the Open-Meteo API to get the weather data for a specific city.

#### Task 2: Chain Promises to Fetch and Display Data
After fetching the weather data in the first task, you'll need to extract the data from the response, convert it to JSON, and then display it on the page. Make sure to chain these operations using promises.

#### Task 3: Fetch and Display Weather Data for Multiple Cities
Now, you are to modify your getWeather(city) function to fetch and display weather data for multiple cities. You'll need to use Promise.all() to wait for all the fetch requests to complete before displaying the data.

------------

<br>

## Exercise Promise.all()

`Promise.all()` is used when we have multiple promises and we want to wait until all of them are finished
Write a function that fetches data from three different URLs using the fetch API and logs the result once all of them are finished

---

## Exercise Promise.any()

`Promise.any()` takes an array of promises and resolves as soon as the first promise in the array resolves, and it rejects if all the promises reject
Write a function that simulates a race between two runners by using `Promise.any()`. Each runner will "finish the race" after a random amount of time between 1 and 5 seconds. The function should log the name of the runner who finished first

---

## Exercise Promise.race()

`Promise.race()` is similar to `Promise.any()` in that it resolves as soon as the first promise resolves, but it also rejects as soon as the first promise rejects
Write a function that fetches data from a URL and logs the result. However, if the fetch operation takes more than 2 seconds, it should log an error message instead

---