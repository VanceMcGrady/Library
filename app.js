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

  displayLibrary() {
    booksContainer.innerHTML = "";
    this.books.forEach((book) => {
      booksContainer.innerHTML += ` <div class="book" data-index='${book.index()}'>
        
        <h3 class="title">${book.title}</h3>
        <h4 class="author">${book.author}</h4>
        <h4 class="number-of-pages">${book.numPages} pgs</h4>
        <div class="checkbox-container"> 
         <h5 class="have-read">${book.haveRead}</h5>
         <input type="checkbox" id="have-read-toggle-on-card" checked=${
           book.haveRead
         }>
        </div> 
        <button class="delete-button"> Delete </div> 
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

  index() {
    let id = library.books.indexOf(this);
    return id;
  }

  toggleReadStatus() {
    let thisBook = library.books[library.books.indexOf(this)];
    thisBook.haveRead = !thisBook.haveRead;
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
    if (e.target.classList == "delete-button") {
      const currentCardIndex = e.target.parentElement.dataset.index;
      library.books.splice(currentCardIndex, 1);
      library.displayLibrary();
    }
    if (e.target.id === "have-read-toggle-on-card") {
      let ourCurrentBookObject =
        library.books[e.target.parentElement.parentElement.dataset.index];
      ourCurrentBookObject.toggleReadStatus();
      let ourCurrentBookCheckbox = e.target;
      ourCurrentBookCheckbox.checked = ourCurrentBookObject.haveRead;
      library.displayLibrary();
      console.log(ourCurrentBookObject);
    }
  });
})();

console.log(library.books);
