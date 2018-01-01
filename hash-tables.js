/*
	Hash Table Implementatio
 */

//Create Hash Function which will create index value for key

let hash =(key,maxLength)=>{
	var totalUnicodeValue=0;
	for(let i=0; key.length>i;i++){
		totalUnicodeValue +=key.charCodeAt(i);
	}
	return totalUnicodeValue%maxLength;
}

let HashTable =function(){
	let storage=[];
	const storageLimit =5;

	this.print=()=>{
		return storage;
	}

	this.add=(key,value)=>{
		let index = hash(key,storageLimit);
		if(storage[index]=== undefined){
			storage[index]=[[key,value]];
		}else{
			let inserted=false;
			for(let i=0;storage[index].length>i;i++){
				if(storage[index][i][0]===key){
					storage[index][i][1] = value;
					inserted=true;
				}
			}

			if(!inserted){ // there is no matching key in storage[index]
				storage[index].push([key,value])
			}
		}
	};
	this.remove=(key)=>{
		let index = hash(key,storageLimit);
		if(!storage[index]){
			console.log(`There is no item with ${key}!`);
			return false;
		}

		if(storage[index].length===1&&storage[index][0][0]===key){
			delete storage[index];
			console.log(`Item with ${key} deleted!`);
			return true;
		}else{
			for(let i=0;storage[index].length>i;i++){

				if(!storage[index][i][0]){
					console.log(`There is no item with ${key}!`);
					return false;
				}

				if(storage[index][i][0]===key){
					storage[index].splice(i);
					console.log(`Item with ${key} deleted!`);
					return true;
				}
			}
			console.log(`There is no item with ${key}!`);
			return false;
		}
	};

	this.search=(key)=>{
		let index = hash(key,storageLimit);
		if(storage[index]===undefined){
			return undefined;
		}else{
			for(let i=0;storage[index].length>i;i++){
				if(storage[index][i][0]===key){
					 return storage[index][i][1];
				}
			}
		}
	}
	
	this.empty=function(){
		storage=[];
	 }
}

var newTable = new HashTable();
newTable.add('Dasith Perera','50 Miller Ranch Ct')
newTable.add('John','San Francisco Camp')
newTable.add('Lisa','San Francisco Camp')
newTable.add('Denith Perera','Marinwood Camp')
newTable.add('Hasini Perera','San Rafael Camp')
newTable.add('Some Perera','Millvalley Camp')
newTable.add('Peter Perera','San Francisco Camp')
newTable.add('Nath De Silva','San Jose Camp')
newTable.add('Denith Perera','Santa Clara Camp')

console.log(newTable.empty());
newTable.add('Channa Don','Gilroy')

newTable.print().forEach((element)=>{
	console.log(element);
})

