const myLibrary = [];
let theStatus = false;
let numberId = 0

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = numberId++;

}

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
const numberPages = document.getElementById('pages')
const readStatus = document.getElementById('read')


closeButton.addEventListener('click', () => {
    popup.classList.add('invisible')
    popupBackground.classList.add('invisible')
    nameField.value = ""
    authorField.value = ""

})

function getFormData() {
    if (readStatus.value == 'one') theStatus = true;
    let book = new Book(nameField.value, authorField.value, numberPages.value, theStatus)
    myLibrary.push(book)
    addBookToLibrary(book)

}

const contentDiv = document.querySelector('.content')

function addBookToLibrary(book) {
    const div = document.createElement('div')
    const nameP = document.createElement('p')
    const authorP = document.createElement('p')
    const pagesP = document.createElement('p')
    const nameSpan = document.createElement('span')
    const authorSpan = document.createElement('span')
    const pagesSpan = document.createElement('span')
    const buttonsDiv = document.createElement('div')
    div.classList.add('card')
    div.appendChild(nameP)
    nameP.innerText = "Name: "
    nameP.appendChild(nameSpan)
    div.appendChild(authorP)
    authorP.innerText = "Author: "
    authorP.appendChild(authorSpan)
    div.appendChild(pagesP)
    pagesP.innerText = "Pages: "
    pagesP.appendChild(pagesSpan)
    div.appendChild(buttonsDiv)
    buttonsDiv.classList.add('buttons')
    buttonsDiv.innerHTML = `<div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>Edit</title>
        <path fill="gold" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
    </svg>
</div>
<div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>Mark as read</title>
        <path fill="green" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
    </svg>
</div>
<div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>Remove</title>
        <path fill="#eee" d="M20.41 19L22.54 21.12L21.12 22.54L19 20.41L16.88 22.54L15.47 21.12L17.59 19L15.47 16.88L16.88 15.47L19 17.59L21.12 15.47L22.54 16.88L20.41 19M19 13C20.09 13 21.12 13.3 22 13.81V6C22 4.89 21.11 4 20 4H4C2.9 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H13.09C13.04 19.67 13 19.34 13 19C13 15.69 15.69 13 19 13Z" />
    </svg>
</div>`

    nameSpan.textContent = `${book.name}`
    authorSpan.textContent = `${book.author}`
    pagesSpan.textContent = `${book.pages}` 
    contentDiv.appendChild(div)
    console.log("true")
}