var input = document.querySelector("#url");
const config = require("/assets/config.json");

input.addEventListener("keyup", (key) => {
	if (key.keyCode == 13) {
		if (!input.value.trim().length) return;
		window.location.assign(`/${config.prefix}/?url=${btoa(input.value)}`);
	}
});

document.querySelector("#form").addEventListener("click", () => {
	if (!input.value.trim().length) return;
	window.location.assign(`/${config.prefix}/?url=${btoa(input.value)}`);
});
