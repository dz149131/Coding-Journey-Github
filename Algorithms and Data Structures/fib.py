memory = {}

# memoization
# dynamic programming

def fib(n):
  if n==1:
    return 1
  if n==2:
    return 1
  if n in memory:
    return memory[n]
  answer = fib(n-1) + fib(n-2)
  memory[n] = answer
  return answer


favorite_animals = {
  "Cameron": "Dog",
  "John": "Cat"
}

print(favorite_animals["Cameron"])

#1 1 2 3 5 8
#fib(50) = fib(49) + fib(48)

#fib(49) = fib(48) + fib(47)

#fib(48) = fib(47) + fib(46)