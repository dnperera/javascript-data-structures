/*
Implement a function that will reverse a string recursively.
reverse('abcdefg')
=> 'gfedcba'
*/

//--- Solution -1
function reverseString(str) {
	//basecase
	if (str.length === 1) {
		return str;
	}
	var lastChar = str.substring(str.length - 1);
	return lastChar.concat(reverseString(str.substring(0, str.length - 1)));
}
//--- Solution -2
function reverseStr(str) {
	//split the string to character level array
	var charArray = str.split('');
	var reversedArry = [];
	function recursiveReverse(arr) {
		if (arr.length === 0) {
			return [];
		}
		//concat the last element of the arry to the reversedArray
		reversedArry = reversedArry.concat(arr.pop());
		return recursiveReverse(arr);
	}

	recursiveReverse(charArray);
	return reversedArry.join('');
}

console.log(reverseStr('abcdefg'));
