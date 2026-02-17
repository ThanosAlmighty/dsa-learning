#Sorting Algorithms

##Bubble Sort
* <ins>Description</ins>: "Bubbles" values to the top of the list through nested iteration and comparison
* <ins>Time Complexity</ins>: O(n^2) due to the nested iterations
* <ins>Space Complexity</ins>: O(1) since the sorting is done in-place
* <ins>Use Case</ins>: (asymmetrical) If you know the array is nearly sorted with no "Turtles" on the right of the array, it is possible for it to perform in linear time. However this is hard to guarantee. A more reliable (symmetrical) approach for nearly sorted arrays would be insertion sort.

##Selection Sort
* <ins>Description</ins>: 
* <ins>Time Complexity</ins>: O(n^2) due to the nested iterations
* <ins>Space Complexity</ins>: O(1) since the sorting is done in-place
* <ins>Use Case</ins>: Introduction to sorting only - there are many other algorithms that outperform selection sort (or, in worst case, equal to)

##Insertion Sort
* <ins>Description</ins>: Takes a "current" index value, and compares it with values at lower indexes. For each lower index that, when compared with "current", meets the order change criteria- the lower index's value is moved up by 1 index. Finally, once the "current" value meets a value that does not require a swap, it is inserted into the index of the last "swapped" value.
* <ins>Time Complexity</ins>: O(n^2) due to the nested iterations
* <ins>Space Complexity</ins>: O(1) since the sorting is done in-place
* <ins>Use Case</ins>: If you know the array is nearly sorted, it can perform closer to linear time - O(n + I) where I is the number of inversions (pairs that are out of order).

##Merge Sort

##Quick Sort

##Radix/Counting Sort