//Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
//
//I - two numbers ( Base value and exponent)
//O - Exponent of the base value
//Assumptions : Assume values are integers
function recursiveExponent(b, n) {
	if (n === 1) {
		return b;
	}

	return b * recursiveExponent(b, n - 1);
}

console.log(recursiveExponent(2, 3));
