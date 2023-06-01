//Exercise 1

//Write a simple generator function, `numberGenerator` that yields the numbers 1, 2, and 3 in order


function* numberGenerator()  {
  try {
    yield 1
    yield 2
    yield 3
    return {done: false}
  } catch(e) {
    console.error("Error happened:", e)
  }
}

const genObj = numberGenerator()
let result = genObj.next();

//Only without the return statement
// for(let number of genObj) {
//   console.log(number)
// }

//When using a return statement and needing to see that value
// while(!result.done) {
//   console.log(result.value)
//   result = genObj.next()
// }

// console.log(result.value)
