function HashTable(size){
	this.buckets =Array(size);
	this.numBuckets = this.buckets.length;	
}

function HashNode(key,value,next){
	this.key = key;
	this.value = value;
	this.next = next || null;
}

HashTable.prototype.getHash= function(key){
	var total=0;
	for(var i=0;key.length >i; i++){
			total += key.charCodeAt(i);
	}
	return total % this.numBuckets;
};

HashTable.prototype.insert = function(key,value){
	var index = this.getHash(key);
	if(!this.buckets[index]) {
		this.buckets[index] = new HashNode(key,value);
	}else if(this.buckets[index].key === key) {
		this.buckets[index].value = value;
	}else{
		var currentNode = this.buckets[index];
		while( currentNode.next ){

			if( currentNode.next.key === key){ // check key already exist
				currentNode.next.value = value;
				return;
			}
			currentNode = currentNode.next;
		}
		currentNode.next =  new HashNode(key,value);
	}
};

HashTable.prototype.get = function (key) { // get the value for given key;
	var index = this.getHash(key);
	if(!this.buckets[index]) {
		return null;
	} else {
		var currentNode = this.buckets[index];
		while( currentNode ) {
			if(currentNode.key === key ){
				return currentNode.value;
			}
			currentNode = currentNode.next;
		}
		return null;
	}
}

HashTable.prototype.retrieveAll = function (){
	var valueArray =[];
	this.buckets.forEach( function(bucket) {
		while(bucket){
			valueArray.push(bucket);
			bucket = bucket.next;
		}
	});
	return valueArray;
};

var myHT = new HashTable(30);

myHT.insert('Dayan','415-717-9272');
myHT.insert('Hasini','415-717-5449');
myHT.insert('Dasith','415-472-3765');
myHT.insert('Denith','415-472-7890');
myHT.insert('Hasini','415-808-7777');
console.log(myHT.retrieveAll());


