// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
	constructor(){
		this.stack1= new Stack();
		this.stack2= new Stack()
	}

	add(record){
		this.stack1.push(record);
	}

	remove(){
		//move all stack1 elements to stack2 using stack1 pop method.
		while(this.stack1.peek()){
			this.stack2.push(this.stack1.pop());
		}
		//then pop the item from stack2 .that is similar to remove item from queue
		const removeItem = this.stack2.pop();

		//before return the item poped from stack2, push remaining items from stack2 to stack1
		while(this.stack2.peek()){
			this.stack1.push(this.stack2.pop());
		}
		return removeItem;
	}

	peek(){
		//move all stack1 elements to stack2 using stack1 pop method.
		while(this.stack1.peek()){
			this.stack2.push(this.stack1.pop());
		}

		const peekElement= this.stack2.peek();

		//before return the peek item from stack2, push back items from stack2 to stack1
		while(this.stack2.peek()){
			this.stack1.push(this.stack2.pop());
		}

		return peekElement;
	}
}


module.exports = Queue;
