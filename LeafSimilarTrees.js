// Leaf-Similar Trees

// Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.



// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

 

// Constraints:

// Both of the given trees will have between 1 and 200 nodes.
// Both of the given trees will have values between 0 and 200

var leafSimilar = function(root1, root2) {
    let leaves1 = treeLeaves(root1)
    let leaves2 = treeLeaves(root2)
    // console.log(leaves1, leaves2)
    
    if(leaves1.length != leaves2.length){
        return false 
    }
    for(i in leaves1){
        if(leaves1[i] != leaves2[i]){
            return false
        }
    }
    return true
    
};
const treeLeaves = function(root){
    let current = root 
    let result = []
    let stack = []
    while(current){
        if(current.right){
            stack.push(current.right)
        }
        if(!current.right && !current.left){
            result.push(current.val)
            current = stack.pop()
        }else if(current.left){
            current= current.left
        }else if(!current.left && current.right) {
            current = stack.pop()
        }
    }
 
    return result 
}