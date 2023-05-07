function recursiveBinarySearch(array, target, left = 0, right = array.length - 1) {
	// Base case: target not found in array
	if (left > right) {
		return -1;
	}

	// Find the middle index of the current subarray
	const mid = Math.floor((left + right) / 2);

	// If the middle element is the target, return its index
	if (array[mid] === target) {
		return mid;
	}

	// If the middle element is less than the target,
	// search the right half of the array
	if (array[mid] < target) {
		return recursiveBinarySearch(array, target, mid + 1, right);
	}

	// If the middle element is greater than the target,
	// search the left half of the array
	if (array[mid] > target) {
		return recursiveBinarySearch(array, target, left, mid - 1);
	}
}
