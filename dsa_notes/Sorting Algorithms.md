#Sorting Algorithms

##Bubble Sort
* <ins>Description</ins>: "Bubbles" values to the top of the list through nested iteration and comparison
* <ins>Time Complexity</ins>: `O(n^2)` due to the nested iterations
* <ins>Space Complexity</ins>: `O(1)` since the sorting is done in-place
* <ins>Use Case</ins>: (asymmetrical) If you know the array is nearly sorted with no "Turtles" on the right of the array, it is possible for it to perform in linear time. However this is hard to guarantee. A more reliable (symmetrical) approach for nearly sorted arrays would be insertion sort.

##Selection Sort
* <ins>Description</ins>: Iterates over the entire array to find the smallest (or other criteria) value, and swaps it with the lowest, unsorted index. Repeats the iteration (n-1 on each pass) until entire array has been sorted.
* <ins>Time Complexity</ins>: `O(n^2)` due to the nested iterations
* <ins>Space Complexity</ins>: `O(1)` since the sorting is done in-place
* <ins>Use Case</ins>: Introduction to sorting only - there are many other algorithms that outperform selection sort (or, in worst case, equal to)

##Insertion Sort
* <ins>Description</ins>: Takes a "current" index value, and compares it with values at lower indexes. For each lower index that, when compared with "current", meets the order change criteria- the lower index's value is moved up by 1 index. Finally, once the "current" value meets a value that does not require a swap, it is inserted into the index of the last "swapped" value.
* <ins>Time Complexity</ins>: `O(n^2)` due to the nested iterations
* <ins>Space Complexity</ins>: `O(1)` since the sorting is done in-place
* <ins>Use Case</ins>: If you know the array is nearly sorted, it can perform closer to linear time - O(n + I) where I is the number of inversions (pairs that are out of order).

##Merge Sort
* <ins>Description</ins>: Takes an array and splits it in half, creating a pair of smaller sub-arrays. This process is repeated until each sub-array has a length of no more than 1. Then, the array pairs at each level are merged in sort order until everything is merged back into one, sorted array.
* <ins>Time Complexity</ins>: `O(n log(n))`
* <ins>Space Complexity</ins>: `O(n)` since new array references are created to host the sub-array pairs
* <ins>Use Case</ins>: Overall time complexity consistency outperforms most sorting algorithms in worst case scenarios. When space is not a concern, merge sort is a safe bet.

##Quick Sort
* <ins>Description</ins>: Takes an array and splits it in half, creating a pair of smaller sub-arrays. This process is repeated until each sub-array has a length of no more than 1. Then, the array pairs at each level are merged in sort order until everything is merged back into one, sorted array.
* <ins>Time Complexity</ins>: O(n * log(n))
* <ins>Space Complexity</ins>: O(n) since new array references are created to host the sub-array pairs
* <ins>Use Case</ins>: Overall time complexity consistency outperforms most sorting algorithms in worst case scenarios. When space is not a concern, merge sort is a safe bet.

##Radix/Counting Sort