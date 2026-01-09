import Node from './SingleLinkedNode.mjs'

class Stack {
    
    constructor(value) {
        if(value) {
            this._init(value);    
        } else {
            this._top = null;
            this._bottom = null;
            this._length = 0;    
        }
    }
    
    _init(value) {
        const initialNode = new Node(value);
        this._top = initialNode;
        this._bottom = initialNode;
        this._length = 1;
    }
    
    length() {
        return this._length;
    }
    
    getBottom() {
        return this._bottom;
    }
    
    push(value) {
        if(this.length() < 1) {
            this._init(value);
            return;
        }
        
        const newNode = new Node(value);
        
        newNode.next = this._top;
        this._top = newNode;
        
        this._length++;
    }
    
    pop() {
        if(this.length() <= 1) {
            this._bottom = null;
        }
        
        const topNode = this._top;
        
        if(topNode) {
            this._top = topNode.next;
            this._length--;
        }
        
        return topNode;
    }
    
    peek() {
        return this._top;
    }
}

export default Stack;