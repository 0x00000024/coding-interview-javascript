// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution 1 - 0.497s
function steps(n) {
  for (let i = 0; i < n; ++i) {
    const rowNumber = i + 1;
    let rowString = '';
    for (let j = rowNumber; j > 0; --j) {
      rowString += '#';
    }
    for (let k = n - rowNumber; k > 0; --k) {
      rowString += ' ';
    }
    console.log(rowString);
  }
}

// TODO Recursion

module.exports = steps;
