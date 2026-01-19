const fibonacciRecursive = (n) => {
    if(n < 0) {
        return;
    }
    
    if(n < 2) {
        return n;
    }
    
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const fibonacciIterative = (n) => {
    if(n < 0) {
        return;
    }
    
    if(n < 2) {
        return n;
    }
    
    let prev = 0;
    let current = 1;
    let next = 1;
    for(let i = 2; i < n; i++) {
        prev = current;
        current = next;
        next = current + prev;
    }
    
    return next;
}

export {fibonacciRecursive, fibonacciIterative};