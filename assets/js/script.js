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
let myLibrary = [];

if(localStorage.getItem)

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

    saveLocal()
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
    const isRead = readCheckbox.checked

    addBookToLibrary(titleValue, authorValue, pagesValue, isRead)
    console.log(myLibrary);
}

// creat book container
 function createBookElement(book){
    const bookDiv = document.createElement('div')
    const bookTitle = document.createElement('h3')
    const bookAuthor = document.createElement('p')
    const bookPages = document.createElement('p')
    const buttonContainer = document.createElement('div')
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

    bookDiv.appendChild(buttonContainer)
    buttonContainer.classList.add('button-container')

    removeBookBtn.textContent = "remove"
    removeBookBtn.classList.add('remove-btn')
    buttonContainer.appendChild(removeBookBtn)

    isReadBtn.appendChild(isReadIcon)
    if(book.read){
        isReadIcon.classList.add('fa-solid','fa-bookmark')
    } else {
        isReadIcon.classList.add('fa-regular','fa-bookmark')
    }

    buttonContainer.appendChild(isReadBtn)
    isReadBtn.classList.add('read-btn')


    const removeBtn = bookDiv.querySelector('.remove-btn')
   
    //remove book from array and rendering
    removeBtn.addEventListener('click', (e) => {
        myLibrary.splice(myLibrary.indexOf(book), 1)
        console.log(myLibrary);
   
        const element = e.currentTarget.parentElement.parentElement
        console.log(element);
        libraryContainer.removeChild(element)
        saveLocal()
        
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
        saveLocal()
    })
 }

 //local storage

 function saveLocal (){
     localStorage.setItem("books", JSON.stringify(myLibrary))
 }

 function restoreLocalData(){
    const getBookFromStorage = JSON.parse(localStorage.getItem('books'))
    if(getBookFromStorage !== null){
        myLibrary = getBookFromStorage
        myLibrary.forEach(book => {
            createBookElement(book)
        });
    }
        
 }
 restoreLocalData()

newBookForm.addEventListener('submit', renderBook)



