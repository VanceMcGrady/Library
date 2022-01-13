let myLibrary = [];

function Book(title, author, numOfPages, haveRead) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.haveRead = haveRead;
}

Book.prototype.index = function () {
  let id = myLibrary.indexOf(this);
  return id;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(arr) {
  libraryContainer.innerHTML = "";

  arr.forEach((book) => {
    const newCard = document.createElement("div");
    newCard.innerHTML = `<div class="book-card" data-index="${book.index()}">
    <h3>${book.title}</h3>
    <h3>${book.author}</h3>
    <h3>${book.numOfPages} pgs</h3>
    <h4>${
      book.haveRead ? "I have read this book." : "I have NOT read this book."
    }</h4>
    <button id="remove-btn">Remove</button>
</div>`;
    libraryContainer.appendChild(newCard);
  });
}

function handleSubmit() {
  const textInputs = document.querySelectorAll(".text-input");

  const titleInput = document.querySelector("#title").value;
  const authorInput = document.querySelector("#author").value;
  const numOfPagesInput = document.querySelector("#pgs").value;
  const haveRead = document.querySelector("#have-read");

  const newBook = new Book(
    titleInput,
    authorInput,
    numOfPagesInput,
    haveRead.checked
  );

  addBookToLibrary(newBook);
  displayBooks(myLibrary);
  textInputs.forEach((item) => {
    item.value = "";
  });

  modal.style.display = "none";
  haveRead.checked = false;
}
const libraryContainer = document.querySelector(".library-container");
const addBtn = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const closeBtn = document.getElementsByClassName("close")[0];

const submitBtn = document.querySelector(".submit-btn");

const removeBtn = document.querySelector("#remove-btn");

// adding delete book button to book cards yet to be rendered (event bubbling)
libraryContainer.addEventListener("click", function (e) {
  const thisCard = e.target.parentElement;
  const thisIndex = thisCard.dataset.index;

  if (e.target.id === "remove-btn") {
    myLibrary.splice(thisIndex, 1);
    displayBooks(myLibrary);
  }
});

// New Book button makes modal pop up
addBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// closes modal if user clicks outside of content box
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

submitBtn.addEventListener("click", handleSubmit);

displayBooks(myLibrary);
