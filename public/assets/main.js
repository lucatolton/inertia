document.querySelector("#formWrap").addEventListener("submit", e => {
	e.preventDefault();
	const data = new FormData(e.target)
	if (!data.get("url")) return;
	
	const param = e.target.id === "gsearch" ? 
		`https://google.com/search?q=${data.get("url").trim().replace(" ", "+")}` :	data.get("url");
		window.location.assign(`/prox/?url=${btoa(param)}`);
})