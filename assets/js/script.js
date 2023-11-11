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


// LIBRARY
const myLibrary = [];

// constructor function for book

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//push book in array
function addBookToLibrary(title, author, pages) {
    let newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
}

// render book

function renderBook(){

    getBookValue()

    createBookElement(myLibrary[myLibrary.length-1])
    newBookForm.reset()
    formContainerDialog.close()
}

//get value from form
function getBookValue(){

    const titleValue = document.getElementById('title').value;
    const authorValue = document.getElementById('author').value;
    const pagesValue = document.getElementById('pages').value;
    addBookToLibrary(titleValue, authorValue, pagesValue)
    console.log(myLibrary);
}

// creat book container
 function createBookElement(book){
    const bookDiv = document.createElement('div')
    const bookTitle = document.createElement('h3')
    const bookAuthor = document.createElement('p')
    const bookPages = document.createElement('p')
    const removeBookBtn = document.createElement('button')

    libraryContainer.appendChild(bookDiv)
    bookDiv.classList.add('book-div')

    bookTitle.textContent = book.title
    
    bookDiv.appendChild(bookTitle)

    bookAuthor.textContent = book.author
    bookDiv.appendChild(bookAuthor)

    bookPages.textContent = book.pages
    bookDiv.appendChild(bookPages)

    removeBookBtn.textContent = "remove"
    removeBookBtn.classList.add('remove-btn')
    bookDiv.appendChild(removeBookBtn)

    const removeBtn = bookDiv.querySelector('.remove-btn')
    //remove book from array and rendering
    removeBtn.addEventListener('click', (e) => {
        myLibrary.splice(myLibrary.indexOf(book), 1)
        console.log(myLibrary);
   
        const element = e.currentTarget.parentElement
        console.log(element);
        libraryContainer.removeChild(element)
        
    })
 }


subtmitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    renderBook()
})



