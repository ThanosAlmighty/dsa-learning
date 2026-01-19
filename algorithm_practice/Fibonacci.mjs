const fibonacciRecursive = (n) => {
    if(n < 0) {
        return false;
    }
    
    if(n < 2) {
        return n;
    }
    
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const fibonacciIterative = (n) => {
    if(n < 0) {
        return false;
    }
    
    if(n < 2) {
        return n;
    }
    
    let prev = 0, current = 1, sum = 1;
    for(let i = 2; i < n; i++) {
        prev = current;
        current = sum;
        sum = current + prev;
    }
    
    return sum;
}

export {fibonacciRecursive, fibonacciIterative};