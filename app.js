const modal = document.querySelector(".modal");
const addBtn = document.querySelector(".add-btn");

let myLibrary = [];

//Book constructor

function Book(title, author, numOfPages, haveRead) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.haveRead = haveRead;
}
// adding method to book prototype
Book.prototype.displayInfo = function () {
  return `${this.title} by ${this.author}  is ${
    this.numOfPages
  } pages long and  ${
    this.haveRead ? "I have indeed read it" : "I have yet to read it"
  }`;
};

//
function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(arr) {
  const mainContainer = document.querySelector(".books-container");

  arr.forEach((book) => {
    const bookCard = document.createElement("div");
    mainContainer.appendChild(bookCard);
    bookCard.innerHTML = `<div class="book-card">
    <h4>${book.title}</h4>

    <h4>${book.author}</h4>

    <h4>${book.numOfPages} pages</h4>

    <h4>${
      book.haveRead ? "Have Read This book" : "Have Not Read This Book"
    }</h4>`;
  });
}

const book1 = new Book("Infinite Jest", "David F. Wallace", 3000, true);

const book2 = new Book(
  "One Hundred Years of Solitude",
  "Gabriel Garcia Marquez",
  560,
  true
);

//event listeners
function hideModal(e) {
  if (e.target == modal) {
    modal.classList = "modal-hidden";
  }
}
function displayModal(e) {
  modal.classList = "modal";
}

window.addEventListener("click", hideModal);
addBtn.addEventListener("click", displayModal);

console.log(modal.style.display);
addBookToLibrary(book1);
addBookToLibrary(book2);

displayBooks(myLibrary);
