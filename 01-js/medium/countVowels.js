/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const strArray = str.toLowerCase().split("");
  const vowelArray = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (let character of strArray) {
    if (vowelArray.includes(character)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

module.exports = countVowels;
