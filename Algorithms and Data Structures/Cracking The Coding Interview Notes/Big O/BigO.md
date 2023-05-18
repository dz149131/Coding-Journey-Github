- [Big-O Notation](#big-o-notation)
  - [Constant Time:](#constant-time)
  - [Linear Time:](#linear-time)
  - [Logarithmic Time:](#logarithmic-time)
  - [Linearithmic Time:](#linearithmic-time)
  - [Quadratic Time:](#quadratic-time)
  - [Cubic Time:](#cubic-time)
  - [Exponential Time:](#exponential-time)
  - [Factorial Time:](#factorial-time)

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

> Binary Search:

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

[Link to more info in this readme.md](readme.md)

$$
$$
