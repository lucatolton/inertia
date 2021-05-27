function pushurl (recvinput) {
	var input = recvinput;
	if (!input.value.trim().length) return;
	window.location.assign(`/prox/?url=${btoa(input.value)}`);
}

function gsearch (form) {
	recvinput = form.inputbox.value;
	recvinput = "%googlesearch%"+recvinput;
	pushurl(recvinput);
}

function url (form) {
	recvinput = form.inputbox.value;
	pushurl(recvinput);
}