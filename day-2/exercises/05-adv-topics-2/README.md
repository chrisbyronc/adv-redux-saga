### Fork Model Exercises

**Exercise 1**

Modify your weather forecast application to fetch current weather and forecast data in parallel using the fork effect.

**Exercise 2**

Create a new saga in your application that fetches data for multiple cities in parallel using the fork effect. 

**Hard Exercise**

Implement a saga that fetches current weather data and forecast data in parallel for multiple cities using the fork effect. 

---

### Concurrency Pattern Exercises

**Exercise 1**

Implement a saga in your application that uses the `all` effect to wait for the current weather and forecast data to be fetched before rendering the weather information.

**Exercise 2**

Create a saga that uses the `race` effect to fetch the current weather data and the forecast data, rendering whichever completes first.

**Hard Exercise**

Develop a saga that fetches data for multiple cities using the `race` effect, displaying the weather information for the city whose data is fetched first.

---

### Channel Exercises

**Exercise 1**

Implement a saga in your application that uses a channel to queue incoming actions that request weather data fetches.

**Exercise 2**

Create a saga that consumes the actions from the channel created in Exercise 1, fetching weather data for each action.

**Hard Exercise**

Implement a system in your application where a saga puts actions into a channel whenever the user selects a new city, and another saga consumes these actions from the channel to fetch weather data for the selected city.

---
