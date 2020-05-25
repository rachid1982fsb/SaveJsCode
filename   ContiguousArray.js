// Contiguous Array
// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// Example 1:
// Input: [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
// Example 2:
// Input: [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Note: The length of the given binary array will not exceed 50,000.

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
const findMaxLength = function(nums) {
    let counts = {0: -1};
    let count = 0;
    max = 0;
    for (let i = 0; i < nums.length; i += 1) {
      nums[i] === 0 ? count -= 1 : count += 1;
  
      if (counts[count] != null) {
        max = Math.max(max, i - counts[count])
      } else {
        counts[count] = i;
      }
    }
    return max;
  };
  