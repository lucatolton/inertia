document.querySelector("#formWrap").addEventListener("submit", (e) => {
	e.preventDefault();
	const data = new FormData(e.target);
	if (!data.get("url")) return;

	const param = data.get("url");
	window.location.assign(`/prox/?url=${btoa(param)}`);
});
