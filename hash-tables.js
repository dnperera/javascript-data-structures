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

console.log(hash('Denith',15));