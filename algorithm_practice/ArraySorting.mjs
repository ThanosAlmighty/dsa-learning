const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length-i; j++) { 
      if(array[j] > array[j+1]) {
        //Swap the numbers
        let temp = array[j]
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
}

const selectionSort = (array) => {
    let indexOfSmallest;
    let temp;
    for (let i = 0; i < array.length; i++) {
        indexOfSmallest = i;
        for (let j = i+1; j < array.length; j++) { 
            if(array[j] < array[indexOfSmallest]) {
                indexOfSmallest = j;
            }
        }
        temp = array[i];
        array[i] = array[indexOfSmallest];
        array[indexOfSmallest] = temp;
    }
}

const insertionSort = (array) => {
    let temp;
	let j;
    for (let i = 1; i < array.length; i++) {
		j = i;
        while (j > 0 && array[j] < array[j - 1]) {
			temp = array[j];
			array[j] = array[j-1];
			array[j-1] = temp;
			j--;
		}
    }
}

// merge sort logic

const hasValue = (value) => {
	return (value !== undefined && value !== null && !Number.isNaN(value));
}

const merge = (leftArray, rightArray) => {
	let leftPointer = 0;
	let rightPointer = 0;
	let leftValue;
	let rightValue;
	let leftPointerInRange;
	let rightPointerInRange;
	const merged = [];
	const nonValueSortOrder = [null, undefined];
	
	while(merged.length < (leftArray.length + rightArray.length)) {
		leftPointerInRange = leftPointer < leftArray.length;
		rightPointerInRange = rightPointer < rightArray.length;
		leftValue = leftArray[leftPointer];
		rightValue = rightArray[rightPointer];
		if(leftPointerInRange && rightPointerInRange) {
			if(hasValue(leftValue) && hasValue(rightValue)) {
				if(leftValue <= rightValue) {
					merged.push(leftValue);
					leftPointer++;
				} else {
					merged.push(rightValue);
					rightPointer++;
				}
			} else if (hasValue(leftValue)) {
				merged.push(leftValue);
				leftPointer++;
			} else if (hasValue(rightValue)) {
				merged.push(rightValue);
				rightPointer++;
			} else {
				const nonValueLeft = nonValueSortOrder.indexOf(leftValue);
				const nonValueRight = nonValueSortOrder.indexOf(rightValue);
				if(nonValueLeft <= nonValueRight) {
					merged.push(leftValue);
					leftPointer++;
				} else {
					merged.push(rightValue);
					rightPointer++;
				}
			}
		} else if(leftPointerInRange) {
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
	if(array.length < 2) {
		return array;
	}
	
	const r = array.length % 2;
	const middleIndex = (array.length - r)/2;
	
	const leftArray = array.slice(0, middleIndex);
	const rightArray = array.slice(middleIndex);
	
	array = merge(
		mergeSort(leftArray),
		mergeSort(rightArray)
	);
	
	return array;
}

export {bubbleSort, selectionSort, insertionSort, mergeSort};