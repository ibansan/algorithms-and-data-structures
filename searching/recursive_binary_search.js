function recursive_binary_search(arr, target) {
  if (arr.length === 0) {
    return NaN;
  } else {
    var first = 0;
    var last = arr.length - 1;
    var mid_point = Math.floor((first + last) / 2);

    if (arr[mid_point] === target) {
      return mid_point;
    } else if (arr[mid_point] < target) {
      return recursive_binary_search(arr.slice(mid_point + 1), target);
    } else {
      return recursive_binary_search(arr.slice(0, mid_point), target);
    }
  }
}

var numbers = [1, 21, 35, 46, 51, 64, 78, 81, 95];
var result = recursive_binary_search(numbers, 21);
console.log(result);

/**
 * Time complexity: O(log n)
 * Space complexity: O(log n)
 */
