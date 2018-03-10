//5. Write a function 'recursiveMultiplier' that takes two arguments, 'array and num', and multiplies each arr value into by num and returns an array of the values.
//
// function recursiveMultiplier(array, num) {
// 	var newArray = [];
// 	if (array.length === 0) {
// 		return [];
// 	}
// 	newArray.push(array.pop() * num);
// 	return recursiveMultiplier(array, num).concat(newArray);
// }

function recursiveMultiplier(array, num) {
	if (array.length === 0) {
		return array;
	}
	var lastValue = array.pop();
	recursiveMultiplier(array, num);
	array.push(lastValue * num);

	return array;
}
console.log(recursiveMultiplier([5, 10, 15, 20], 2));
