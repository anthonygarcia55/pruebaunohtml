const shoppingList = document.getElementById('shopping-list');
const itemInput = document.getElementById('item-input');
const addItemButton = document.getElementById('add-item-button');
const downloadButton = document.getElementById('download-button');

addItemButton.addEventListener('click', () => {
    const newItem = itemInput.value.trim();
    if (newItem !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = newItem;
        shoppingList.appendChild(listItem);
        itemInput.value = "";
    }
});

downloadButton.addEventListener('click', () => {
    html2canvas(shoppingList).then(canvas => {
        const link = document.createElement('a');
        link.download = 'lista-de-compras.jpg';
        link.href = canvas.toDataURL('image/jpeg');
        link.click();
    });
});