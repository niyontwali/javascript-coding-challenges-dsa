// 3. Check for Palindrome

const isPalindrome = (word) => {
  const lowerCaseWord = word.toLowerCase()
  const reversedString = lowerCaseWord.split('').reverse().join('')
  return lowerCaseWord === reversedString
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
console.log(isPalindrome("Madam"));   // Output: true

