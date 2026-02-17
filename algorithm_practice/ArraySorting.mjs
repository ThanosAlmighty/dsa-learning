const bubbleSort = (array) => {
    let swapHappened;
    for (let i = 0; i < array.length; i++) {
		swapHappened = false;
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                //Swap the numbers
                let temp = array[j]
                array[j] = array[j + 1];
                array[j + 1] = temp;
				swapHappened = true;
            }
        }
		if(!swapHappened) {
		  return;
		}
    }
}

const selectionSort = (array) => {
    if (!Array.isArray(array)) {
        return false;
    }
	if(array.length < 2) {
		return;
	}
	let indexOfSmallest;
    for (let i = 0; i < array.length; i++) {
        indexOfSmallest = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexOfSmallest]) {
                indexOfSmallest = j;
            }
        }
		if(indexOfSmallest !== i) {
		    [array[i],array[indexOfSmallest]] = [array[indexOfSmallest],array[i]];
		}
    }
}

const insertionSort = (array) => {
    if (!Array.isArray(array)) {
        return false;
    }
	if(array.length < 2) {
		return;
	}
    let j;
	let current;
    for (let i = 1; i < array.length; i++) {
        current = array[i];
		j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
		
		array[j + 1] = current;
    }
}

// merge sort logic

const _hasValue = (value) => {
    return (value !== undefined && value !== null && !Number.isNaN(value));
}

const _merge = (leftArray, rightArray) => {
    let leftPointer = 0;
    let rightPointer = 0;
    let leftValue;
    let rightValue;
    let leftPointerInRange;
    let rightPointerInRange;
    const merged = [];
    const nonValueSortOrder = [null, undefined];

    while (merged.length < (leftArray.length + rightArray.length)) {
        leftPointerInRange = leftPointer < leftArray.length;
        rightPointerInRange = rightPointer < rightArray.length;
        leftValue = leftArray[leftPointer];
        rightValue = rightArray[rightPointer];
        if (leftPointerInRange && rightPointerInRange) {
            if (_hasValue(leftValue) && _hasValue(rightValue)) {
                if (leftValue <= rightValue) {
                    merged.push(leftValue);
                    leftPointer++;
                } else {
                    merged.push(rightValue);
                    rightPointer++;
                }
            } else if (_hasValue(leftValue)) {
                merged.push(leftValue);
                leftPointer++;
            } else if (_hasValue(rightValue)) {
                merged.push(rightValue);
                rightPointer++;
            } else {
                const nonValueLeft = nonValueSortOrder.indexOf(leftValue);
                const nonValueRight = nonValueSortOrder.indexOf(rightValue);
                if (nonValueLeft <= nonValueRight) {
                    merged.push(leftValue);
                    leftPointer++;
                } else {
                    merged.push(rightValue);
                    rightPointer++;
                }
            }
        } else if (leftPointerInRange) {
            merged.push(leftValue);
            leftPointer++;
        } else {
            merged.push(rightValue);
            rightPointer++;
        }
    }

    return merged;
}

const mergeSort = (array) => {
    if (array.length < 2) {
        return array;
    }

    const middleIndex = Math.floor(array.length / 2);

    const left = array.slice(0, middleIndex);
    const right = array.slice(middleIndex);

    array = _merge(
        mergeSort(left),
        mergeSort(right)
    );

    return array;
}

// move ideal pivot value into index 0
const _preparePivot = (array, comparisonFn, low, high) => {
    const mid = Math.floor((low + high)/2);
    if(comparisonFn(array[low], array[mid])) {
		[array[low], array[mid]] = [array[mid], array[low]];
	}
	if(comparisonFn(array[low], array[high])) {
		[array[low], array[high]] = [array[high], array[low]];
	}
	if(comparisonFn(array[mid], array[high])) {
		[array[mid], array[high]] = [array[high], array[mid]];
	}
	
	[array[low], array[mid]] = [array[mid], array[low]];
}

//first attempt at quick sort pivot logic - issue: approaches O(n^2) when input array contains lots of duplicates, due to imbalanced partition approach.
/**
const _quickSortPivot = (array, swapConditionFn, low, high) => {
	_preparePivot(array, low, high);
	let pivotIndex = low;
    let pointerIndex = high;
    let leftIndex;
    let rightIndex;
    let pointerDirection;
    let temp;

    while (pivotIndex !== pointerIndex) {
        // based on position of pointer relative to pivot, track right/left indexes
        // pointer direction pre-calculated to ensure it always moves towards pivot
        if (pivotIndex < pointerIndex) {
            leftIndex = pivotIndex;
            rightIndex = pointerIndex;
            pointerDirection = -1;
        } else {
            leftIndex = pointerIndex;
            rightIndex = pivotIndex;
            pointerDirection = 1;
        }

        if (swapConditionFn(array[leftIndex], array[rightIndex])) {
            [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];
            temp = pivotIndex;
            pivotIndex = pointerIndex;
            pointerIndex = temp;
            // when pointer and pivot swap, pointer movement direction must be reversed
            pointerDirection = pointerDirection * -1;
        }

        pointerIndex += pointerDirection;
    }
	
	return pivotIndex;
}
**/

// pivot approach #2, using 3 way "Dutch Flag" algorithm approach to group and skip pivot duplicates
const _threeWayPivot = (array, comparisonFn, low, high) => {
	_preparePivot(array, comparisonFn, low, high);
	
	const pivotValue = array[low];
	let lt = low;
	let gt = high;
	let i = low + 1;
	
	while(i <= gt) {
		if(comparisonFn(array[i], pivotValue)) {
		    [array[lt], array[i]] = [array[i], array[lt]];
		    i++;
			lt++;
		} else if (comparisonFn(pivotValue, array[i])) {
			[array[i], array[gt]] = [array[gt], array[i]];
			gt--;
		} else {
			i++;
		}
	}
	
	return [lt, gt];
}

// offer optional comparisonFn param allows user customizability
// primitive asc by default
const quickSort = (array, comparisonFn = ((v1, v2) => v1 > v2), low = 0, high = null) => {
    if (!Array.isArray(array)) {
        return false;
    }
    
    if(high === null) {
        high = array.length - 1;
    }
    
    if(high - low < 1) {
        return;
    }

    const [lt, gt] = _threeWayPivot(array, comparisonFn, low, high);

    const left = quickSort(array, comparisonFn, low, lt - 1);
    const right = quickSort(array, comparisonFn, gt + 1, high);
}

export {
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSort,
	quickSort
};