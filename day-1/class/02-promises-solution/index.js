const fetch = require('node-fetch')

//In class demo

let examplePromise = new Promise((resolve, reject) => {
  let condition = true; // this can be the result of something asynchronous like a network request
  if(condition) {
      resolve("Promise is resolved.");
  } else {
      reject("Promise is rejected.");
  }
});

// examplePromise
//   .then(res => console.log(res))
//   .catch(err => console.log(err));


//Exercise 1

//Write a function that creates and returns a promise which resolves to the string "Hello, World!" after 2 seconds

function greetingPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, World!")
    }, 5000) 
    //actual error
  })
}

// greetingPromise().then(res => console.log(res))
// console.log('Later?')

//Exercise 2

//Create a function that fetches data from a URL using the fetch API, which returns a promise. Use the `.then()` syntax to handle the response


function fetchData(url) {
  return fetch(url)
            .then(res => {
              if(!res) {
                throw new Error("Error fetching url")
              }
              return res.json();
            })
            .then(data => data)
            .catch(error => {
              console.log("Theres been a problem", error)
            })
}

// fetchData('http://jsonplaceholder.typicode.com/posts/1').then(data => console.log(data))


//Mini Project - Task 1

//You are to write a function getWeather(city) that makes a fetch request to the Open-Meteo API to get the weather data for a specific city.

async function getWeather(city) {
  const response = await fetch(`http://api.open-meteo.com/v1/forecast?city=${city}`);
  const weatherData = await response.json();

  if (response.ok) {
      return weatherData;
  } else {
      throw new Error(weatherData.message);
  }
}

// usage:
getWeather('New York')
  .then(data => console.log(data))
  .catch(err => console.error(err));
