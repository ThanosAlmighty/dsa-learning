import Node from './SingleLinkedNode.mjs'

class LinkedList {

    constructor(value) {
        this._init(value);
    }
    
    _init(value) {
        const newNode = new Node(value);
        this._head = newNode;
        this._tail = this._head;
        this._length = 1;
    }
    
    getHead() {
        return this._head;
    }
    
    getTail() {
        return this._tail;
    }
    
    length() {
        return this._length;
    }
    
    append(value) {
        if(this.length() < 1) {
            this._init(value);
            return;
        }
        
        const newNode = new Node(value);
        
        this._tail.next = newNode;
        this._tail = newNode;
        this._length++;
    }
    
    prepend(value) {
        if(this.length() < 1) {
            this._init(value);
            return;
        }
        
        const newNode = new Node(value);
        
        newNode.next = this._head;
        this._head = newNode;
        this._length++;
    }
    
    insert(index, value) {
        if(index === 0) {
            this.prepend(value);
            return;
        }
        
        this._validateIndexOrThrow(index);
        
        if(index === this.length() - 1) {
            this.append(value);
            return;
        }
        
        const targetPredecessorNode = this.getNodeAtIndex(index - 1);
        
        const newNode = new Node(value);
        newNode.next = targetPredecessorNode.next;
        targetPredecessorNode.next = newNode;
        this._length++;
    }
    
    clear() {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }
    
    removeAtHead() {
        if(this.length() < 2) {
            this.clear();
            return;
        }
        
        this._head = this._head.next;
        this._length--;
    }
    
    removeAtTail() {
        if(this.length() < 2) {
            this.clear();
            return;
        }
        
        const targetPredecessorNode = this.getNodeAtIndex(this.length() - 2);
        
        targetPredecessorNode.next = null;
        this._tail = targetPredecessorNode;
        
        this._length--;
    }
    
    removeAtIndex(index) {
        this._validateIndexOrThrow(index);
        
        if(index === 0) {
            this.removeAtHead();
            return;
        }
        
        if(index === this.length() - 1) {
            this.removeAtTail();
            return;
        }
        
        const targetPredecessorNode = this.getNodeAtIndex(index - 1);
        
        const nodeToRemove = targetPredecessorNode.next;
        
        targetPredecessorNode.next = nodeToRemove.next;
        
        this._length--;
    }
    
    _validateIndexOrThrow(index) {
        if (index < 0 || index >= this.length()) {
            throw new RangeError("Index " + index + " is out of bounds for LinkedList of length " + this.length());
        }
    }
    
    getNodeAtIndex(targetIndex) {
        this._validateIndexOrThrow(targetIndex);
        
        let targetNode = this._head;
        
        for(let i = 0; i < targetIndex; i++) {
            targetNode = targetNode.next;
        }
        
        return targetNode;
    }
    
    toArray() {
        const arr = [];
        let currentNode = this._head;
        while(currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        
        return arr;
    }
	
	reverse() {
		if(this.length() < 2) {
			return;
		}
		
		let newFollower = this._head;
		let newLeader = newFollower.next;
		let nextNewLeader = newLeader.next;
		
		this._tail = this._head;
		this._tail.next = null;
		
		newLeader.next = newFollower;
		
		while(nextNewLeader) {
			newFollower = newLeader;
			newLeader = newFollower.next;
			nextNewLeader = newLeader.next;
			
			newLeader.next = newFollower;
		}
		
		this._head = newLeader;
	}
}