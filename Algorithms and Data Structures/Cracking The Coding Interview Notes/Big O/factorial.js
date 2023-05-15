// RUNTIME : O(n)
// The runtime of this code is O(n) because it will call the function recursively n times before reaching the base case where n is 0. Each recursive call is a constant time operation (i.e., performing multiplication and subtraction), so the overall time complexity is linear in terms of n.

function factorial(n) {
	if (n < 0) {
		return -1;
	} else if (n == 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}
// EX:
factorial(4);
4 * factorial(3);
4 * (3 * factorial(2));
4 * (3 * (2 * factorial(1)));
4 * (3 * (2 * (1 * factorial(0))));
4 * (3 * (2 * (1 * 1)));
24;

// The function works by recursively calling itself with an argument that is one less than the previous call until it reaches the base case of n = 0, at which point it returns 1.

// The previous function call then multiplies its own n value by the returned value from the current call.
