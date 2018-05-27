var voiceObj = new p5.Speech();
var app = {
	// var
	domElements: {
		container: document.querySelector('.container'),
		input: document.querySelector('input')
	},


	// creates list items
	createItem: function (e) {
		var key = e.which || e.keyCode;
		if (key === 13) {
			var text = document.querySelector('input').value;
			var newLine = '<div class="input-group borderBottom">';
			newLine += '		<div class="input-group-prepend">';
			newLine += '			<button class="btn btn-outline-secondary checkWidth tick" type="button"></button>';
			newLine += '		</div>';
			newLine += '		<p class="form-control transparent speech">';
			newLine += 				text;
			newLine += '		</p>';
			newLine += '		<div class="input-group-append">'
			newLine += '			<button class="btn btn-outline-secondary checkWidth remove" type="button">'
			newLine += '				<i class="fas fa-times"></i>'
			newLine += '			</button>'
			newLine += '		</div>'
			newLine += '	</div>'
			inputSection.insertAdjacentHTML('beforebegin', newLine)
			document.querySelector('input').value = '';
		}
	},


	// Speech
	speechLoaded: function () {
		var words = document.getElementsByClassName('speech');
		var listArray = [];

		// Type of voice
		voiceObj.setVoice('Fred');

		// Add list items to an array
		for (var i = 0; i < words.length; i++) {
			listArray.push(words[i].innerText)
		}
		// Reading out array
		voiceObj.speak(listArray)
	},


	// Buttons
	checkEventObj: function (e) {
		// removes items
		if (e.target.className == "fas fa-times") {
			var perant = e.target.parentNode.parentNode.parentNode;
			perant.outerHTML = '';
		// ticks button
		} else if (e.target.className == 'btn btn-outline-secondary checkWidth tick') {
			if (e.target.innerHTML == '<i class="fas fa-check"></i>') {
				e.target.innerHTML = '';
			} else {
				e.target.innerHTML = '<i class="fas fa-check"></i>';
			}
		// play button
		} else if (e.target.className == 'fas fa-play') {
			app.speechLoaded ()
		}
	},

	eventListener: function () {
		app.domElements.input.addEventListener('keypress', app.createItem, false),
		app.domElements.container.addEventListener('click', app.checkEventObj, false)
	}

}
app.eventListener ()
