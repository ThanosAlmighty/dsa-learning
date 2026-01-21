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

### WHEN TO CONSIDER USING:
1. If you are using a tree, or converting something into a tree
2. If it can be divided into a number of subproblems that are smaller instances of the same problem (fibonacci, factorial, etc.)
   * Each of instance of the subproblem is identical in nature
   * The solutions of each subproblem can be combined to solve the problem at hand
3. A "divide and conquor" type problem (i.e. finding a node in a sorted array or a bst)

---

## Iteration
### PROS:
* Generally easier to understand.
* Typically utilizes a smaller call stack.

### CONS:
* Harder to avoid duplication.
* More verbose in its implementation.