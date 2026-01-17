class UndirectedGraph {
	constructor() {
		this.numberOfNodes = 0;
		this.adjacentList = {};
	}
	
	addVertex(node) {
		if(typeof node !== 'number' && typeof node !== 'string') {
			return false;
		}
		
		if(this.adjacentList[node]) {
			return false;
		}
		
		this.adjacentList[node] = new Set();
		this.numberOfNodes++;
	}
	
	removeVertex(node) {
		if(typeof node !== 'number' && typeof node !== 'string') {
			return false;
		}
		
		if(this.adjacentList[node]) {
			for(let edgeNode of this.adjacentList[node]) {
				if(this.adjacentList[edgeNode]) {
					this.adjacentList[edgeNode].delete(node);
				}
			}
			delete this.adjacentList[node];
			
			this.numberOfNodes--;
		}
	}
	
	addEdge(node1, node2) {
		if(typeof node1 !== 'number' && typeof node1 !== 'string') {
			return false;
		}
		
		if(!this.adjacentList[node1]) {
			return false;
		}
		
		if(typeof node2 !== 'number' && typeof node2 !== 'string') {
			return false;
		}
		
		if(!this.adjacentList[node2]) {
			return false;
		}
		
		this.adjacentList[node1].add(node2);
		this.adjacentList[node2].add(node1);
	}
	
	removeEdge(node1, node2) {
		if(typeof node1 !== 'number' && typeof node1 !== 'string') {
			return false;
		}
		
		if(typeof node2 !== 'number' && typeof node2 !== 'string') {
			return false;
		}
		
		if(this.adjacentList[node1]) {
			this.adjacentList[node1].delete(node2);
		}
		
		if(this.adjacentList[node2]) {
			this.adjacentList[node2].delete(node1);
		}
	}
	
	printConnections() {
	    console.log("Your vertexes and edges:");
	    let connections;
	    for(let node in this.adjacentList) {
	        if(!this.adjacentList[node]) {
	            continue;
	        }
	        connections = `${node}:`;
	        for(let edge of this.adjacentList[node]) {
	            connections += ` ${edge}`;
	        }
	        console.log(connections);
	    }
	    console.log("\r\n");
	}
}

export default UndirectedGraph;