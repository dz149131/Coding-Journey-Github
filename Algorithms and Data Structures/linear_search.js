function linearSearch(array, key) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === key) {
			return i;
		}
	}
	return -1;
}

// The function takes two arguments: an array and a key value to search for.
// It then iterates through the array using a for loop, checking each element in turn.
// If the current element being checked is equal to the key value being searched for, the function returns the index of that element in the array.
// If the key value is not found in the array, the function returns -1.
// This function implements a simple linear search algorithm that works by comparing each element in the array to the key value in sequence. It is not particularly efficient, especially for large arrays, but it is a straightforward and easy-to-implement approach for small datasets.
