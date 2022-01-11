let myLibrary = [
  {
    title: "Infinite Jest",
    author: "David F. Wallace",
    numOfPages: 3000,
    haveRead: true,
  },
  {
    title: "Lord of The Rings",
    author: "J.R.R. Tolkien",
    numOfPages: 5000,
    haveRead: false,
  },
  {
    title: "Harry Potter and The Chamber of Secrets",
    author: "J.K. Rowling",
    numOfPages: 500,
    haveRead: true,
  },
];

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

  arr.forEach((book) => {
    const newCard = document.createElement("div");
    newCard.innerHTML = `<div class="book-card">
    <h3>${book.title}</h3>
    <h3>${book.author}</h3>
    <h3>${book.numOfPages}pgs</h3>
    <h4>${
      book.haveRead ? "I have read this book." : "I have NOT read this book."
    }</h4>
</div>`;
    libraryContainer.appendChild(newCard);
  });
}

const addBtn = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const closeBtn = document.getElementsByClassName("close")[0];

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

displayBooks(myLibrary);
