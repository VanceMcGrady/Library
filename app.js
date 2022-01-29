const booksContainer = document.querySelector(".books-container");
const modal = document.querySelector(".modal");
const modalContent = document.querySelectorAll(".modal-content");

class Library {
  constructor() {
    this.books = [];
  }
  addToLibrary(book) {
    this.books.push(book);
  }

  removeFromLibrary(book) {}

  displayLibrary() {
    booksContainer.innerHTML = "";
    this.books.forEach((book) => {
      booksContainer.innerHTML += ` <div class="book">
        <h3 class="title">${book.title}</h3>
        <h4 class="author">${book.author}</h4>
        <h4 class="number-of-pages">${book.numPages} pgs</h4>
        <h5 class="have-read">${book.haveRead}</h5>
      </div>`;
    });
  }

  displayModal() {
    modal.style.display = "block";
  }

  hideModal() {
    modal.style.display = "none";
  }
}
const library = new Library();

class Book {
  constructor(title, author, numPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
  }
}

(function () {
  window.addEventListener("click", function (e) {
    if (e.target.classList == "add-btn") {
      library.displayModal();
    }
    if (e.target.classList == "close" || e.target.classList == "modal") {
      library.hideModal();
    }
    if (e.target.classList == "submit-btn") {
      const titleData = document.querySelector("#title");
      const authorData = document.querySelector("#author");
      const numPagesData = document.querySelector("#num-pgs-input");
      const haveReadData = document.querySelector("#have-read-toggle");
      let newBook = new Book(
        titleData.value,
        authorData.value,
        numPagesData.value,
        haveReadData.checked
      );
      library.addToLibrary(newBook);
      library.hideModal();
      library.displayLibrary();
    }
  });
})();
