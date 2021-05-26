var recvinput = document.querySelector('#url');

input.addEventListener('keyup', (key) => {
    if (key.keyCode == 13) { 
        if (!input.value.trim().length) return;
        window.location.assign(`/prox/?url=${btoa(input.value)}`);
    }
});


document.querySelector("#initiate").addEventListener('click', () => {

    var input = recvinput
	if (!input.value.trim().length) return;
    window.location.assign(`/prox/?url=${btoa(input.value)}`);

});

document.querySelector("#ginit").addEventListener('click', () => {

	var input = "%google.search%"+recvinput
    if (!input.value.trim().length) return;
    window.location.assign(`/prox/?url=${btoa(input.value)}`);

});