// Reverse Integer

// Share
// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

const reverse = function(x) {
    let result
    if(x>=0){
        let number = x.toString().split("").reverse().join("")
        result= Number(number)
    }else if (x<0){
        x=x*(-1)
        number = x.toString().split("").reverse().join("")
        result= (-1)*Number(number)
    }
    
    return result >-(2**31) && result < 2**31 -1 ? result : 0
        
};
