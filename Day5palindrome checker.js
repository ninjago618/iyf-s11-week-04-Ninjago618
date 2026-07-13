function isPalindromeBasic(str) {
  const normalized = str.toLowerCase().replace(/\s+/g, "");
  return normalized === normalized.split("").reverse().join("");
}

// Tests
console.log(isPalindromeBasic("racecar"));                       // true
console.log(isPalindromeBasic("A man a plan a canal Panama"));   // true
console.log(isPalindromeBasic("hello"));                         // false
