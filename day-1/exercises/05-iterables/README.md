# Practicing Iterables

## Exercise 1 - Iterator

An Iterator is an object that contains a countable number of values and implements a next() method that returns an object with two properties: value and done
Let's create a simple string iterator. This iterator should take a string, and the next() method should return the next character from the string each time it's called

```javascript

function createStringIterator(str) {
    let index = 0;

    return {
        next: function() {
           
        }
    };
}

const iterator = createStringIterator('Hello');
```

---

# Exercise 2 - Symbol.iterator

An Iterable is an object that implements a method whose key is [Symbol.iterator]. This method should return an Iterator
Modify the `createStringIterator` function to make it an iterable
```javascript
function createStringIterable(str) {
    let index = 0;

    return {
        [Symbol.iterator]: function() {
            return {
                next: function() {
                }
            };
        }
    };
}

const iterable = createStringIterable('Hello');
const iterator = iterable[Symbol.iterator]();
```

---

# Exercise 3 - For..of

A For-Of Loop creates a loop iterating over iterable objects, including: built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables
Modify the `createStringIterable` function and use a For-Of Loop to print each character of the string

---