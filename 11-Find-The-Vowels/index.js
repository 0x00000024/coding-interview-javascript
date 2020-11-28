// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1 - 0.477s
// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   const cleanedString = str.replace(/[^\w]/g, '').toLowerCase();
//   let vowelNumber = 0;
//   for (const char of cleanedString) {
//     for (const vowel of vowels) {
//       if (char === vowel) {
//         ++vowelNumber;
//       }
//     }
//   }
//   return vowelNumber;
// }

// Solution 2 - 0.469s
// function vowels(str) {
//   const vowels = 'aeiou';
//   let vowelNumber = 0;
//   for (const char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       ++vowelNumber;
//     }
//   }
//   return vowelNumber;
// }

// Solution 3 - 0.468s
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
