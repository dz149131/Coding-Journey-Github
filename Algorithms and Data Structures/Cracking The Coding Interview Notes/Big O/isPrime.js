// RUNTIME :  O(sqrt(n))
// The loop runs until x^2 <= n, which means it only needs to check divisors up to the square root of n.
// For each divisor x that evenly divides n, the function returns false and exits the loop early.
// This reduces the number of iterations needed, making the algorithm more efficient than checking every integer up to n.

function isPrime(n) {
	for (let x = 2; x * x <= n; x++) {
		if (n % x === 0) {
			return false;
		}
	}
	return true;
}

//If the number 17 is a prime number using the "isPrime" function. The function will run as follows:

// First, the function initializes a loop variable "x" to 2.
// The function checks if "x" * "x" is less than or equal to 17. Since 2 * 2 = 4 is less than 17, the loop continues.
// The function checks if 17 is divisible by "x". Since 17 % 2 = 1 (i.e., there is a remainder of 1 when 17 is divided by 2), the loop continues.
// The function increments "x" to 3.
// The function checks if "x" * "x" is less than or equal to 17. Since 3 * 3 = 9 is less than 17, the loop continues.
// The function checks if 17 is divisible by "x". Since 17 % 3 = 2, the loop continues.
// The function increments "x" to 4.
// The function checks if "x" * "x" is less than or equal to 17. Since 4 * 4 = 16 is less than 17, the loop continues.
// The function checks if 17 is divisible by "x". Since 17 % 4 = 1, the loop continues.
// The function increments "x" to 5.
// The function checks if "x" * "x" is less than or equal to 17. Since 5 * 5 = 25 is greater than 17, the loop stops.
// Since the loop has finished without finding a factor of 17 (i.e., a number other than 1 and 17 that divides 17), the function returns true. This means that 17 is a prime number.
