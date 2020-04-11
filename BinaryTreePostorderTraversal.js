// this an algorith of postorderTraversal LinkLIST
var postorderTraversal = function(root) {
    
    if(!root){
        return []
    }

    let result =[]
    let stackNodes=[]
    let visted=[]
    let current = root 

     stackNodes.push(current)
    
     while(stackNodes.length >0){
        if(current.left && !visted.includes(current.left) ){
            stackNodes.push(current)
            current = current.left
        }else if(current.right && !visted.includes(current.right) ){
            stackNodes.push(current)
            current = current.right
        }else{
            result.push(current.val)
            visted.push(current)
            current = stackNodes.pop()
        }   
    }
        return result 
};
