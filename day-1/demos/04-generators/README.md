---
marp: true
---

# What is a generator?

---

# Generator functions

JavaScript Generator is a special kind of function which can pause execution and can be resumed later

---

# Generator functions

The `function*` declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object

Inside a generator function, we have a `yield` keyword which pauses the execution of the function. We can call `next()` on the generator object to resume execution

---

# Generator functions

```javascript
function* generatorExample() {
    yield 'First yield';
    yield 'Second yield';
    yield 'Third yield';
}

const generatorObject = generatorExample();

console.log(generatorObject.next()); // {value: "First yield", done: false}
console.log(generatorObject.next()); // {value: "Second yield", done: false}
console.log(generatorObject.next()); // {value: "Third yield", done: false}
console.log(generatorObject.next()); // {value: undefined, done: true}
```

--- 

# Generator API

A generator function, when called, returns a generator object. This object has some methods you can use:

---

# Generator API methods


`next()`: Resumes the execution of the function until the next yield statement. It returns an object with two properties: value, which is the yielded value, and done, a boolean indicating if the function has finished execution
<br>

`return(value)`: Returns the given value and finishes the generator
<br>

`throw(error)`: Throws an error from the current place of the generator

--- 

# Generator API methods

```javascript
function* generatorExample() {
    try {
        yield 'First yield';
        yield 'Second yield';
    } catch (e) {
        console.log('Error caught!', e);
    }
}

const generatorObject = generatorExample();

generatorObject.next(); // {value: "First yield", done: false}
generatorObject.throw('This is an error.'); // 'Error caught! This is an error.'
```