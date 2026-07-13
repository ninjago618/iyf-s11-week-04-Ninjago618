function largestNumberLoop(arr) {
  if (!arr.length) return null;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// Tests
console.log(largestNumberLoop([3, 7, 2, 9, 5])); // 9
console.log(largestNumberLoop([]));              // null
