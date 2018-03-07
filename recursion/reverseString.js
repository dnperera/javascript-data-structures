/*
Implement a function that will reverse a string recursively.
reverse('abcdefg')
=> 'gfedcba'
*/
function reverseString(str) {
	//basecase
	if (str.length === 1) {
		return str;
	}
	var lastChar = str.substring(str.length - 1);
	return lastChar.concat(reverseString(str.substring(0, str.length - 1)));
}

console.log(reverseString('abcdefg'));
