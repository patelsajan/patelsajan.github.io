let menu = document.getElementById('menu');
let hamburger_icon = document.getElementById('hamburger');

// actuate hamburger menu on click
let isMenuOpen = false;
hamburger_icon.addEventListener('click', event=> {
	console.log('menu::', menu);
	console.log('hamburger::', hamburger);
	isMenuOpen = !isMenuOpen;
	if(!isMenuOpen) {
		menu.style.width = '0%';
	} else {
		menu.style.width = '20%';
	}
});
