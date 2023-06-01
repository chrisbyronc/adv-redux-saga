---
marp: true
---

# What is an iterable?

---

# Iterable

An `Iterable` is an object which defines its iteration behavior, such as what values are looped over in a `for...of` construct. 

<br>



---

# What is iterable?

Arrays, strings, maps, sets, etc. are all iterable because they implement the iterable protocol by having a Symbol.iterator method

---

# Iterators

An object that provides a `next` method which returns the next item in the sequence. 

<br>

This method will return an object with two properties: `value` and `done`

---

# For of loop?

---

# For...of

The For-Of Loop is used for looping over iterable objects, invoking a custom iteration hook with statements to be executed for the value of each distinct property

---

# For...of

```javascript
let iterable = [10, 20, 30];

for (let value of iterable) {
    value += 1;
    console.log(value);
}
// 11
// 21
// 31
```