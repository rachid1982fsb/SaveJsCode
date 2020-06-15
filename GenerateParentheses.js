// Generate Parentheses
// Medium

// 4954

// 261

// Add to List

// Share
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

// /**
//  * @param {number} n
//  * @return {string[]}
//  */

const generateParenthesis = function(n) {
    const res = new Set();
    
    generateAll();
    
    return Array.from(res);
    
    function generateAll(open= 0,close = 0, seq = "") {
        const pos = seq.length;

        if(pos===2*n) {
            res.add(seq);
        }       

        if(open-close > 0) {
            generateAll(open, close + 1, seq + ")");
        }
        if(open < n) {
            generateAll(open+1, close, seq + "(");
        }
    }
};