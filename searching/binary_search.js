function binary_search(arr, target) {
  var first = 0;
  var last = arr.length - 1;

  while (first <= last) {
    var mid_point = Math.floor(first + last);

    if (arr[mid_point] == target) {
      return mid_point;
    } else if (arr[mid_point] < target) {
      first = mid_point + 1;
    } else {
      last = mid_point - 1;
    }
  }

  return NaN;
}

var numbers = [1, 12, 39, 43, 56, 64, 72, 81, 90, 110, 112, 129, 136];
var result = binary_search(numbers, 112);
console.log(result);
