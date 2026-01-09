var QueueStack = function() {

    this.stackOrder = [];

    this.stackReverseOrder = [];


    this._buildStackReverseOrder = () => {

        while(this.stackOrder.length > 0) {

            this.stackReverseOrder.push(this.stackOrder.pop());

        }

    }


    this._buildStackOrder = () => {

        while(this.stackReverseOrder.length > 0) {

            this.stackOrder.push(this.stackReverseOrder.pop());

        }

    }

};


/** 

 * @param {number} x

 * @return {void}

 */

QueueStack.prototype.push = function(x) {

    if(x === null || x === undefined) {

        return;

    }

    this._buildStackOrder();

    this.stackOrder.push(x);

};


/**

 * @return {number}

 */

QueueStack.prototype.pop = function() {

    this._buildStackReverseOrder();

    return this.stackReverseOrder.pop();

};


/**

 * @return {number}

 */

QueueStack.prototype.peek = function() {

    this._buildStackOrder();

    return this.stackOrder[0];

};


/**

 * @return {boolean}

 */

QueueStack.prototype.empty = function() {

    return (this.stackOrder.length + this.stackReverseOrder.length) < 1;

};

export default QueueStack;