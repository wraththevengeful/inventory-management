const addItemButton = document.querySelector(`.addItem`);
const addDropDownMenu = document.querySelector(`.addDropDownMenu`);




// STYLES
addItemButton.addEventListener('mouseover', () => {
    addDropDownMenu.style.opacity = 100;
});

addItemButton.addEventListener('mouseout', () => {
    addDropDownMenu.style.opacity = 0;
})

addDropDownMenu.addEventListener('mouseover', () => {
    addDropDownMenu.style.opacity = 100;
});

addDropDownMenu.addEventListener('mouseout', () => {
    addDropDownMenu.style.opacity = 0;
})



console.log(addItemButton)