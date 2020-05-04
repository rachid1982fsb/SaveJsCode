// LRU Cache


// Solution
// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4


var LRUCache = function(capacity) {
    this.cap = capacity;
this.q = [];
this.m = new Map();

};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
    if (!this.m.has(key))
    return -1;
this.q = this.q.filter(x => x != key); // O(N) ❌ 
this.q.unshift(key);
return this.m.get(key);
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
    this.q = this.q.filter(x => x != key); // O(N) ❌ 
while (this.q.length >= this.cap) {
    let del = this.q.pop();
    this.m.delete(del);
}    
this.q.unshift(key);
this.m.set(key, value);
};