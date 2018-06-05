var arr = [
    {"name":"rabbits", "count": 11},
    {"name":"cats", "count": 2},
    {"name":"dogs", "count": 5},
    {"name":"rabbits", "count": 35},
    {"name":"parrots", "count": 3},
    {"name":"rabbits", "count": 2},
    {"name":"rabbits", "count": 4}
];

var newArr = [];

for (var i = 0; i < arr.length; i++) {
	// console.log(arr[i].name);
	if (arr[i].name === "rabbits") {
		newArr.push(arr[i]);
	}
}

console.log(newArr);
