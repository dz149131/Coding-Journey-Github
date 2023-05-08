def recursive_binary_search(list, target):
    if len(list) == 0:
        return False
    else:
        midpoint = (len(list))//2

        if list[midpoint] == target:
            return True
        else:
            if list[midpoint] < target:
                return recursive_binary_search(list[midpoint+1:], target)
            else:
                return recursive_binary_search(list[:midpoint], target)


def verify(result):
    print("Target found: ", result)


numbers = [1, 2, 3, 4, 5, 6, 7, 8]
result = recursive_binary_search(numbers, 12)
verify(result)

result = recursive_binary_search(numbers, 6)
verify(result)

# The code defines a function called recursive_binary_search that takes a sorted list and a target element as arguments.
# The function first checks if the list is empty. If it is, it returns False to indicate that the target element is not present.
# If the list is not empty, the function calculates the midpoint index of the list using the formula (len(list))//2.
# If the midpoint element of the list is equal to the target element, the function returns True to indicate that the target element is present.
# If the midpoint element is less than the target element, the function recursively calls itself with the right half of the list as the new input list and the original target element.
# If the midpoint element is greater than the target element, the function recursively calls itself with the left half of the list as the new input list and the original target element.
# The function continues to recursively call itself with smaller and smaller sublists until it either finds the target element or determines that it is not present in the list.
# The code also defines a function called verify that takes a boolean result as an argument and prints a message indicating whether the target element was found or not.
# Finally, the code creates a sorted list of numbers and calls the recursive_binary_search function twice: once with a target value of 12 (which is not present in the list), and once with a target value of 6 (which is present in the list).
# The boolean result of each search is stored in a variable called result, which is then passed to the verify function to print a message indicating whether the target element was found in the list or not.
