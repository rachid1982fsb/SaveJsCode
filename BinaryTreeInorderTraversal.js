
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
 

var inorderTraversal = function(root) {
    
    let result =[]
    let stackNodes=[]
    let done=[]
    let current = root 
    current ? stackNodes.push(current) : null
    
    while(stackNodes.length >0){
        if(current.left && !done.includes(current.left) ){
            stackNodes.push(current)
            current = current.left
        }else if(current.right && !done.includes(current.right) ){
            result.push(current.val)
            done.push(current)
            current = current.right
        }else{
            result.push(current.val)
            done.push(current)
            current = stackNodes.pop()
        }
        
    }

        return result 
    
};

// var inorderTraversal = function(root) {
//     let result=[]
//     if(root){
//         inorderTraversal(root.left)
            // result.push(root.val)
                // inorderTraversal(root.right)
//     }
    
//     return result 
    
// }
