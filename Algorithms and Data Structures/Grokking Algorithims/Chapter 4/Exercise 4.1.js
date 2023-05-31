// Write a code for a sum function

function calculateSum(numbers) {
	let sum = 0;

	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}

	return sum;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const result = calculateSum(numbers);
console.log('Sum:', result);

// The calculateSum function takes an array of numbers as an argument.

// It initializes a variable sum to 0, which will store the cumulative sum.

// It uses a for loop to iterate over each element in the numbers array.

// Inside the loop, it adds each number to the sum variable.

// Finally, it returns the sum as the result.

// The example usage demonstrates how to use the calculateSum function with an array [1, 2, 3, 4, 5] and logs the result to the console
