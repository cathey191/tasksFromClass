// indexOf
var arr = ['fish', 'tigers', 'llamas', 'cats', 'goats', 'tigers', 'horses'];
var logicSwitch = false;

for (var i = 0; i < arr.length; i++) {
	if (arr[i] === 'tigers') {
		logicSwitch = true;
		// console.log('run!!');
	}
}

var sayWhat = arr.indexOf('tigers');

console.log(sayWhat)
