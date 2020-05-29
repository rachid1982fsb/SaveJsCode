// divisorGame

// if Alice will lose for N, then Alice will must win for N+1, since Alice can first just make N decrease 1.
// for any odd number N, it only has odd factor, so after the first move, it will be an even number
// let's check the inference
// fisrt N = 1, Alice lose. then Alice will must win for 2.
// if N = 3, since all even number(2) smaller than 3 will leads Alice win, so Alice will lose for 3
// 3 lose -> 4 win
// all even number(2,4) smaller than 5 will leads Alice win, so Alice will lose for 5
// ...
// Therefore, Alice will always win for even number, lose for odd number.
const divisorGame = function(N) {
    return N%2===0
};

// Remove Outermost Parentheses

// A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

// A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

// Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

 

// Example 1:

// Input: "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:

// Input: "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation: 
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
// Example 3:

// Input: "()()"
// Output: ""
// Explanation: 
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".
 

// Note:

// S.length <= 10000
// S[i] is "(" or ")"
// S is a valid parentheses string

const removeOuterParentheses = function(S) {
    let open=false
    let stack=[]
    let result=[]
    for(i in S){
        if(open===false && S[i]==="("){
            open= true
        }else if(open===true && S[i]==="("){
            stack.push(S[i])
            result.push(S[i])
        }else if(open=== true && S[i]===")"){
            if(stack.length===0){
                open=false
            }else{
                stack.pop()
                result.push(S[i])
            }
        }
    }
    return result.join("")
};