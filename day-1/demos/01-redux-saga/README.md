---
marp: true
---

# What is redux-saga?
--- 

# What is redux-saga?

Redux-saga is a middleware library designed to handle side effects or asynchronous actions in your Redux-based applications

---

# What is redux-saga?

* **Middleware**: A bridge between an operating system or database and applications, providing standardized ways of communication  


* **Side Effects**: In the context of Redux, side effects can be anything from data fetching, impure procedures such as browser cache access, or even things like generating random numbers  

---

# What is the difference between redux-saga and redux thunk?

--- 

# Redux-saga vs. Redux thunk

In **Redux-Thunk** you can write action creators that return a function instead of an action

<br>

In **Redux-Saga** you can write asynchronous actions as pure functions, called sagas, using ES6 Generators

---

# Redux-saga vs. Redux thunk

|         | Redux Thunk                          | Redux Saga                                          |
| ------- | ------------------------------------ | --------------------------------------------------- |
| Concept | Uses middleware to return a function | Uses middleware to handle actions with Generators   |
| Control | Simple control flow                  | Complex control flow is easier (parallel execution) |
| Testing | Testing async logic can be complex   | Testing is straightforward due to pure functions    |
| Debug   | Limited debugging capability         | Enhanced debugging due to isolated effect handling  |

---

# Benefits of Saga over Thunk

Redux Saga, despite being a bit more complex, has several advantages over Redux Thunk:

1. **Declarative Effects**: Instead of executing effects (like data fetching) directly, you describe them in your saga, making testing much simpler
2. **Complex Control Flow**: Redux Saga makes it easier to manage complex sequences of asynchronous actions, including managing dependencies between actions
3. **Concurrency Handling**: Redux Saga allows for more sophisticated control over when asynchronous actions run in parallel or in sequence
4. **Isolation of Side Effects**: Side effects are isolated from the rest of your code, making your application more predictable and easier to understand
5. **Enhanced Error Handling**: Errors in Redux Saga are more manageable, with options to cancel running tasks and restart failed tasks