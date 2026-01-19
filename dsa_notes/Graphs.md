# Graphs

A Graph is a data structure used to represent interconnected vertexes.

---

## Graph Variations

### Directional vs Un-directional
Indicates whether the edges are one-way or two-way.

* **Directional**: An edge is from A to B. 
    * Think of followers on Twitter. 
    * Just because A follows B, doesn’t mean that B follows A.
    * Each direction requires an explicit from/to pair.
    * If A follows B, AND B follows A, you need to define 2 edges.
* **Un-directional**: Each edge goes both ways.
    * Think of friends on Facebook. 
    * If A is friends with B, B is friends with A.
    * One edge captures both directions.
    * Only one edge needs to be defined to show the relationship between A and B.



### Cyclical vs Acyclical
Indicates if, given a starting vertex, there is a path from the starting vertex back to itself (a cycle).

* **Non-directional graphs**: These are ALWAYS cyclical.
* **Acyclical Example**: In a directional graph with vertexes A, B, and C, if A points to B and C, and B points only to C, the graph is acyclical.
* **Cyclical Example**: Given directional graph with vertexes A, B, and C, if A points to B and C, B points only to C, and C points to A, the graph is cyclical.

### Weighted vs Unweighted
Indicates whether each edge has a numerical “weight” value. This can apply regardless of whether the graph is directional or un-directional, cyclical or acyclical.

---

## Graph Representation Approaches

### Edge List
A nested array format that involves listing pairs of vertexes to represent edges.

* **Format**: Generally formatted as a “[from-vertex, to-vertex]” for directional graphs, but this format does not hold true for un-direction graphs.
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
    * Vertex