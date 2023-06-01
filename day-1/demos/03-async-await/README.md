---
marp: true
---

# What is Async/Await?

---

# Async/Await

Async/Await is just a syntactic sugar on top of promises

---

# Async/Await

The keyword `async` before a function makes the function return a promise. 

<br>

The keyword `await` makes JavaScript wait until the promise settles and returns its result

---

# Async/Await

```javascript
async function exampleAsync() {
    let response = await fetch('https://api.github.com/users/github');
    let user = await response.json();
    console.log(user.name);
}

exampleAsync();
```