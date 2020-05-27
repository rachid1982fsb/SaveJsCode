// Largest Time for Given Digits

// Given an array of 4 digits, return the largest 24 hour time that can be made.

// The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

// Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

// /**
//  * @param {number[]} A
//  * @return {string}
//  */

var largestTimeFromDigits = function(A) {
    let h1=getTensHours(A)
    let h2= getOncesHours(h1[0], h1[1])
    let m1= getTensMintus(h2[1])
    let m2= m1[1] 
    return ""+h1[0] +"" +h2[0] +":"+ m1[0] +""+ m2[0]
    
};

const getTensHours =  function(A){
    let result 
    if(A.findIndex((a)=> a===2) != -1){
        result =2
        A.splice(A.findIndex((a)=> a===2),1)
    }else if(A.findIndex((a)=> a===1) != -1){
        result =1
        A.splice(A.findIndex((a)=> a===1),1)
    }else if(A.findIndex((a)=> a===0) != -1){
        result =1
        A.splice(A.findIndex((a)=> a===0),1)
    }
    return result ? [result, A] : null
}

const getOncesHours = function(tenHours, A){
    let result 
    if(tenHours===0 || tenHours===1){
        result = Math.max(...A)
        A.splice(A.findIndex((a)=> a===result),1)
    }else{
        return getMaxnumberOf([3,2,1,0],A)
    }
    return [result, A]
    
}

const getTensMintus = function(A){
    
    return getMaxnumberOf([5,4,3,2,1,0],A)
}
    
const getMaxnumberOf = function(L, Array){
    let result 
    for( i in L){
        if(Array.findIndex((a) => a===L[i]) != -1){
            result = L[i]
            Array.splice(Array.findIndex((a)=> a===L[i]),1)
            return  [result, Array]
        }
    }
    return null 
}
 