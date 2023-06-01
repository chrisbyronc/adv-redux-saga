//Practice demo callback

let testCallbackMultiplication = (x, y, cb) => {
  cb(x * y)
}

//testCallbackMultiplication(5, 20, console.log)


//Exercise 4

//Write a function that emulates the array map function. The function takes an array and a callback as arguments. It returns a new array where every element is the result of the callback function

function map(array, callback) {
  let result = []

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array))
  }

  return result
}

let arr = [1, 2, 3, 4, 5]
let newArray = map(arr, function(val, index, arr) {
  return val + 1
})

console.log(newArray)