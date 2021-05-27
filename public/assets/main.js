var input = document.querySelector('#url');
var ginput = document.querySelector('#gurl');

input.addEventListener('keyup', (key) => {
    if (key.keyCode == 13) { 
        if (!input.value.trim().length) return;
        window.location.assign(`/prox/?url=${btoa(input.value)}`);
    }
});


document.querySelector("#initiate").addEventListener('click', () => {

    if (!input.value.trim().length) return;
    window.location.assign(`/prox/?url=${btoa(input.value)}`);

});

document.querySelector("#gsearch").addEventListener('click', () => {

	ginput.replace(" ", "+")
	input = `https://google.com/search?q=${ginput}`
    if (!input.value.trim().length) return;
    window.location.assign(`/prox/?url=${btoa(input.value)}`);

});