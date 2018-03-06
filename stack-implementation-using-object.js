//Implementation of the stack datastructure using Objects

function Stack(capacity) {
	this.storage = {};
	this.capacity = capacity || Infinity;
	this.counter = 0;
}

Stack.prototype.push = function(val) {
	if (this.counter < this.capacity) {
		this.storage[this.counter++] = val;
		return this.counter;
	} else {
		return 'Stack has reached the capacity !!.';
	}
};

Stack.prototype.pop = function() {
	if (this.counter === 0) {
		return 'Stack is empty!';
	}

	var popedValue = this.storage[this.counter - 1];
	delete this.storage[--this.counter];
	return popedValue;
};

Stack.prototype.peek = function() {
	return this.storage[this.counter - 1];
};

Stack.prototype.size = function() {
	return this.counter;
};

