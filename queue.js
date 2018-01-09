//------ Description ---------
//Create a queue data structure. 
//The queue should be a class with methods 'add' and 'remove'.
//Adding to the queue should store an element untill it is removed
//---- Examples
//const q = new Queue()
//q.add(5);
//q.remove(); // returns 5;

class Queue {
	constructor(){
		this.data=[];
	}

	add(record){
		this.data.unshift(record);
	}

	remove(){
		return this.data.pop();
	}

	peek(){ //this will return next item to be removed
		return this.data[this.data.length -1];
	}
}

const two = new Queue();
two.add('one');
two.add('two');
two.add('three');
two.add('four');
two.add('five');
console.log(two);
console.log(two.remove());
module.exports=Queue;