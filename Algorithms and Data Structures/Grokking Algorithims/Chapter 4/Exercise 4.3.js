// Find the maximum number in a list

function findMaxNumber(list) {
	// Base case: if the list is empty, return undefined
	if (list.length === 0) {
		return undefined;
	}

	// Recursive case: compare the first element with the maximum of the rest of the list
	const restMax = findMaxNumber(list.slice(1));

	// If the maximum of the rest is undefined or less than the first element, return the first element
	if (restMax === undefined || list[0] > restMax) {
		return list[0];
	}

	// Otherwise, return the maximum of the rest of the list
	return restMax;
}

// Example usage
const myList = [2, 5, 1, 9, 3];
const maxNumber = findMaxNumber(myList);
console.log('Maximum number:', maxNumber);

// The findMaxNumber function takes a list as an argument.

// It checks for the base case: if the list is empty (has a length of 0), it returns undefined.

// In the recursive case, it recursively finds the maximum of the remaining part of the list (list.slice(1)) and stores it in the restMax variable.

// It then compares the first element of the list with restMax.

// If restMax is undefined or less than the first element, it means the first element is the maximum, so it returns the first element.

// Otherwise, it returns restMax, indicating that the maximum is found in the remaining part of the list.

// The example usage demonstrates how to use the findMaxNumber function with an array [2, 5, 1, 9, 3] and logs the result to the console.
