var app = {
	propertyTest: 'Jared Neems',

	config: {
		settingA: true,
		language: 'en',
		colorSchemeA: 'blue',
		colorSchemeB: 'red'
	},

	saySomething: function () {
		console.log('Where in the world is ' + app.propertyTest + ' today?');
	},

	init: function () {
		app.config.settingA = false;
		app.saySomething();
	},

	argumentMethod: function (updater) {
		app.config.colorSchemeA = updater;
		console.log(app);
	}
}


app.argumentMethod('green')

// console.log(app.propertyTest);
// console.log(app.config.colorSchemeA);
// console.log(app.saySomething());
// console.log(app.init());
