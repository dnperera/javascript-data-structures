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

function getElementsThatEqual10AtProperty(obj, key){
	return obj[key].filter((number)=>{
		return (number ===10)
	})
}

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log('88)', output); // --> [10, 10]

