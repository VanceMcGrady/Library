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
    libraryContainer.appendChild(newCard);
    newCard.innerHTML = "<h4> TESTING </h4>";
  });
}
