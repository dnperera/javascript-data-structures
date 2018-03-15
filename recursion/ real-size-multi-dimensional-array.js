/*
Given a multi-dimensional integer array, return the total number of integers, stored inside this array. You should not rely on the number of dimensions to solve this kata. If n is the number of dimensions, then: 1 <= n < +Infinity.

Example:

Given [[[5], 3], 0, 2, [], [4, [5, 6]]], your function should return a result of 7. This is because the array contains 7 integers.
 */

function realSize(arrays) {
	return flatten(arrays).length;
}

function flatten(array) {
	var newArray = [];
	for (let i = 0; i < array.length; i++) {
		if (!Array.isArray(array[i])) {
			newArray.push(array[i]);
		} else {
			newArray = newArray.concat(flatten(array[i]));
		}
	}
	return newArray;
}

console.log(realSize([[[5], 3], 0, 2, [], [4, [5, 6]]]));
