// // Subarray Sum Equals K
// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:

// Input:nums = [1,1,1], k = 2
// Output: 2
 

// Constraints:

// The length of the array is in range [1, 20,000].
// The range of numbers i

// * @param {number[]} nums
// * @param {number} k
// * @return {number}
// */


// // Input:nums = [1,1,1,3,2,0], k = 2
// // Output: 2

var subarraySum = function(nums, k) 
{
       var len = nums.length;
       if(len === 0)
               return 0;

       /* Build the ap. */
       var map = new Map();
       var sum = 0;
       for(let i=0; i<len; i++)
       {
               let num = nums[i];
               sum += num;
               let item = map.get(sum);
               if(item === undefined)
                       map.set(sum,[i]);
               else
               {
                       item.push(i);
                       map.set(sum,item);
               }
       }
       
       /* Count the # of sums matching each item's sum downstream. */
       var matched = 0;
       sum = 0;
       for(let i=0; i<nums.length; i++)
       {
               let key = k+sum;
               sum += nums[i];

               let item = map.get(key);
               if(item === undefined)
                       continue;
              console.log('ind: '+i+', matching '+key);
               while((item.length > 0) && (item[0] < i))
               {
                       item.shift();
               }
               if(item.length > 0)
               {
                       map.set(key,item);
                       matched += item.length;
               }
               else
                       map.delete(key);
       }

       return matched;
};