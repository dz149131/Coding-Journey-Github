- [Big-O Notation](#big-o-notation)
  - [Constant Time:](#constant-time)
  - [Linear Time:](#linear-time)
  - [Logarithmic Time:](#logarithmic-time)
  - [Linearithmic Time:](#linearithmic-time)
  - [Quadratic Time:](#quadratic-time)
  - [Cubic Time:](#cubic-time)
  - [Exponential Time:](#exponential-time)
  - [Factorial Time:](#factorial-time)
- [Static and Dynamic Arrays](#static-and-dynamic-arrays)
  - [What is an Array?:](#what-is-an-array)
  - [When and where is a Array used?:](#when-and-where-is-a-array-used)
  - [Complexity:](#complexity)
  - [Static array usage example:](#static-array-usage-example)
  - [Dynamic Array implementation details:](#dynamic-array-implementation-details)
  - [Code Implementation:](#code-implementation)

# Big-O Notation

> n - the size of the input  
> Complexity ordered in from smallest to largest
> ![Big O Cheat Sheet](big-o-cheat-sheet.png)

> Let _f_ be a function that describes the running time of a particular algorithm for an input of size n:
>
> $$
> f(n) = 7log(n)^3 + 15n^2 + 2n^3 + 8
> $$
>
> $$
> O(f(n)) = O(n^3)
> $$

---

## Constant Time:

$$O(1)$$

- **Does not depend on $n$**

> Example 1:

```js
let i = 0;
while (i < 11) {
	i = i + 1;
}
```

> Example 2:

```js
a = 1;
b = 2;
c = a + 5 * b;
```

---

## Linear Time:

$$(O)n$$

> Example 1:

```js
let i = 0;
while (i < n) {
	i = i + 1;
}
```

$$f(n) = n$$
$$O(f(n)) = O(n)$$

> Example 2:

```js
let i = 0;
while (i < n) {
	i = i + 3;
}
```

$$f(n) = n/3$$
$$O(f(n)) = O(n)$$

---

## Logarithmic Time:

$$O(log(n))$$

> Example 1 (Binary Search):

```js
let low = 0;
let high = n - 1;

while (low <= high) {
	let mid = Math.floor((low + high) / 2);

	if (array[mid] === value) {
		return mid;
	} else if (array[mid] < value) {
		low = mid + 1;
	} else {
		high = mid - 1;
	}
}

return -1;
```

$$O(log^2(n)) = O(log(n))$$

> Example 2:

```js
let i = 0;
while (i < n) {
	let j = 0;
	while (j < 3 * n) {
		j = j + 1;
	}
	j = 0;
	while (j < 2 * n) {
		j = j + 1;
		i = i + 1;
	}
}
```

$$f(n) = n* (3n + 2n) = 5n^2$$
$$O(f(n)) = 0(n^2)$$

---

## Linearithmic Time:

$$O(log(n))$$

---

## Quadratic Time:

$$O(n^2)$$

> Example 1:

```js
for (let i = 0; i < n; i = i + 1) {
	for (let j = 0; j < n; j = j + 1)
}
```

- _n_ work done _n_ times is $n*n = O(n^2)$

$$f(n) = n*n = n^2$$
$$O(f(n))=O(n^2)$$

> Example 2:

```js
for (let i = 0; i < n; i = i + 1) {
	for (let j = i; j < n; j = j + 1)
}
```

- Replaced 0 with _i_
- Since $i$ goes from $[0,n]$ the amount of looping done is directly determined by what $i$ is.
- Remark that if $i=0$, we do $n$ work, if $i=1$, we do $n-1$ work, if $i=2$, we do $n-2$ work, etc...
- So the question then becomes what is :
  $$(n) + (n-1) + (n-2) + (n-3) + ... + 3 + 2 + 1$$
- Remarkably this turns out to be
  $$n(n+1)/2$$
- so,
  $$O(n(n+1)/2) = O(n^2/2 + n/2) = O(n^2)$$

---

## Cubic Time:

$$O(n^3)$$

---

## Exponential Time:

$$O(b^n), b > 1$$

---

## Factorial Time:

$$O(n!)$$

---

# Static and Dynamic Arrays

---

## What is an Array?:

> A static array is a fixed length container containing $n$ elements **indexable** from the range $[0, n-1]$
>
> > Q: What is meant by being 'indexable'?
> >
> > A: This means that each slot/index in the array can be referenced with a number

---

## When and where is a Array used?:

1. Storing and accessing sequential data
2. Temporarily storing objects
3. Used by Input Output routines as buffers
4. Lookup tables and inverse tables
5. Can be used to return multiple values from a function
6. Used in dynamic programming to cache answers to sub problems

---

## Complexity:

|  Arrays   | Static Array |     | Dynamic Array |
| :-------: | :----------: | --- | :-----------: |
|  Access   |    $O(1)$    |     |    $O(1)$     |
|  Search   |    $O(n)$    |     |    $O(n)$     |
| Insertion |     N/A      |     |    $O(n)$     |
| Appending |     N/A      |     |    $O(1)$     |
| Deletion  |     N/A      |     |    $O(n)$     |

---

## Static array usage example:

```js
let array = [44, 12, -5, 17, 6, 0, 3, 9, 100];
//			  0   1   2  3   4  5  6  7   8
array[0] = 44
array[1] = 12
array[4] = 6
array[7] = 9
array[9] => index out of bounds!
```

Elements in A are referenced by their index.
There is no other way to access elements in an array. Array indexing is zeo-based, meaning the first element is found in position zero.

---

## Dynamic Array implementation details:

- The dynamic array can grow and shrink in size

```js
let array = [34, 4];
// array.add(-7)
array = [34, 4, -7];
// array.add (34)
array = [34, 4, -7, 34];
//array.remove(4)
array = [34, -7, 34];
```

> Q: How can we implement a dynamic array?  
> A: One way is to use a static array!
>
> > 1. Create a static array with an initial capacity
> > 2. Add elements to the underlying static array, keeping track of the number of elements.
> > 3. If adding another element will exceed the capacity, then create a new static array with twice the capacity and copy the original elements into it.

![dynamic array](dynamic-array.PNG)

## Code Implementation:

```js
class DynamicArray {
	constructor(capacity = 16) {
		if (capacity < 0) throw new Error('Illegal Capacity: ' + capacity);
		this.arr = new Array(capacity);
		this.len = 0;
		this.capacity = capacity;
	}
	// The 'size' method returns the current number of elements in the array.
	size() {
		return this.len;
	}
	// The 'isEmpty' method checks if the array is empty by checking if the size is zero.
	isEmpty() {
		return this.size() === 0;
	}
	// The 'get' method returns the element at a specific index in the array.
	get(index) {
		return this.arr[index];
	}
	// The 'set' method sets the element at a specific index in the array.
	set(index, elem) {
		this.arr[index] = elem;
	}
	// The 'clear' method removes all elements from the array by setting them to null.
	clear() {
		for (let i = 0; i < this.len; i++) {
			this.arr[i] = null;
		}
		this.len = 0;
	}
	// The 'add' method adds an element to the array. If the array is already full, it doubles the capacity by creating a new array and copying the existing elements into it.
	add(elem) {
		if (this.len + 1 >= this.capacity) {
			if (this.capacity === 0) {
				this.capacity = 1;
			} else {
				this.capacity *= 2;
			}
			const new_arr = new Array(this.capacity);
			for (let i = 0; i < this.len; i++) {
				new_arr[i] = this.arr[i];
			}
			this.arr = new_arr;
		}
		this.arr[this.len++] = elem;
	}
	// The 'removeAt' method removes an element at a specified index from the array. It shifts the remaining elements to fill the gap.
	removeAt(rm_index) {
		if (rm_index >= this.len || rm_index < 0) throw new Error('IndexOutOfBoundsException');
		const data = this.arr[rm_index];
		const new_arr = new Array(this.len - 1);
		for (let i = 0, j = 0; i < this.len; i++, j++) {
			if (i === rm_index) {
				j--; // Skip over rm_index by fixing j temporarily
			} else {
				new_arr[j] = this.arr[i];
			}
		}
		this.arr = new_arr;
		this.capacity = --this.len;
		return data;
	}
	// The 'remove' method removes the first occurrence of a specified object from the array by finding its index and calling removeAt method.
	remove(obj) {
		const index = this.indexOf(obj);
		if (index === -1) return false;
		this.removeAt(index);
		return true;
	}
	// The 'indexOf' method returns the index of the first occurrence of a specified object in the array. It compares the objects using the equals method (if available) or strict equality (===).
	indexOf(obj) {
		for (let i = 0; i < this.len; i++) {
			if (obj === null) {
				if (this.arr[i] === null) return i;
			} else {
				if (obj.equals(this.arr[i])) return i;
			}
		}
		return -1;
	}
	// The 'contains' method checks if the array contains a specified object by calling the 'indexOf' method and checking if the returned index is not -1.
	contains(obj) {
		return this.indexOf(obj) !== -1;
	}
	// This code defines a special method called [Symbol.iterator] using the * symbol, indicating that it's a generator function. It allows us to create an iterator for an object. In simpler terms, it enables us to loop over the object and retrieve its values one by one.

	// Inside the iterator function:

	// It initializes a variable called index to 0.
	// It enters a while loop that continues as long as index is less than the length of the array.
	// In each iteration, it uses the yield keyword to pause the execution and return the value at the current index of the array (this.arr[index]).
	// After yielding the value, it increments index by 1 to move to the next element in the array.
	// This process repeats until it has yielded all the values in the array.
	*[Symbol.iterator]() {
		let index = 0;
		while (index < this.len) {
			yield this.arr[index];
			index++;
		}
	}
	// This code defines a toString method, which is a common method available in many JavaScript objects. It converts the object to a string representation.

	// Inside the toString method:

	// It first checks if the length of the array (this.len) is equal to 0. If so, it returns an empty string ("[]").
	// If the length is not 0, it proceeds to create a string representation of the array.
	// It initializes a variable called result to "[" to denote the beginning of the array.
	// Then, it enters a for loop that iterates over the array from the first element to the second-to-last element (i < this.len - 1).
	// In each iteration, it appends the value at the current index (this.arr[i]) followed by a comma and a space to the result string.
	// After the loop, it appends the last element of the array (this.arr[this.len - 1]) followed by "]" to close the array.
	// Finally, it returns the resulting string representation of the array.
	toString() {
		if (this.len === 0) return '[]';
		else {
			let result = '[';
			for (let i = 0; i < this.len - 1; i++) {
				result += this.arr[i] + ', ';
			}
			result += this.arr[this.len - 1] + ']';
			return result;
		}
	}
}
```

---

[Link to more info in this readme.md](readme.md)
