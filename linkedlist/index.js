class Node {
	constructor(data,next=null){
		this.data= data;
		this.next=next;
	}
}

class LinkedList{
	constructor(){
		this.head=null;
	}

	insertFirst(data){
		this.head =new Node(data,this.head);
	}

	size(){
		let counter=0;
		let node = this.head;

		while(node){
			counter++;
			node= node.next;
		}
		return counter;
	}

	getFirst(){
		return this.head;
	}

	getLast(){
		let node =this.head;
		while(node){
			if(!node.next){
				return node;
			}
			node=node.next;
		}
		return node;
	}

	clear(){
		this.head=null;
	}

	removeFirst(){
		if(!this.head){
			return;
		}

		this.head =this.head.next;
	}

	removeLast(){
		//if the list is empty
		if(!this.head){
			return;
		}
		//if the list has only one item
		if(!this.head.next){
			this.head=null;
			return;
		}

		let previousNode = this.head;
		let node=this.head.next;
		while(node.next){
			previousNode=node;
			node=node.next;
		}

		previousNode.next=null;
		return; 
	}

	insertLast(data){
		if(!this.head){
			this.head= new Node(data);
		}

		let node = this.head;
		while(node){
			if(!node.next){
				node.next = new Node(data);
				return;
			}
			node=node.next;
		}
	}
}


// const node1 = new Node('a');
// //const node2 = new Node('b');
// const node3 = new Node('c');
// const list = new LinkedList();
// list.head=node1;
// list.insertFirst('b')
// list.insertFirst('c')
// console.log(list.size());
module.exports={Node,LinkedList}


