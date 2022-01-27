let library = {
  libraryArr: [
    {
      title: "Infinite Jest",
      author: "David F. Wallace",
      numOfPages: 3000,
      haveRead: true,
    },
    {
      title: "Count of Monte Cristo",
      author: "Alexander Dumas",
      numOfPages: 4500,
      haveRead: false,
    },
  ],
  modal: document.querySelector(".modal"),
  addBookModal: function () {
    this.modal.style.display = "block";
  },
  hideBookModal: function () {
    this.modal.style.display = "none";
  },
};

let libraryDisplay = (function () {
  //IIFE displays all books in library.libraryArr
  (function () {
    let booksContainer = document.querySelector(".books-container");

    library.libraryArr.forEach((book) => {
      let bookCard = document.createElement("div");
      bookCard.classList.add("book");
      booksContainer.appendChild(bookCard);
      bookCard.innerHTML = ` 
    <h3 class="title">${book.title}</h3>
    <h4 class="author">${book.author}</h4>
    <h4 class="number-of-pages">${book.numOfPages} pgs</h4>
    <h5 class="have-read">${book.haveRead}</h5>
`;
    });
  })();
})();

let eventListeners = (function () {
  window.addEventListener("click", function (e) {
    if (e.target.classList == "add-btn") {
      library.addBookModal();
    }
    if (e.target.classList == "modal" || e.target.classList == "close") {
      library.hideBookModal();
    }
  });
})();

class Book {
  constructor(title, author, numOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.haveRead = haveRead;
  }

  addToLibrary() {
    library.libraryArr.push(this);
  }
}
