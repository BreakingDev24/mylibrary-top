const formContainerDialog = document.getElementById('form-container')
const newBookBtn = document.getElementById('new-book-btn')
const closeDialogBtn = document.getElementById('close-dialog-btn')
const subtmitBtn = document.getElementById('submit-btn')
const newBookForm = document.getElementById('new-book-form')
const libraryContainer = document.getElementById('library-container')

//open form window

newBookBtn.addEventListener('click', () =>{
    formContainerDialog.showModal()
})

// close form
closeDialogBtn.addEventListener('click', () => {
    formContainerDialog.close()
})

formContainerDialog.showModal()

// LIBRARY
const myLibrary = [];

// construnctor function for book

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages) {
    let newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
}

function getBookValue(e){
    e.preventDefault()

    const titleValue = document.getElementById('title').value;
    const authorValue = document.getElementById('author').value;
    const pagesValue = document.getElementById('pages').value;
    
    addBookToLibrary(titleValue, authorValue, pagesValue)
    console.log(myLibrary);
}

subtmitBtn.addEventListener('click', getBookValue)