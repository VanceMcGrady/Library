let libray = {
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
  addBookModal: function () {
    console.log("add book modal working");
  },
};

let libraryDisplay = (function () {
  //IIFE displays all books in library.libraryArr
  (function () {
    let booksContainer = document.querySelector(".books-container");

    libray.libraryArr.forEach((book) => {
      let bookCard = document.createElement("div");
      bookCard.classList.add("book");
      booksContainer.appendChild(bookCard);
      bookCard.innerHTML = ` 
    <h3 class="title">${book.title}</h3>
    <h4 class="author">${book.author}</h4>
    <h4 class="number-of-pages">${book.numOfPages}</h4>
    <h5 class="have-read">${book.haveRead}</h5>
`;
    });
  })();
})();

let eventListeners = (function () {
  window.addEventListener("click", function (e) {
    if (e.target.classList == "add-btn") {
      libray.addBookModal();
    }
  });
})();
