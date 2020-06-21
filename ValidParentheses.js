// Valid Parentheses

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

var isValid = function(s) {
    if(!s) return true
    if(s.length % 2 === 1) return false 
    const opening =["(","[","{"]
    const closing = [")","]","}"]
    let stack = []
    const size = s.length
    for(let i=0; i< size; i++){
        if(opening.includes(s[i])){
            stack.push(s[i])
        }else{
            if(stack.pop() != opening[closing.indexOf(s[i])]){
                return false
            }
        }
    }
    return stack.length==0
    
};