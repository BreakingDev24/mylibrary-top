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