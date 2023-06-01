//Exercise 3

//Update your fetchData function to handle errors. If an error occurs while fetching the data or transforming it, catch the error and log it to the console

async function fetchData(url, transformFunction) {
  try {
    let response = await fetch(url);

    // The API call was successful!
    if (response.ok) {
      let data = await response.json();
      
      try {
        // Transform the data using the provided function
        let transformedData = transformFunction(data);

        console.log(transformedData);
      } catch(e) {
        console.log("Error during transformation process")
      }
    } else {
      console.log("The API call was not successful")
    }
  } catch(e) {
    console.log("Error", e)
  }
     
}

// Using the function with a transform function
fetchData('https://jsonplaceholder.typicode.com/posts', data => {
  return data.length;
});
