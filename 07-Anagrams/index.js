// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// Solution 1 - 0.482s
// function getFrequency(str) {
//   const freq = {};
//   for (const char of str) {
//     if (!freq[char]) {
//       freq[char] = 1;
//     } else {
//       ++freq[char];
//     }
//   }
//   return freq;
// }

// function anagrams(stringA, stringB) {
//   const freqA = getFrequency(stringA.replace(/[^\w]/g, '').toLowerCase());
//   const freqB = getFrequency(stringB.replace(/[^\w]/g, '').toLowerCase());
//
//   if (Object.keys(freqA).length !== Object.keys(freqB).length) {
//     return false;
//   }
//
//   for (const key of Object.keys(freqA)) {
//     if (freqA[key] !== freqB[key]) {
//       return false;
//     }
//   }
//
//   return true;
// }

// Solution 2 - 0.458s
function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;
