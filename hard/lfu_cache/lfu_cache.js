function Node(key, value, next = null, prev = null) {
  this.key = key;
  this.value = value;
  this.next = next;
  this.prev = prev;
  this.nUsed = 0;
  this.lastUsed = new Date().getTime();
}

function lfu(limit = 5) {
  this.size = 0;
  this.limit = limit;
  this.head = null;
  this.tail = null;
  this.cache = {};
}

lfu.prototype.checkLimit = function() {
  if (this.size === this.limit) {
    this.remove(this.tail.key);
  }
};

lfu.prototype.write = function(key, value) {
  this.checkLimit();

  if (!this.head) {
    this.head = this.tail = new Node(key, value);
  } else {
    const node = new Node(key, value, this.head);
    this.head.prev = node;
    this.head = node;
  }

  this.cache[key] = this.head;
  this.size++;
};

lfu.prototype.read = function(key) {
  if (this.cache[key]) {
    const value = this.cache[key].value;

    // node removed from it's position and cache
    this.remove(key);
    // write node again to the head of LinkedList to make it most recently used
    this.write(key, value);

    return value;
  }

  console.log(`Item not available in cache for key ${key}`);
};

lfu.prototype.remove = function(key) {
  const node = this.cache[key];

  if (node.prev !== null) {
    node.prev.next = node.next;
  } else {
    this.head = node.next;
  }

  if (node.next !== null) {
    node.next.prev = node.prev;
  } else {
    this.tail = node.prev;
  }

  delete this.cache[key];
  this.size--;
};

lfu.prototype = function clear() {
  this.head = null;
  this.tail = null;
  this.size = 0;
  this.cache = {};
};
