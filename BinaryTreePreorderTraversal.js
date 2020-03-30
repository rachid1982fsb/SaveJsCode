/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversalRecursive = function(root) {
    let result =[]
    let stackNodes=[]

    root ? stackNodes.push(root) : null
    
    while(stackNodes.length >0){
        let node = stackNodes.pop()
        result.push(node.val)
        if(node.right){
            stackNodes.push(node.right) 
        }
        if(node.left){
            stackNodes.push(node.left) 
        }
    }
    return result
};

var preorderTraversal = function(root) {
    let result = []
    if(root){
        result.push(root.val)
    }else{
        return []
    }
    if(root.left){
       result=[...result, ...preorderTraversal(root.left)]
    }
     if(root.right){
        result=[...result, ...preorderTraversal(root.right)]
    }
    return result
    
}