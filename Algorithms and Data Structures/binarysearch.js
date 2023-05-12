
// If target is in array, return true, otherwise return false.
function binarySearch(array, target) {
  return binarySearchRecursive(array, target, 0, array.length);
}

function binarySearchRecursive(array, target, start, end) {
  console.log("binarySearchRecursive called!")
  console.log("start: " + start)
  console.log("end: " + end)
  if (start > end) {
    return false;
  }
  const mid = Math.floor((start + end) / 2);
  console.log("mid: " + mid)

  const valueAtMid = array[mid];
  console.log("valueAtMid: " + valueAtMid)
  if (valueAtMid === target) {
    return true
  }
  if (valueAtMid < target) {
    console.log("I'm going to call binarySearchRecursive with start " + (mid+1) + "and end " + end)
    let result = binarySearchRecursive(array, target, mid + 1, end)
    console.log("I got a result!")
    return result
  }
  if (valueAtMid > target) {
    console.log("I'm going to call binarySearchRecursive with start " + start + "and end " + (mid-1))
    let result = binarySearchRecursive(array, target, start, mid - 1)
    console.log("I got a result!")
    return result
  }
}

//console.log(binarySearch([1, 3, 4, 6, 9, 11, 15, 21, 32, 45], 15))

/*
[1, 3, 4, 6, 9, 11, 15, 21, 32, 45]
target: 15

binarySearchRecursive(array, 15, 0, 10)
mid = index 5
valueAtMid = 11
return binarySeachRecursive(array, 15, 6, 10)

binarySeachRecursive(array, 15, 6, 10)
mid = 8
valueAtMid = 32
return binarySeachRecursive(array, 15, 6, 7)

binarySeachRecursive(array, 15, 6, 7)
mid = 6
valueAtMid = 15
return true


[1, 3, 4, 6, 9, 11, 15, 21, 32, 45]
 s              m                  e

[1, 3, 4, 6, 9, 11, 15, 21, 32, 45]
                     s      m      e

[1, 3, 4, 6, 9, 11, 15, 21, 32, 45]
                     s  e
                     m
*/