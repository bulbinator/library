const myLibrary = [] // all book objects will be stored here

function Book(title, author, pages) // constructor
{
    this.title = title
    this.author = author
    this.pages = pages
}

function addBookToLibrary(title, author, pages)
{
    let book = new Book(title, author, pages)
    myLibrary.push(book)
}


function displayLibrary()
{
    let library = document.querySelector('.library')
    library.innerHTML = ""
    myLibrary.map(function(book)
{
    bookHolder = document.createElement('div')
    bookHolder.classList.add('book')
    library.appendChild(bookHolder)

    let bookTitle = document.createElement('p')
    let bookAuthor = document.createElement('p')
    let bookPages = document.createElement('p')

    bookTitle.textContent = book.title
    bookAuthor.textContent = book.author
    bookPages.textContent = book.pages

    bookHolder.appendChild(bookTitle)
    bookHolder.appendChild(bookAuthor)
    bookHolder.appendChild(bookPages)
})
}


for (let i=0; i<=12; i++)
{
    addBookToLibrary('kafi','kulayni', 100)
}




displayLibrary()
let submit = document.querySelector('#add-book')
submit.addEventListener('click', function(e)
{
    e.preventDefault()
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value

    addBookToLibrary(title, author, pages)
})


