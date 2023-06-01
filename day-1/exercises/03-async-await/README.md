# Async/Await exercises

## Exercise 1

Write a function that uses async/await to fetch data from a given URL and logs the data to the console
Here is an example API's, https://jsonplaceholder.typicode.com/posts

We will be using the placeholder API for blog posts later, if you want to use a different API for the time being, by all means

---

## Exercise 2

Update your fetchData function to take an additional parameter, `transformFunction`. After fetching the data, use this function to transform the data before logging it to the console. Transforming will be simple sanitation and mock transforming.

---

## Exercise 3

Update your fetchData function to handle errors. If an error occurs while fetching the data or transforming it, catch the error and log it to the console

---

## Exercise 4

Finally, update your fetchData function to return the transformed data instead of logging it. If an error occurs, it should return null

---

## Small project: Mini Weather App

#### Task 1: Implement the fetchWeather(city) function 
This function should make a fetch API call to the OpenMeteo API using async/await and return the JSON data. Don't forget to handle any possible errors with try/catch.

#### Task 2: Implement the displayWeather(city) function
This function should call fetchWeather(city) to get the weather data, then use the returned data to update the city's corresponding div with the weather information. Be sure to handle any potential errors and display a user-friendly message if the data can't be fetched.

#### Task 2: Implement the init() function
This function should iterate over the cities array and call displayWeather(city) for each city.
