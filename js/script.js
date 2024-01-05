const $ = (selector) => {
return	document.querySelector(selector);
}

const $i = $('i');
let progress = 0;

setInterval(
	() => {
	progress++;
	$i.innerText = `${progress}%`;

	if (progress === 100) {
		progress = 0;
	}
}, 
	100
);