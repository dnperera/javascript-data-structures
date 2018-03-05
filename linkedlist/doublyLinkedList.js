var DoublyLinkedList = function (){
	this.head = null;
	this.tail = null;
};

var Node = function (value,next,prev ) {
	this.value = value;
	this.next = next || null;
	this.prev = prev || null;
};

DoublyLinkedList.prototype.addToHead = function (value) {
	var newNode = new Node(value,this.head);
	if(this.head){ //if there are nodes
		this.head.prev = newNode;

	} else { //if the list is empty
		this.tail = newNode;
	}
	this.head = newNode;
}

DoublyLinkedList.prototype.addToTail = function (value) {
	var newNode = new Node( value,null,this.tail);
	if( this.tail ){
		this.tail.next = newNode;
	} else {
		this.head = newNode;
	}
	this.tail = newNode;
};


DoublyLinkedList.prototype.removeHead = function () {
	if( !this.head ) {
		return null;
	} 
	var value = this.head.value;
	this.head = this.head.next;

	if (this.head) {
		this.head.prev = null;
	} else {
		this.tail = null;
	}
	return value;
};

DoublyLinkedList.prototype.removeTail = function () {
	if( !this.tail ) {
		return null;
	} 
	var value = this.tail.value;
	this.tail = this.tail.prev;

	if ( this.tail ) {
		this.tail.next = null;
	} else {
		this.head = null;
	}
	return value;
};

DoublyLinkedList.prototype.find = function (value){
	var node = this.head;
	while(node){
		if(node.value === value){
			return node;
		}
		node = node.next;
	}
	return null;
};
//Return all relevant indexes of the matching values in the linked list
DoublyLinkedList.prototype.indexOf = function (value) {
	var currentNode = this.head;
	var currentIndex = 0;
	var indexes = [];

	while( currentNode ) {

		if(currentNode.value === value) {
			indexes.push( currentIndex )
		}
		currentIndex++;
		currentNode = currentNode.next;
	}
	return indexes;
};

var dll = new DoublyLinkedList();


dll.addToHead('Dayan')
dll.addToHead('Hasini')
dll.addToHead('Dasith')
dll.addToHead('Denith')
dll.addToHead('Hasini')
console.log(dll.indexOf('Hasini'));
