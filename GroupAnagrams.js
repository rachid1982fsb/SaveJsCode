// Group Anagrams

// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */


function  sorted(word){
    return word.split("").sort().join("")
}

var groupAnagrams = function(strs) {
    let result ={}
    
    for(i in strs){
        result[sorted(strs[i])] ?  result[sorted(strs[i])].push(strs[i]) :  result[sorted(strs[i])] = [strs[i]]
    }
    return Object.values(result)
};