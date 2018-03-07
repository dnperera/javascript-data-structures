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

var stack = new Stack(5);

stack.push('Dayan');
stack.push('Hasini');
stack.push('Dasith');
stack.push('Denith');

console.log(stack);
console.log(stack.untill('Dayan'));
