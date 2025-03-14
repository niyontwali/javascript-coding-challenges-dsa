// 5. Find the Most Frequent Element in an Array

// const mostFrequent = (arr) => {
//   frequencyObject = {};

//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     if (frequencyObject[item]) {
//       frequencyObject[item] += 1;
//     } else {
//       frequencyObject[item] = 1;
//     }
//   }

//   let mostFrequent = arr[0];
//   let maxCount = 0;

//   const keys = Object.keys(frequencyObject);
//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     if (frequencyObject[key] > maxCount) {
//       maxCount = frequencyObject[key];
//       mostFrequent = key;
//     }
//   }

//   return mostFrequent;

// };

// console.log(mostFrequent([1, 3, 4, 2, 5])); // Output: 2
// console.log(mostFrequent(["apple", "banana", "apple", "orange", "apple"])); // Output: apple


// You can check also if multiple have the same frequency
const mostFrequent = (arr) => {
  let frequencyObject = {};

  // Step 1: Build frequency map
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    frequencyObject[item] = (frequencyObject[item] || 0) + 1;
  }

  let mostFrequentElements = [];
  let maxCount = 0;

  // Step 2: Find the max frequency
  const keys = Object.keys(frequencyObject);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (frequencyObject[key] > maxCount) {
      maxCount = frequencyObject[key];
      mostFrequentElements = [key]; // Reset with new most frequent element
    } else if (frequencyObject[key] === maxCount) {
      mostFrequentElements.push(key); // Add to the list of most frequent elements
    }
  }

  // Step 3: Check for ties
  if (mostFrequentElements.length > 1) {
    return `There is a tie between: ${mostFrequentElements.join(", ")}`;
  }

  return mostFrequentElements[0];
};

// Test cases
console.log(mostFrequent([1, 3, 4, 2, 5])); // Output: There is a tie between: 1, 3, 4, 2, 5
console.log(mostFrequent([1, 3, 4, 2, 5, 3])); // Output: 3
console.log(mostFrequent(["apple", "banana", "apple", "orange", "apple"])); // Output: apple
console.log(mostFrequent(["apple", "banana", "cherry"])); // Output: There is a tie between: apple, banana, cherry
