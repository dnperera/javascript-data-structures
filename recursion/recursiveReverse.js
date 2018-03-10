//Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
////I - An array
/// O - Reversed array

function recursiveReverse(array) {
	var reversedArray = [];
	function reverse(arr) {
		if (arr.length > 0) {
			reversedArray.push(arr.pop());
			reverse(arr);
		}
		return;
	}
	reverse(array);
	return reversedArray;
}

// function recursiveReverse(array) {
// 	var newArray = [];
// 	if (array.length === 1) {
// 		return array;
// 	}
// 	newArray.push(array.pop());

// 	return newArray.concat(recursiveReverse(array));
// }

console.log(recursiveReverse(['a', 'b', 'c', 'd', 'e']));
