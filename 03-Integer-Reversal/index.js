// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution 1 - 0.562s
// function reverseInt(n) {
//   const reversed = Math.abs(n).toString().split('').reverse().join('');
//   return n < 0 ? +reversed * -1 : +reversed;
// }

// Solution 2 - 0.507s
function reverseInt(n) {
  const reversed = Math.abs(n).toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
