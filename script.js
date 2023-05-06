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
	//div.innerHTML = item['name'];
	let button = document.createElement('button');
	button.innerHTML = item.name;
	div.appendChild(button);
	if(item.hasOwnProperty('children')) {
		console.log('children of', item.name, item['children']);
		let child_div = document.createElement('div');
		child_div.className = 'child_div  child_div_'+item.name;
		child_div.id = 'child_div_' + item.name;
		div.appendChild(child_div);
		button.addEventListener('click', ev=> actuate_menu_item(item.name));
		for(child_item of item['children']) {
			let child_anchor = document.createElement('a');
			child_anchor.innerHTML = child_item.name;
			child_anchor.href = child_item.path;	
			child_div.appendChild(child_anchor);
		}
	}
	menu.appendChild(div);
}

//actuate menu items.
function actuate_menu_item(item_name) {
	console.log('actuating menu item', item_name);
	let item = document.getElementById(('child_div_'+item_name));
	let height = item.offsetHeight;
	
	if (height == 0) {
		item.style.height = '50vh';
	} else {
		item.style.height = '0px';
	}
}
