const fetch = require('node-fetch')

//Exercise 1

//Create an asynchronous iterable that yields the numbers 1 through 5 with a delay of 1 second between each number

async function* generateNums(start, end) {
  for (let i = start; i <= end; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield i;
  }
}

const exercise1 = async () => {
  let numGen = generateNums(1, 5);
  for await (const num of numGen) {
      console.log(num);
  }
}

//Exercise 2

//Expand on the previous exercise. Create an asynchronous iterable that fetches data from the JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts) and yields each post one at a time

async function* generatePosts() {
  const response = await fetch('http://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()

  for(let post of posts) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield post
  }
}

const exercise2 = async () => {
  const posts = generatePosts()
  for await (let post of posts) {
    console.log(post)
  }
}

exercise2()