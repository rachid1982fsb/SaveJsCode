// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \     
//       4   5    
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.

// * }
// */
// /**
// * @param {TreeNode} root
// * @return {number}
// */
let maxDiameter = Number.MIN_SAFE_INTEGER;

var diameterOfBinaryTree = function(root) {
   if (!root) {
       return 0;
   }
   
   clearMax();
   depthHelper(root);
   
   return maxDiameter;
};

function clearMax() {
   maxDiameter = Number.MIN_SAFE_INTEGER;
}

function depthHelper(root) {
   if (root === null) {
       return 0;
   }
   
   const left = depthHelper(root.left);
   const right = depthHelper(root.right);
   
   if (maxDiameter < (left + right)) {
       maxDiameter = left + right;
   }
   
   return Math.max(left, right) + 1;
}