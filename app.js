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
  console.log(
    `${this.title} by ${this.author}  is ${this.numOfPages} pages long and  ${
      this.haveRead ? "I have indeed read it" : "I have yet to read it"
    }`
  );
};

//
function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book1 = new Book("Infinite Jest", "David F. Wallace", 3000, true);
book1.displayInfo();
addBookToLibrary(book1);

console.log(myLibrary);
