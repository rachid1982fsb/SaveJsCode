
var levelOrder = function(root) {
    if(!root) return []
    
    let result= [[root.val]]    
    let queue = [[root]]
    
    while(queue.length>0){
        let currentResult=[]
        let current = queue.shift()
        let tempArray=[]
        while(current.length>0){
            let temp = current.shift()
            if(temp.left){
                tempArray.push(temp.left)
                currentResult.push(temp.left.val)
            }
            if(temp.right){
                tempArray.push(temp.right)
                currentResult.push(temp.right.val)
            }  
        }
        tempArray.length >0 ? queue.push(tempArray) :  null
        currentResult.length >0 ? result.push(currentResult) : null
    }
    
   return result
    
};