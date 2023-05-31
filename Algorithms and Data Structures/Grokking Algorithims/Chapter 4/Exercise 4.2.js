// Write a recursive function to count the numbers of items in a list

function countElements(list) {
	// Base case: if the list is empty, return 0
	if (list.length === 0) {
		return 0;
	}

	// Recursive case: count the first element and recursively count the rest of the list
	return 1 + countElements(list.slice(1));
}

// Example usage
const myList = [1, 2, 3, 4, 5];
const count = countElements(myList);
console.log('Number of elements:', count);

// The countElements function takes a list as an argument.

// It checks for the base case: if the list is empty (has a length of 0), it returns 0.

// In the recursive case, it adds 1 (for the current element) to the result of recursively calling countElements on the remaining part of the list (list.slice(1)).

// The recursive call is made with a smaller list obtained by slicing the original list starting from the second element.

// The recursive calls continue until the base case is reached when the list becomes empty.

// The example usage demonstrates how to use the countElements function with an array [1, 2, 3, 4, 5] and logs the result to the console.
