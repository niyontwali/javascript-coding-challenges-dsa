// 2. Reverse a String
const reverseString = (str) => {
  return str.split('').reverse().join('');
};

const result = reverseString('Hello');
console.log(result)