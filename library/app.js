const libraryContainer = document.querySelector("#library-container");
const library = [];

const newBookModal = document.querySelector("#new-book-modal");
const newBookForm = document.querySelector("#new-book-form");
const closeBtn = document.querySelector("#close");

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
    library.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-container");
        libraryContainer.appendChild(bookDiv);

        const removeDiv = document.createElement("div");
        removeDiv.classList.add("remove");
        removeDiv.textContent = "×";
        removeDiv.addEventListener("click", removeBook.bind(null, index));
        bookDiv.appendChild(removeDiv);

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
        readDiv.textContent = book.read ? "Read" : "Not read";
        readDiv.addEventListener("click", toggleBook.bind(null, book, readDiv));
        bookDiv.appendChild(readDiv);
    });

    // add "new book" button to the end
    const newBook = document.createElement("button");
    newBook.id = "new-book-button";
    newBook.innerText = "New book";
    newBook.addEventListener("click", () => {
        newBookModal.style.display = "block";
    });
    libraryContainer.appendChild(newBook);
}

// remove book from library
function removeBook(index) {
    library.splice(index, 1);
    displayBooks();
}

// toggle book read status
function toggleBook(book, readDiv) {
    book.read = !book.read;
    readDiv.textContent = book.read ? "Read" : "Not read";
}

// ways to close the modal
closeBtn.addEventListener("click", () => {
    newBookModal.style.display = "none";
});
window.addEventListener("click", (event) => {
    if (event.target == newBookModal) newBookModal.style.display = "none";
});

// new book form submission
newBookForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent default form submit

    // add new book to library
    let newTitle = document.querySelector("#new-title").value;
    let newAuthor = document.querySelector("#new-author").value;
    let newPages = document.querySelector("#new-pages").value;
    let newReadStatus = (document.querySelector("input:checked").value === "read") ? true : false;
    addBookToLibrary(newTitle, newAuthor, newPages, newReadStatus);

    // refresh the library to include the new book
    newBookForm.reset();
    newBookModal.style.display = "none";
    displayBooks();

});

// example books
addBookToLibrary("The Fellowship of the Ring", "J. R. R. Tolkien", 423, true);
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", 309, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("Brave New World", "Aldous Huxley", 311, false);
addBookToLibrary("The Handmaid's Tale", "Margaret Atwood", 311, true);
addBookToLibrary("Catch-22", "Joseph Heller", 453, false);

displayBooks();