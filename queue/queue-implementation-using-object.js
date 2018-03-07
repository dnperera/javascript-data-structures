//Imaplement Queue Data Structure using Object.
//Queue - FIFO
var Queue = function(capacity) {
	this.storage = {};
	this.capacity = capacity || Infinity;
	this.head = 0;
	this.tail = 0;
};

Queue.prototype.enqueue = function(val) {
	var currentSize = this.tail - this.head;
	if (currentSize < this.capacity) {
		this.storage[this.tail++] = val;
	} else {
		return 'Queue has reached the max limit .Please remove an item beofre adding!';
	}

	return this.tail - this.head;
};

Queue.prototype.dequeue = function() {
	if (this.tail === 0 || !this.storage[this.head]) {
		this.tail = 0;
		this.head = 0;
		return 'Queue is empty . Please add an item beofe dequeue!';
	}
	var dequeueItem = this.storage[this.head];
	delete this.storage[this.head];
	this.head++;

	return dequeueItem;
};

Queue.prototype.peek = function() {
	return this.storage[this.head];
};

Queue.prototype.count = function() {
	return this.tail - this.head;
};

// var queue = new Queue(5);
// console.log(queue.enqueue('Dayan'));
// console.log(queue.enqueue('Hasini'));
// console.log(queue.enqueue('Dasith'));
// console.log(queue.enqueue('Denith'));

// console.log(queue);
// console.log(queue.dequeue());
// console.log(queue);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue);

