function linear_search(arr, target) {
  // Returns the index position of target if found, else returns NaN.
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return NaN;
}

const result = linear_search([8, 12, 7, 5, 1, 23], 28);
console.log(result);
