function binarySearch(array, key) {
	let left = 0;
	let right = array.length - 1;
	while (left <= right) {
		const mid = left + Math.floor((right - left) / 2);
		if (array[mid] === key) {
			return mid;
		}
		if (array[mid] < key) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}

// The function takes two arguments: an array and a key value to search for.
// It then initializes two variables left and right that represent the leftmost and rightmost indices of the array.
// It then enters a while loop that continues as long as the left index is less than or equal to the right index.
// Inside the loop, it computes the midpoint index using the formula (left + right) / 2, and rounds down to the nearest integer using Math.floor().
// It then checks if the value at the midpoint index is equal to the target key. If it is, the function returns the midpoint index.
// If the value at the midpoint index is less than the target key, the function updates the left index to be one more than the midpoint, and continues searching the right half of the array.
// If the value at the midpoint index is greater than the target key, the function updates the right index to be one less than the midpoint, and continues searching the left half of the array.
// If the target value is not found in the array, the function returns -1.

// This function implements a binary search algorithm, which is a more efficient way to search sorted arrays compared to linear search. It works by repeatedly dividing the search interval in half, and discarding the half that cannot contain the target value until the target value is found, or the interval becomes empty.
