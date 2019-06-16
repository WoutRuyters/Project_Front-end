// #region Algemeen
//const IP = prompt('geef publiek IP', 'http://127.0.0.1:5000');
const IP = 'localhost';
const socket = io.connect(IP);

// spreekt dit aan bij connectie en roept in backend de socketio.on ("connected")aan
socket.on('connect', function() {
	socket.emit('connected');
	console.log('connected');
});

socket.on('temperatuur', function(temp) {
	handleTemp(temp);
	console.log(temp);
});

socket.on('vochtigheid', function(vocht) {
	handleVocht(vocht);
	console.log(vocht);
});

socket.on('lichthoeveelheid', function(licht) {
	handleLicht(licht);
	console.log(licht);
});

socket.on('new_data', function(data) {
	console.log(data);
});

socket.on('temperatuur_ideaal', function(temp_ideaal) {
	handleTempIdeaal(temp_ideaal);
});

socket.on('vochtigheid_ideaal', function(vocht_ideeal) {
	handleVochtIdeaal(vocht_ideeal);
});

socket.on('lichthoeveelheid_ideaal', function(licht_ideaal) {
	handleLichtIdeaal(licht_ideaal);
});

const requestData = function() {
	socket.emit('nieuwe_data');
	console.log('nieuwe-data:');
};

const handleLichtIdeaal = function(licht_ideaal) {
	document.querySelector('.licht_ideal').innerHTML = licht_ideaal + '%';
};

const handleVochtIdeaal = function(vocht_ideaal) {
	document.querySelector('.vocht_ideal').innerHTML = vocht_ideaal + '%';
};

const handleTempIdeaal = function(temp_ideaal) {
	document.querySelector('.temp_ideal').innerHTML = temp_ideaal + '°C';
};

const handleTemp = function(temp) {
	document.querySelector('.temp').innerHTML = temp + '°C';
};

const handleVocht = function(vocht) {
	document.querySelector('.vocht').innerHTML = vocht + '%';
};

const handleLicht = function(licht) {
	document.querySelector('.licht').innerHTML = licht + '%';
};

var intervalID = window.setInterval(requestData, 60000);

// eventlistener bij click op de site zal hij opknopje aansturen bij socket.io
const init = function() {};

document.addEventListener('DOMContentLoaded', function() {
	console.info('DOM geladen');
});

// #endregion
