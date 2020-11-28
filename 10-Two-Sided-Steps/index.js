// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution 1 - 0.509s
function pyramid(n) {
  for (let i = 0; i < n; ++i) {
    let rowString = '';
    const rowNumber = i + 1;
    const poundNumber = 2 * rowNumber - 1;
    const spaceNumber = 2 * n - 1 - poundNumber;
    for (let j = spaceNumber / 2; j > 0; --j) {
      rowString += ' ';
    }
    for (let k = poundNumber; k > 0; --k) {
      rowString += '#';
    }
    for (let l = spaceNumber / 2; l > 0; --l) {
      rowString += ' ';
    }
    console.log(rowString);
  }
}

// TODO midpoint solution

module.exports = pyramid;
