// Remove Nth Node From End of List    

// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?

const removeNthFromEnd = function(head, n) {
    let temp = head
    let leng=0
    while(temp.next){
        temp = temp.next
        leng ++
    }
    if(leng+1 === n){
        return  head.next
    }
    let temp2 = head
    
    while((leng-n)>0){
        temp2 = temp2.next
        leng--
    }
    
    temp2.next ? temp2.next=temp2.next.next : head=temp2.next
    
    return head
    
};