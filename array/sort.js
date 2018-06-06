var theArray = [false, 'adam', 'sam', 15, 'bob', 'john', 9000, 'tupac', 'biggie', 'george', 'tony', 22]

// function that makes a new array of all string in theArray
function stringArray () {
	// filters strings from theArray and adds to newArr
	var newArr = theArray.filter(function (item) {
		if (typeof item === 'string') {
			return item
		}
	});

	// adds billy to end of newArr
	newArr.push('billy');
	// sorts newArr
	newArr.sort();
	// makes newArr global
	return newArr;
}


console.log(stringArray());
