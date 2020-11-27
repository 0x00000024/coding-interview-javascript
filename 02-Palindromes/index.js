// --- Directions
// Given a string, return true if the string is a 02-Palindromes
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a 02-Palindromes.
// --- Examples:
//   02-Palindromes("abba") === true
//   02-Palindromes("abcdefg") === false

// Solution 1 - 0.743s
// function palindrome(str) {
//   for (let i = 0, j = str.length - 1; i < str.length / 2; ++i, --j) {
//     if (str[i] !== str[j]) {
//       return false;
//     }
//   }
//   return true;
// }

// Solution 2 - 0.679s
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//
//   if (reversed === str) return true;
//
//   return false;
// }

// Solution 3 - 0.524s
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - 1 - i];
  });
}

module.exports = palindrome;
