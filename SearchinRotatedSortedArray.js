// Search in Rotated Sorted Array

// Solution
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
var search = function(nums, target) {
    //     if(target>nums[0]){
    //         return nums.findIndex(n => n===target)
    //     }else{
    //         let i=nums.length-1
    //         let result=nums[i]
    //         if(result===target) return i
            
    //         while(result != target && i>-1){
    //             i--
    //             result=nums[i]
    //             console.log(i)
    //         }
    //         return i 
    //     }
        
        return nums.findIndex(n => n===target)
        
    };