const addBookButton = document.getElementById("add-a-book")
const popupBackground = document.getElementById('popup-background')
const popup = document.getElementById('popup')

addBookButton.addEventListener('click', () => {
    popup.classList.remove('invisible')
    popupBackground.classList.remove('invisible')
});


const closeButton = document.getElementById('close-button')
const nameField = document.getElementById('name')
const authorField = document.getElementById('author')

closeButton.addEventListener('click', () => {
    popup.classList.add('invisible')
    popupBackground.classList.add('invisible')
    nameField.value = ""
    authorField.value = ""

})