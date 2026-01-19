# Recursion vs Iteration

## Recursion
### PROS:
* Forces you to follow DRY (Don't Repeat Yourself) principals to reduce duplication.
* Readability is a benefit, though it is considered debatable.

### CONS:
* Can be hard to understand, especially with complex problems.
* It can be hard to grasp the functionality.
* Potentially results in a large stack. 
* Tail Call Optimization (TCO) can help manage stack size.
* Requires special techniques like memoization or dynamic programming to avoid exponential time complexity.

---

## Iteration
### PROS:
* Generally easier to understand.
* Typically utilizes a smaller call stack.

### CONS:
* Harder to avoid duplication.
* More verbose in its implementation.