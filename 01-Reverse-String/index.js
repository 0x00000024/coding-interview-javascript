// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1 - 0.468s
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// Solution 2 - 0.456s
// function reverse(str) {
//   let reversed = '';
//   for (const char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// Solution 3 - 0.458s
function reverse(str) {
  return str.split('').reduce((reversed, char) => {
    return char + reversed;
  }, '');
}

module.exports = reverse;
