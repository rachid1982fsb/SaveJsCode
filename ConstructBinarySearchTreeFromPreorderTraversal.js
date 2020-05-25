// Construct Binary Search Tree from Preorder Traversal

// Return the root node of a binary search tree that matches the given preorder traversal.

// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

// It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements.

// Example 1:

// Input: [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]

 

// Constraints:

// 1 <= preorder.length <= 100
// 1 <= preorder[i] <= 10^8
// The values of preorder are distinct.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// /**
//  * @param {number[]} preorder
//  * @return {TreeNode}
//  */


const insertInTN = (node,value) => {

    if(node.val < value){
        if(node.right){
             insertInTN(node.right, value)
        }else{
            const tempNode= new TreeNode(value)
            node.right= tempNode
        }
    }
    if(node.val > value){
        if(node.left){
             insertInTN(node.left, value)
        }else{
            const tempNode= new TreeNode(value)
            node.left= tempNode
        }
        
    }
    return node 
} 

const bstFromPreorder = function(preorder) {
    let result = new TreeNode(preorder.shift())
    let current = preorder.shift()
    
    while(!!current){
      insertInTN(result, current)
      current=preorder.shift()
    }
    return result
    
};
