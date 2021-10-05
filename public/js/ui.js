function settingsOverlay() {
	document.getElementById("settingsOverlay").style.display = "block";
}

function disableSettingsOverlay() {
	document.getElementById("settingsOverlay").style.display = "none";
}

function oldCss() {
	document.getElementById('stylesheet').href='css/rounded.css';
}

function newCss() {
	document.getElementById('stylesheet').href='css/modern.css';
}