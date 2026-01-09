class StackArray {
    
    constructor(value) {
        this._values = [];
        if(this.value) {
            this._values.push(value);
        }
    }
    
    length() {
        return this._values.length;
    }
    
    getBottom() {
        return this._values[0];
    }
    
    push(value) {
        this._values.push(value);
    }
    
    pop() {
        return this._values.pop();
    }
    
    peek() {
        return this._values[this._values.length - 1];
    }
}

export default StackArray;