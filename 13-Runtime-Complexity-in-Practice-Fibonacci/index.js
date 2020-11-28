// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution 1 - 0.561s
function fib(n) {
  let first = 0;
  let second = 1;
  let next = null;
  let count = 1;
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else {
    while (count !== n) {
      next = first + second;
      first = second;
      second = next;
      ++count;
    }
  }
  return next;
}

// TODO Recursion

module.exports = fib;
