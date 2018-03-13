/*
Sort a stack so that its elements are in ascending order

Write a program to sort a stack in ascending order (with biggest items on top). 
You may use at most one additional stack to hold items, 
but you may not copy the elements into any other data structure (such as an array). 
The stack supports the following operations: push, pop, peek, and isEmpty.
 */

function Stack(capacity) {
	this.storage = {};
	this.capacity = capacity || Infinity;
	this.counter = 0;
}

Stack.prototype.push = function(value) {
	if (this.capacity > this.counter) {
		this.storage[this.counter++] = value;
		return this.counter;
	} else {
		return 'Stack is full . Please remove an item before insert !';
	}
};

Stack.prototype.pop = function() {
	if (this.counter === 0) {
		return 'Stack is empty !';
	}
	var popedItem = this.storage[this.counter - 1];
	delete this.storage[--this.counter];

	if (this.counter < 0) {
		this.counter = 0;
	}
	return popedItem;
};

Stack.prototype.peek = function() {
	return this.storage[this.counter - 1];
};

Stack.prototype.size = function() {
	return this.counter;
};

Stack.prototype.isEmpty = function() {
	return this.counter === 0;
};

//---------- Sort the given stack
function sortStack(stack) {
	//declare new stack the hold the poped values
	var tempStack = new Stack();
	var temp = '';
	while (!stack.isEmpty()) {
		//pop the element of the given stack
		temp = stack.pop();
		while (!tempStack.isEmpty() && temp < tempStack.peek()) {
			stack.push(tempStack.pop());
		}
		tempStack.push(temp);
	}
	return tempStack;
}

let stack = new Stack(7);
stack.push(10);
stack.push(1);
stack.push(4);
stack.push(6);
stack.push(12);
stack.push(3);
console.log('before sort -->', stack);
console.log(sortStack(stack));

// console.log(stack);
