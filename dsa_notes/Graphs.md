# Graphs

[cite_start]A Graph is a data structure used to represent interconnected vertexes[cite: 3].

---

## Graph Variations

### Directional vs Un-directional
[cite_start]Indicates whether the edges are one-way or two-way[cite: 4].

* [cite_start]**Directional**: An edge is from A to B[cite: 5]. 
    * [cite_start]Think of followers on Twitter[cite: 5]. 
    * [cite_start]Just because A follows B, doesn’t mean that B follows A[cite: 6].
    * [cite_start]Each direction requires an explicit from/to pair[cite: 6].
    * [cite_start]If A follows B, AND B follows A, you need to define 2 edges[cite: 6].
* [cite_start]**Un-directional**: Each edge goes both ways[cite: 6].
    * [cite_start]Think of friends on Facebook[cite: 7]. 
    * [cite_start]If A is friends with B, B is friends with A[cite: 7].
    * [cite_start]One edge captures both directions[cite: 7].
    * [cite_start]Only one edge needs to be defined to show the relationship between A and B[cite: 7].



### Cyclical vs Acyclical
[cite_start]Indicates if, given a starting vertex, there is a path from the starting vertex back to itself (a cycle)[cite: 7].

* [cite_start]**Non-directional graphs**: These are ALWAYS cyclical[cite: 7].
* [cite_start]**Acyclical Example**: In a directional graph with vertexes A, B, and C, if A points to B and C, and B points only to C, the graph is acyclical[cite: 7].
* [cite_start]**Cyclical Example**: Given directional graph with vertexes A, B, and C, if A points to B and C, B points only to C, and C points to A, the graph is cyclical[cite: 8].

### Weighted vs Unweighted
[cite_start]Indicates whether each edge has a numerical “weight” value[cite: 9]. [cite_start]This can apply regardless of whether the graph is directional or un-directional, cyclical or acyclical[cite: 9].

---

## Graph Representation Approaches

### Edge List
[cite_start]A nested array format that involves listing pairs of vertexes to represent edges[cite: 9].

* [cite_start]**Format**: Generally formatted as a “[from-vertex, to-vertex]” for directional graphs, but this format does not hold true for un-direction graphs[cite: 9].
* [cite_start]**Isolated Vertexes**: Often requires a separate list of vertexes (nodes) to enable the capture of isolated vertexes[cite: 10].
* [cite_start]**Example**: `[[0,1], [0,2], [1,2], [2,0]]` (unweighted, directional, cyclical)[cite: 11].
    * [cite_start]Vertex 0 points to 1 and 2[cite: 11].
    * [cite_start]Vertex 1 points to 2[cite: 11].
    * [cite_start]Vertex 2 points to 0[cite: 11].

### Adjacent List
[cite_start]A nested array format that involves listing all adjacent vertexes to the vertex matching a given index[cite: 11].

* [cite_start]**Requirement**: Directional and un-directional both require each index to list adjacent vertexes[cite: 12].
* [cite_start]**Example**: `[[2], [], [3, 4], [], [3]]` (unweighted, directional, acyclical)[cite: 13].
    * [cite_start]Vertex 0 points to 2[cite: 13].
    * [cite_start]Vertex 1 points to nothing and is isolated[cite: 13].
    * [cite_start]Vertex 2 points to 3 and 4[cite: 13].
    * [cite_start]Vertex 3 points to nothing[cite: 13].
    * [cite_start]Vertex 4 points to 3[cite: 13].

### Adjacent Matrix
[cite_start]Similar to Adjacent List, a nested array format where each top level index represents a vertex, and the array at each top level index represents which other vertexes to which it points[cite: 13].

* [cite_start]**Structure**: Both directional and un-directional require each index to list adjacent vertexes[cite: 14].
* [cite_start]**Values**: Primary difference from Adjacent List is that each array lists all nodes in the graph, with 0 representing no connections, and >=1 representing a connection[cite: 15].
* [cite_start]**Weights**: A matrix is a symmetrical grid, making the tracking of connection weights simpler[cite: 16].
* [cite_start]**Complexity**: Drawback is $O(n^2)$ space complexity[cite: 16].
* [cite_start]**Example**: (un-directional, weighted, cyclical)[cite: 16].
```javascript
[
   [0,1,3,0],
   [1,0,0,2],
   [3,0,0,5],
   [0,2,5,0]
]