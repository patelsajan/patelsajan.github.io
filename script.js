let menu = document.getElementById('menu');
let hamburger_icon = document.getElementById('hamburger');

// actuate menu on click
let isMenuOpen = false;
hamburger_icon.addEventListener('click', event=> {
	isMenuOpen = !isMenuOpen;
	if(!isMenuOpen) {
		menu.style.width = '0%';
	} else {
		menu.style.width = '20%';
	}
});

// populate menu items
console.log('menu_items', menu_items);
for(index in menu_items) {
	let item = menu_items[index];
	let div = document.createElement('div');
	div.className = 'menu_item';
	div.innerHTML = item['name'];
	menu.appendChild(div);
	if(item.hasOwnProperty('children')) {
		console.log(item['children']);
	}
}
