---
marp: true
---

# What is Asynchronicity?

--- 

# Asynchronous Programming

JavaScript is a single-threaded, non-blocking, asynchronous, and concurrent language. It has a call stack, an event loop, a callback queue, and some other APIs
<br>

Operations like network requests or timeouts are asynchronous and are handled outside of the main thread. 

<br>

JavaScript uses events and callback functions to deal with these asynchronous operations

---

# What is a callback function?

---

# Callback functions

A callback function is a function passed into another function as an argument to be executed later
<br>

```javascript
function exampleCallback(text, callback) {
    console.log(text);
    callback();
}

exampleCallback("Hello, Redux Saga!", function() {
    console.log("This is a callback function.");
});
```

---

# Promise what?

---

# Promises

A Promise is an object representing the eventual completion or failure of an asynchronous operation
<br>

```javascript
let examplePromise = new Promise((resolve, reject) => {
    let condition = true; // this can be the result of something asynchronous like a network request
    if(condition) {
        resolve("Promise is resolved.");
    } else {
        reject("Promise is rejected.");
    }
});

examplePromise
    .then(res => console.log(res))
    .catch(err => console.log(err));
```
