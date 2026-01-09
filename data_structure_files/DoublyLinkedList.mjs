import Node from './DoubleLinkedNode.mjs'

class DoublyLinkedList {

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
		
		newNode.previous = this._tail;
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
        this._head.previous = newNode;
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
        newNode.previous = targetPredecessorNode;
        newNode.next = targetPredecessorNode.next;
        targetPredecessorNode.next = newNode;
        newNode.next.previous = newNode;
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
        this._head.previous = null;
        this._length--;
    }
    
    removeAtTail() {
        if(this.length() < 2) {
            this.clear();
            return;
        }
        
        const targetPredecessorNode = this.getNodeAtIndex(this.length() - 2);
        
        this._tail = targetPredecessorNode;
        targetPredecessorNode.next = null;
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
        
        nodeToRemove.next.previous = targetPredecessorNode;
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
        
        let targetNode;
        
        if(targetIndex < (this.length() / 2) - 1) {
            targetNode = this._head;
            for(let i = 0; i < targetIndex; i++) {
                targetNode = targetNode.next;
            }
        } else {
            targetNode = this._tail;
            for(let i = this.length() - 1; i > targetIndex; i--) {
                targetNode = targetNode.previous;
            }
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
}

export default DoublyLinkedList;