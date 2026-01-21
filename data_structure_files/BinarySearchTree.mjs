import BinaryNode from './BinaryNode.mjs';

class BinarySearchTree {

	constructor() {
		this.root = null;
	}
	
	insert(value) {
	
		if(value === null || value === undefined) {
			return;
		}
	
		if(this.root === null) {
			this.root = new BinaryNode(value);
			return;
		}
		
		const [currentNode, parentNode] = this._lookupWithParent(value);
		
		if(currentNode !== null) {
			return;
		}
		
		if(parentNode.value < value) {
			parentNode.right = new BinaryNode(value);
		} else {
			parentNode.left = new BinaryNode(value);
		}
	}
	
	remove(value) {
	    const [nodeToRemove, parentOfNodeToRemove] = this._lookupWithParent(value);
	    
	    if(nodeToRemove) {
	        let successor = nodeToRemove.right;
	        
	        if(successor) {
	            if(successor.left) {
                    let successorParent;
    	            while(successor.left) {
    	                successorParent = successor;
    	                successor = successor.left;
    	            }
    	            
    	            const orphanNode = successor.right;
    	            successorParent.left = orphanNode;
    	            
    	            successor.right = nodeToRemove.right;
	            }
	            
	            successor.left = nodeToRemove.left;
	        } else {
	            successor = nodeToRemove.left;
	        }
	        
	        if(parentOfNodeToRemove) {
	            if(value > parentOfNodeToRemove.value) {
    	            parentOfNodeToRemove.right = successor;
    	        } else {
    	            parentOfNodeToRemove.left = successor;
    	        }
	        } else {
	            this.root = successor;
	        }
	    }
	}
	
	_lookupWithParent(value) {
	    let currentNode = this.root;
		let parentNode = null;
		
		while(currentNode !== null && currentNode.value !== value) {
			parentNode = currentNode;
			currentNode = this._getNextByValue(value, currentNode);
		}
		
		return [currentNode,parentNode];
	}
	
	lookup(value) {
		const [currentNode] = this._lookupWithParent(value);
		
		return currentNode;
	}
	
	_lookupWithParent_recursive(value, currentNode = this.root, parentNode = null) {
		if(currentNode === null || currentNode.value === value) {
			return [currentNode, parentNode];
		}
		
		return this._lookupWithParent_recursive(value, this._getNextByValue(value, currentNode), currentNode);
	}
	
	lookup_recursive(value) {
		const [currentNode] = this._lookupWithParent_recursive(value);
		
		return currentNode;
	}
	
	_getNextByValue(value, currentNode) {
		if(currentNode.value > value) {
			return currentNode.left;
		} else if (currentNode.value < value) {
			return currentNode.right;
		}
		return currentNode;
	}
	
	mapTreeToArray() {
	    return this._mapTreeToArray(this.root, null);
	}
	
	printTree() {
        const treeArray = this.mapTreeToArray();
        
        console.log("Your tree: ")
        for(let level of treeArray) {
            console.log(level);
        }
        
        console.log("\r\n")
    }
	
	_mapTreeToArray(node, parent, level = 0, tree = []) {
        if(node !== null && node !== undefined && node.value !== null) {
            tree[level] = (tree[level] === undefined ? `${node.value}` : `${tree[level]}, ${node.value}`) + `(${parent?.value ?? null})`;
            
            tree = this._mapTreeToArray(node.left, node, level + 1, tree);
            
            tree = this._mapTreeToArray(node.right, node, level + 1, tree);
        }
        
        return tree;
    }
    
    traverse(node = this.root) {
        const tree = { value: node.value, left: null, right: null };
        tree.left = node.left === null ? null : this.traverse(node.left);
        tree.right = node.right === null ? null : this.traverse(node.right);
        return tree;
    }
}

export default BinarySearchTree;