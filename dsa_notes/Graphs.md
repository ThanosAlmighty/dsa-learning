# Graphs

A Graph is a data structure used to represent interconnected vertexes[cite: 3].

---

## Graph Variations

### Directional vs Un-directional
Indicates whether the edges are one-way or two-way[cite: 4].

* **Directional**: An edge is from A to B[cite: 5]. 
    * Think of followers on Twitter[cite: 5]. 
    * Just because A follows B, doesn’t mean that B follows A[cite: 6].
    * Each direction requires an explicit from/to pair[cite: 6].
    * If A follows B, AND B follows A, you need to define 2 edges[cite: 6].
* **Un-directional**: Each edge goes both ways[cite: 6].
    * Think of friends on Facebook[cite: 7]. 
    * If A is friends with B, B is friends with A[cite: 7].
    * One edge captures both directions[cite: 7].
    * Only one edge needs to be defined to show the relationship between A and B[cite: 7].



### Cyclical vs Acyclical
Indicates if, given a starting vertex, there is a path from the starting vertex back to itself (a cycle)[cite: 7].

* **Non-directional graphs**: These are ALWAYS cyclical[cite: 7].
* **Acyclical Example**: In a directional graph with vertexes A, B, and C, if A points to B and C, and B points only to C, the graph is acyclical[cite: 7].
* **Cyclical Example**: Given directional graph with vertexes A, B, and C, if A points to B and C, B points only to C, and C points to A, the graph is cyclical[cite: 8].

### Weighted vs Unweighted
Indicates whether each edge has a numerical “weight” value[cite: 9]. This can apply regardless of whether the graph is directional or un-directional, cyclical or acyclical[cite: 9].

---

## Graph Representation Approaches

### Edge List
A nested array format that involves listing pairs of vertexes to represent edges[cite: 9].

* **Format**: Generally formatted as a “[from-vertex, to-vertex]” for directional graphs, but this format does not hold true for un-direction graphs[cite: 9].
* **Isolated Vertexes**: Often requires a separate list of vertexes (nodes) to enable the capture of isolated vertexes.
* **Example**: `[[0,1], [0,2], [1,2], [2,0]]` (unweighted, directional, cyclical).
    * Vertex 0 points to 1 and 2.
    * Vertex 1 points to 2.
    * Vertex 2 points to 0.

### Adjacent List
A nested array format that involves listing all adjacent vertexes to the vertex matching a given index.

* **Requirement**: Directional and un-directional both require each index to list adjacent vertexes.
* **Example**: `[[2], [], [3, 4], [], [3]]` (unweighted, directional, acyclical).
    * Vertex 0 points to 2.
    * Vertex 1 points to nothing and is isolated.
    * Vertex 2 points to 3 and 4.
    * Vertex 3 points to nothing.
    * Vertex 4 points to 3.

### Adjacent Matrix
Similar to Adjacent List, a nested array format where each top level index represents a vertex, and the array at each top level index represents which other vertexes to which it points.

* **Structure**: Both directional and un-directional require each index to list adjacent vertexes.
* **Values**: Primary difference from Adjacent List is that each array lists all nodes in the graph, with 0 representing no connections, and >=1 representing a connection.
* **Weights**: A matrix is a symmetrical grid, making the tracking of connection weights simpler.
* **Complexity**: Drawback is $O(n^2)$ space complexity.
* **Example**: (un-directional, weighted, cyclical).
```javascript
[
   [0,1,3,0],
   [1,0,0,2],
   [3,0,0,5],
   [0,2,5,0]
]