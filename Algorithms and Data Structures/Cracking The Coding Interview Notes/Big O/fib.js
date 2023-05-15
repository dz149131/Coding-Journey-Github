// RUNTIME : 0(1.6^N) || O(2^N)

function fib(n) {
	if (n <= 0) return 0;
	else if (n == 1) return 1;
	return fib(n - 1) + fib(n - 2);
}

// VISUAL:
            fib(5)
        /            \
    fib(4)              fib(3)
    /        \         /      \
fib(3)     fib(2)   fib(2)  fib(1)
/     \       /   \
fib(2)  fib(1)  fib(1) fib(0)
/    \
fib(1) fib(0)

// The code defines a recursive function named "fib" that takes an integer "n" as input and returns the n-th number in the Fibonacci sequence.
// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding numbers, starting from 0 and 1.
// The function first checks if "n" is less than or equal to 0. If it is, it returns 0. If "n" is equal to 1, it returns 1.
// Otherwise, the function recursively calls itself with "n-1" and "n-2" as arguments and returns the sum of those two values.
// The runtime of the "fib" function is O(2^n) because in the worst-case scenario, each recursive call will result in two more recursive calls, leading to an exponential growth in the number of function calls.

// RUNTIME : 0(1.6^N) || O(2^N)

function allFib(n) {
	for (let i = 0; i < n; i++) {
		console.log(i + ': ' + fib(i));
	}
}

function fib(n) {
	if (n <= 0) return 0;
	else if (n == 1) return 1;
	return fib(n - 1) + fib(n - 2);
}

// The code defines a function named allFib that takes an integer n as input
// It contains a for loop that iterates from 0 to n-1
// In each iteration, the function calls another function named fib with the current iteration number as input and prints the result to the console
// The fib function is a recursive function that calculates the nth Fibonacci number
// It checks if n is less than or equal to 0 and returns 0 if true
// It checks if n is equal to 1 and returns 1 if true
// Otherwise, it recursively calls itself with n-1 and n-2 as arguments and returns the sum of those two values
// The runtime of the fib function is O(2^n) in the worst case due to the exponential growth of function calls, but in practice, it is lower due to memoization and other optimization techniques.