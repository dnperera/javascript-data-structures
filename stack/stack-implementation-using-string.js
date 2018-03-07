/*
Follwing Stack data structure implemented using string as the storage.
Stack - FILO

 */
var Stack = function() {
	this.storage = '';
	this.counter = 0;
};

Stack.prototype.push = function(val) {
	this.storage = this.storage.concat('###', val);
	this.counter++;
};

Stack.prototype.pop = function() {
	if (this.storage.length === 0) {
		this.counter = 0;
		return 'Stack is empty';
	}
	// get the last index of the  value seperator '###';
	var lastIndex = this.storage.lastIndexOf('###');
	var popedValue = this.storage.substring(lastIndex + 3);
	//assign the new remaining string to the storage
	this.storage = this.storage.substring(0, lastIndex);
	this.counter--;
	return popedValue;
};

Stack.prototype.peek = function() {
	return this.storage.substring(this.storage.lastIndexOf('###') + 3);
};

Stack.prototype.size = function() {
	return this.counter;
};

