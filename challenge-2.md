## 1. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

### Example 1:

**Input:**
```plaintext
s = "A man, a plan, a canal: Panama"
```
**Output:**
```plaintext
true
```
**Explanation:**
```
"amanaplanacanalpanama" is a palindrome.
```

### Example 2:

**Input:**
```plaintext
s = "race a car"
```
**Output:**
```plaintext
false
```
**Explanation:**
```
"raceacar" is not a palindrome.
```

### Example 3:

**Input:**
```plaintext
s = " "
```
**Output:**
```plaintext
true
```
**Explanation:**
```
s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

### Constraints:

- `1 <= s.length <= 2 * 10^5`
- `s` consists only of printable ASCII characters.

---

## 2. Merge Sorted Array

Given an integer array `nums` sorted in non-decreasing order, remove the duplicates **in-place** such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in `nums`.

### Example 1:

**Input:**
```plaintext
nums = [1,1,2]
```
**Output:**
```plaintext
2, nums = [1,2,_]
```
**Explanation:**
```
Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

### Example 2:

**Input:**
```plaintext
nums = [0,0,1,1,1,2,2,3,3,4]
```
**Output:**
```plaintext
5, nums = [0,1,2,3,4,_,_,_,_,_]
```
**Explanation:**
```
Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

### Constraints:

- `1 <= nums.length <= 3 * 10^4`
- `-100 <= nums[i] <= 100`
- `nums` is sorted in non-decreasing order.

---

## 3. Remove Element

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` **in-place**. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

### Example 1:

**Input:**
```plaintext
nums = [3,2,2,3], val = 3
```
**Output:**
```plaintext
2, nums = [2,2,_,_]
```
**Explanation:**
```
Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

### Example 2:

**Input:**
```plaintext
nums = [0,1,2,2,3,0,4,2], val = 2
```
**Output:**
```plaintext
5, nums = [0,1,4,0,3,_,_,_]
```
**Explanation:**
```
Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

### Constraints:

- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= val <= 100`
