const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

const addItem = (e) => {
	e.preventDefault();

	const newItem = itemInput.value;

	//Validate Input
	if(newItem === ''){
		alert('Please enter an item');
		return;
	}

	//Create List Item
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(newItem));

	const btn = createButton('remove-item btn-link text-red');

	li.appendChild(btn);

	itemList.appendChild(li);

	//Clear Input
	itemInput.value = '';
}

const createButton = (btnClass) => {
	const btn = document.createElement("button");
	btn.className = btnClass;
	const icon = createIcon("fa-solid fa-xmark");
	btn.appendChild(icon);
	return btn;
}

const createIcon = (iconClass) => {
	const icon = document.createElement('i');
	icon.className = iconClass;
	return icon;
}

//Event Listeners
itemForm.addEventListener('submit', addItem);