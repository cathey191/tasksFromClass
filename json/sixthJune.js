var arr = [
    {"name":"rabbits", "count": 11},
    {"name":"cats", "count": 2},
    {"name":"dogs", "count": 5},
    {"name":"rabbits", "count": 35},
    {"name":"parrots", "count": 3},
    {"name":"rabbits", "count": 2},
    {"name":"rabbits", "count": 4}
];

// var newArr = [];

// for (var i = 0; i < arr.length; i++) {
// 	// console.log(arr[i].name);
// 	if (arr[i].name === "rabbits") {
// 		newArr.push(arr[i]);
// 	}
// }

// delete newArr[0]; // array lenght stays the same
// newArr.pop(); // deletes the last item in array


// filters array without loop or if
var newArr = arr.filter(function (item) {
	return item.name === "rabbits";
})

console.log(newArr);
