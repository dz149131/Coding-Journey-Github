// RUNTIME : O(n!)

function permutation(str) {
	permutationHelper(str, '');
}

function permutationHelper(str, prefix) {
	if (str.length == 0) {
		console.log(prefix);
	} else {
		for (let i = 0; i < str.length; i++) {
			let rem = str.substring(0, i) + str.substring(i + 1);
			permutationHelper(rem, prefix + str.charAt(i));
		}
	}
}
// VISUAL :

//                             permutation("abc", "")
//                     /                  |                  \
//         permutation("bc", "a")    permutation("ac", "b")    permutation("ab", "c")
//         /         \              /           \              /           \
// permutation("c", "ab")  permutation("b", "ac")  permutation("c", "ba")  permutation("a", "bc")
//     |           |              |           |              |           |
//     "abc"     "acb"           "bac"      "bca"           "cab"      "cba"

// The code defines a function called permutation() which takes a string as input.
// The function calls another function called permutationHelper() with the same string and an empty string as parameters.
// The permutationHelper() function takes the input string and a prefix as parameters.
// The function first checks if the length of the input string is 0. If so, it prints the prefix.
// If the length of the string is not 0, the function uses a for loop to iterate through each character of the string.
// The function creates a new string by removing the character at the current index of the loop from the input string.
// The function then calls itself recursively with the new string and the prefix plus the character at the current index appended to it.
// This recursive process generates all possible permutations of the original string.
// The function has a time complexity of O(n!) because it generates all possible permutations of a string of length n.
