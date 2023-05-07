def linear_search(list, target):
    """
    Returns the index position of the target if found, else returns None
    """

    for i in range(0, len(list)):
        if list[i] == target:
            return i
    return None


def verify(index):
    if index is not None:
        print("Target found at index: ", index)
    else:
        print("Target not found in list")


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

result = linear_search(numbers, 6)
verify(result)

# The given Python code defines a function called linear_search that performs a linear search on a list to find the index position of a target element. The function takes two arguments, a list and a target element, and returns the index position of the target element if found in the list, else returns None.

# The linear_search function uses a for loop to iterate over the elements of the list. For each element, it checks if it is equal to the target element. If the element is equal to the target, the index position of the element is returned. If the target element is not found after iterating through the entire list, the function returns None.

# The code also defines another function called verify that takes an index position as an argument and prints a message indicating whether the target element was found at that index or not.

# Finally, the code creates a list of numbers and calls the linear_search function with a target value of 6. The index position of the target value is stored in a variable called result, which is then passed to the verify function to print a message indicating whether the target element was found in the list or not.
