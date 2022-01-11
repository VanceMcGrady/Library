let myLibrary = [];

function Book(title, author, numOfPages, haveRead) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.haveRead = haveRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(arr) {
  const libraryContainer = document.querySelector(".library-container");
  libraryContainer.innerHTML = "";

  arr.forEach((book) => {
    const newCard = document.createElement("div");
    newCard.innerHTML = `<div class="book-card">
    <h3>${book.title}</h3>
    <h3>${book.author}</h3>
    <h3>${book.numOfPages} pgs</h3>
    <h4>${
      book.haveRead ? "I have read this book." : "I have NOT read this book."
    }</h4>
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

const addBtn = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const closeBtn = document.getElementsByClassName("close")[0];

const submitBtn = document.querySelector(".submit-btn");

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
