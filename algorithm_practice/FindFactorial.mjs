/** 
*	note: 
*		while factorial technically includes the final * 1 multiplication, 
*		exiting before this gives the same result. Choosing to end at 2 saves
*		one iteration or recursive call. In a limited call stack scenario, this
* 		enables the functions to handle an input of 1 higher before triggering 
* 		a stack overflow
**/
const findFactorialRecursive = (number) => {
    if(number < 0) {
        return;
    }
    if(number === 0) {
        return 1;
    }
    if(number <= 2) {
        return number;
    } 
    
    return number * findFactorialRecursive(number - 1);
}

const findFactorialIterative = (number) => {
    if(number < 0) {
        return;
    }
    if(number === 0) {
        return 1;
    }
    let factorial = number;
    while(number > 2) {
        number--;
        factorial *= number;
    }
    
    return factorial;
}

export {findFactorialRecursive, findFactorialIterative};