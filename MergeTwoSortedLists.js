	
// Merge Two Sorted Lists 
// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

const mergeTwoLists = function(l1, l2) {
    let temp1 =l1
    let temp2 =l2
    let array=[]
    if(l1 === null || l2 === null){
        return l1 || l2
    }
    while(temp1!= null){
        array.push(temp1.val)
        temp1=temp1.next
    }
    while(temp2!= null){
        array.push(temp2.val)
        temp2=temp2.next
    }
    
    const sortedArray= array.sort(function(a, b){return a-b})
   
    val = new ListNode(sortedArray.shift())
    while(sortedArray.length !=0){
        let current = val
        while(current.next != null ){
            current= current.next
        }
        current.next = new ListNode(sortedArray.shift())
    }
 return val
};
