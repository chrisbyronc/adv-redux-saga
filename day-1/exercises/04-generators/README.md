# Generator practice problems

## Exercise 1

Write a simple generator function, `numberGenerator` that yields the numbers 1, 2, and 3 in order

---

## Exercise 2

Modify the `numberGenerator` to accept a parameter n and yield the numbers from 1 to n

---

## Exercise 3

Create a generator function `numberDoubler` that takes a generator and yields the double of each value from the input generator

---

## Practice project

Create a generator function `fibonacciGenerator` that yields the Fibonacci sequence. Then create another generator function take that accepts a generator and a number n, and yields the first n values from the input generator

Finally, create a generator function filter that accepts a generator and a predicate function, and yields only the values from the input generator that satisfy the predicate

---

<br>

# Bonus Exercise 1

Create an infinite sequence generator. This generator should take two numbers, `start` and `step`, and should yield an infinite sequence of numbers that starts from `start` and increments by `step`
For instance, calling `const numbers = infiniteSequenceGenerator(5, 3);` should yield the sequence `5, 8, 11, 14, 17, 20, 23, ...` indefinitely

---

# Bonus Exercise 2

Create two separate generator functions, one that generates an infinite sequence of even numbers and one that generates an infinite sequence of odd numbers. Then, create a third generator that combines the two sequences into one sequence that alternates between even and odd numbers

---