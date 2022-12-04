function linear_search(arr, target) {
  // Returns the index position of target if found, else returns NaN.
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return NaN;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var result = linear_search(numbers, 9);
console.log(result);
