const form = document.querySelector(`form`);
const formfieldset = document.querySelector(`fieldset`);
const enableEditButton = document.querySelector(`#enableEdit`);
const cancelEditButton = document.querySelector(`#cancelEdit`);
const resetEditButton = document.querySelector(`#resetEdit`);
const updateEditButton = document.querySelector(`#updateItem`);
const deleteItemButton = document.querySelector(`#deleteItem`);
const confirmDeleteForm = document.querySelector(`#confirmDeleteForm`);
const cancelDeleteButton = document.querySelector(`#cancelDelete`);

console.log(`test`)
console.log(deleteItemButton, updateEditButton);

enableEditButton.addEventListener('click', (e) => {
    e.preventDefault();
    cancelEditButton.style.display = "inline";
    resetEditButton.style.display = 'inline';
    updateEditButton.style.display = 'inline';
    enableEditButton.style.display = 'none';
    formfieldset.disabled = !formfieldset.disabled;
});

cancelEditButton.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
    cancelEditButton.style.display = "none";
    resetEditButton.style.display = 'none';
    updateEditButton.style.display = 'none';
    enableEditButton.style.display = 'inline';
    formfieldset.disabled = !formfieldset.disabled;
})

deleteItemButton.addEventListener('click', (e)=>{
  e.preventDefault();
  confirmDeleteForm.style.display = 'block';
  deleteItemButton.style.display = 'none';
})

cancelDeleteButton.addEventListener('click', (e)=>{
  e.preventDefault();
  confirmDeleteForm.reset();
  confirmDeleteForm.style.display = 'none';
  deleteItemButton.style.display = 'inline';
})
