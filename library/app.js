const libraryContainer = document.querySelector("#library-container");
const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    library.push(new Book(title, author, pages, read));
}

// display all books in the library
function displayBooks() {
    // clear existing display, if any
    while (libraryContainer.firstChild) {
        libraryContainer.removeChild(libraryContainer.lastChild);
    }

    // display each book
    library.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-container");
        libraryContainer.appendChild(bookDiv);

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("title");
        titleDiv.textContent = book.title;
        bookDiv.appendChild(titleDiv);

        const authorDiv = document.createElement("div");
        authorDiv.classList.add("author");
        authorDiv.textContent = "by " + book.author;
        bookDiv.appendChild(authorDiv);

        const pagesDiv = document.createElement("div");
        pagesDiv.classList.add("pages");
        pagesDiv.textContent = book.pages + " pages";
        bookDiv.appendChild(pagesDiv);

        const readDiv = document.createElement("div");
        readDiv.classList.add("read");
        if(book.read) {
            readDiv.textContent = "Read";
        } else {
            readDiv.textContent = "Not read";
        }
        bookDiv.appendChild(readDiv);
    });
}

addBookToLibrary("The Fellowship of the Ring", "J. R. R. Tolkien", 423, true);
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", 309, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("Brave New World", "Aldous Huxley", 311, false);
addBookToLibrary("The Fellowship of the Ring", "J. R. R. Tolkien", 423, true);
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", 309, true);

displayBooks();