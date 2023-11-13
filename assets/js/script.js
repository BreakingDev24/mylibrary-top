const formContainerDialog = document.getElementById('form-container')
const newBookBtn = document.getElementById('new-book-btn')
const closeDialogBtn = document.getElementById('close-dialog-btn')
const subtmitBtn = document.getElementById('submit-btn')
const newBookForm = document.getElementById('new-book-form')
const libraryContainer = document.getElementById('library-container')
const readCheckbox = document.querySelector('input[name="read-checkbox"]')
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
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

// render book

function renderBook(e){
    e.preventDefault()

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
    const readCheckbox = document.querySelector('input[name="read-checkbox"]')
    let isRead
    if (readCheckbox.checked){
        isRead = true
    } else {
        isRead = false
    }
    addBookToLibrary(titleValue, authorValue, pagesValue, isRead)
    console.log(myLibrary);
}

// creat book container
 function createBookElement(book){
    const bookDiv = document.createElement('div')
    const bookTitle = document.createElement('h3')
    const bookAuthor = document.createElement('p')
    const bookPages = document.createElement('p')
    const removeBookBtn = document.createElement('button')
    const isReadBtn = document.createElement('button')
    const isReadIcon = document.createElement('i')

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

    isReadBtn.appendChild(isReadIcon)
    if(book.read){
        isReadIcon.classList.add('fa-solid','fa-bookmark')
    } else {
        isReadIcon.classList.add('fa-regular','fa-bookmark')
    }

    bookDiv.appendChild(isReadBtn)

    const removeBtn = bookDiv.querySelector('.remove-btn')
   
    //remove book from array and rendering
    removeBtn.addEventListener('click', (e) => {
        myLibrary.splice(myLibrary.indexOf(book), 1)
        console.log(myLibrary);
   
        const element = e.currentTarget.parentElement
        console.log(element);
        libraryContainer.removeChild(element)
        
    })
    //change read status
    isReadBtn.addEventListener('click', () => {
        if(isReadIcon.classList.contains('fa-solid')){
            book.read = false
            isReadIcon.classList.remove('fa-solid')
            isReadIcon.classList.add('fa-regular')
            
        } else {
            book.read = true 
            isReadIcon.classList.add('fa-solid')
            isReadIcon.classList.remove('fa-regular')
            
        }
    })
 }


subtmitBtn.addEventListener('click', renderBook)



