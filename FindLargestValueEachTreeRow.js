// Find Largest Value in Each Tree Row
// Medium

// You need to find the largest value in each row of a binary tree.

// Example:
// Input: 

//           1
//          / \
//         3   2
//        / \   \  
//       5   3   9 

// Output: [1, 3, 9]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */

const largestValues = function(root) {
    let current = root ? [root] : []
    let result = root ? [[root.val]] : []
    let output = []
    while(current.length != 0){
        let temp = []
        let temVal=[]
        for (i in current){
            if(current[i].right){
                temp.push(current[i].right) 
                temVal.push(current[i].right.val)
            } 
            if(current[i].left){
                temp.push(current[i].left) 
                temVal.push(current[i].left.val)
            } 
            
        }
        
        temVal.length >0 ? result.push(temVal) : null
        current = temp
    }
    for(i in result){
        output.push(Math.max(...result[i]))
    }
    return output
    
};