// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution 1 - 0.595 s
function maxChar(str) {
  const freq = {};
  for (const char of str) {
    if (!freq[char]) {
      freq[char] = 1;
    } else {
      ++freq[char];
    }
  }

  let maxNum = 0;
  let maxChar = null;
  for (const char in freq) {
    if (freq[char] > maxNum) {
      maxNum = freq[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
