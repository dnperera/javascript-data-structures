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

		const last = this.getLast();
		if(last){
			//there are some existing nodes in the list
			last.next= new Node(data);
		}else{
			//List is empty
			this.head= new Node(data);
		}
	}

	getAt(index){
		let counter=0;
		let node= this.head;

		while(node){
			if(counter===index){
				return node;
			}
			counter++;
			node=node.next;
		}
		return null;
	}

	removeAt(index){
		if(!this.head){
			return;
		}
		if(index===0){
			this.head = this.head.next;
		}

		let previousNode = this.getAt(index-1);
		if(!previousNode||!previousNode.next){
			return;
		}
		previousNode.next=previousNode.next.next;
	}

	insertAt(data,index){
		if(!this.head){
			this.head = new Node(data);
			return;
		}

		if(index ===0){
			this.head = new Node(data,this.head);
			return;
		}

		let previousNode= this.getAt(index-1)||this.getLast();
		let node = new Node(data,previousNode.next)
		previousNode.next=node;
	}
}



// const l = new LinkedList();
// console.log(l.getAt(10));

// l.insertLast(1);
// l.insertLast(2);
// l.insertLast(3);
// l.insertLast(4);
// // console.log(l.getAt(0).data)
// // console.log(l.getAt(1).data)
// // console.log(l.getAt(2).data)
// // console.log(l.getAt(3).data)
// console.log(l);
module.exports={Node,LinkedList}


