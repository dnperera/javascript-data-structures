// Implement a MinStack that has a min method which will return the minimum value in the stack in constant time.
//Implementation of the stack datastructure using Objects

function Stack(capacity) {
	this.storage = {};
	this.capacity = capacity || Infinity;
	this.counter = 0;
}
//--- O(1) - constant
Stack.prototype.push = function(val) {
	if (this.counter < this.capacity) {
		this.storage[this.counter++] = val;
		return this.counter;
	} else {
		return 'Stack has reached the capacity. Remove element before adding a new one !!.';
	}
};
//-- O(1)-- constant
Stack.prototype.pop = function() {
	if (this.counter === 0) {
		return 'Stack is empty!';
	}

	var popedValue = this.storage[this.counter - 1];
	delete this.storage[--this.counter];

	if (this.counter < 0) {
		this.counter = 0;
	}
	return popedValue;
};
//--- O(1) -- constant
Stack.prototype.peek = function() {
	return this.storage[this.counter - 1];
};
//-- O(1)
Stack.prototype.size = function() {
	return this.counter;
};
//-- O(n) - Linear
Stack.prototype.contains = function(val) {
	for (var key in this.storage) {
		if (this.storage[key] === val) {
			return true;
		}
	}
	return false;
};

// O(n) - Linear
Stack.prototype.untill = function(val) {
	var matchedIndex = '';
	for (var key in this.storage) {
		if (this.storage[key] === val) {
			matchedIndex = key;
			break;
		}
	}

	if (matchedIndex === '') {
		return 0;
	}
	return this.counter - matchedIndex;
};

var MinStack = function(capacity) {
	this.storage = {};
	this.capacity = capacity;
	this.counter = 0;
	this.minValues = new Stack();
};

MinStack.prototype.push = function(val) {
	this.storage[this.counter++] = val;

	if (this.minValues.size() === 0) {
		this.minValues.push(val);
	} else {
		//Push new value if it is greater than current last value in the minValues stack
		if (this.minValues.peek() > val) {
			this.minValues.push(val);
		} else {
			this.minValues.push(this.minValues.peek());
		}
	}

	return this.counter;
};

MinStack.prototype.pop = function() {
	if (this.counter === 0) {
		return 'Stack is empty. Please add value first!';
	}

	//poped the value at minValueStack
	this.minValues.pop();

	var popedValue = this.storage[this.counter - 1];
	delete this.storage[--this.counter];

	if (this.counter < 0) {
		this.counter = 0;
	}
	return popedValue;
};

MinStack.prototype.peek = function() {
	return this.storage[this.counter - 1];
};

// Get the min value of the stack in constant time  O(1)
MinStack.prototype.min = function() {
	return this.minValues.peek();
};

// var minStack = new MinStack(8);
// minStack.push(10);
// minStack.push(5);
// minStack.push(12);
// minStack.push(7);
// minStack.push(15);
// minStack.push(1);
// minStack.push(8);
// console.log(minStack);
// minStack.pop();
// minStack.pop();

// console.log(minStack);
// console.log('Min Value of the stack -->', minStack.min());
