import Node from './SingleLinkedNode.mjs'

class Queue {
    
    constructor(value) {
        if(value) {
            this._init(value);    
        } else {
            this._first = null;
            this._last = null;
            this._length = 0;    
        }
    }
    
    _init(value) {
        const initialNode = new Node(value);
        this._first = initialNode;
        this._last = initialNode;
        this._length = 1;
    }
    
    length() {
        return this._length;
    }
    
    getLast() {
        return this._last;
    }
    
    enqueue(value) {
        if(this.length() < 1) {
            this._init(value);
            return;
        }
        
        const newNode = new Node(value);
        
        this._last.next = newNode;
        this._last = newNode;
        
        this._length++;
    }
    
    dequeue() {
        if(this.length() <= 1) {
            this._last = null;
        }
        
        const topNode = this.peek();
        
        if(topNode) {
            this._first = topNode.next;
            this._length--;
        }
        
        return topNode;
    }
    
    peek() {
        return this._first;
    }
}

export default Queue;