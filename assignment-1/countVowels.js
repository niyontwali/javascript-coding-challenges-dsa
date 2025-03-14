// 4. Count the Number of Vowels in a String
const countVowels = (str) => {
  let numberOfVowels = 0;
  for (let i = 0; i < str.length; i++) {
    if (['a', 'i', 'u', 'o', 'e'].includes(str[i].toLowerCase())) {
      numberOfVowels += 1;
    }
  }
  return numberOfVowels;
};

console.log(countVowels("Hello!")); // Expected Output: 2
