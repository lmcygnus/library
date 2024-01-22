let dialog = document.querySelector("dialog")
let newbookbt = document.querySelector("dialog + #new-book-bt")
let closebt = document.querySelector("dialog #closebt")
let authorImput = document.querySelector("#author")
let titleImput = document.querySelector("#title")
let pagesImput = document.querySelector("#pages")
let readImput = document.querySelector("#read")
let submitImput = document.querySelector("#submit")
let books = document.querySelector(".books")
let counter = 0;
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
}

function addBookToLibrary() {
  const newBook = new Book(titleImput.value, authorImput.value, pagesImput.value, readImput.value);
  myLibrary.push(newBook);
  counter ++;
}

function changeRead() {
  if(readImput.checked === true){
    readImput.value = "Read";
  }
  else {
    readImput.value = "Not read";
  }
}
changeRead();

function createCards () {
  const bookBox = document.createElement("div");
  const removeCard= document.createElement("button")
  const cardInfo = document.createElement("div");
  const cardInfo1 = document.createElement("div");
  const cardInfo2 = document.createElement("div");
  const cardInfo3 = document.createElement("input")
    bookBox.classList.add("bookBox");
    bookBox.setAttribute("data-number", counter)
    books.appendChild(bookBox);
    console.log(bookBox.dataset.number);
  
    removeCard.classList.add("removeCard")
    removeCard.addEventListener('click', () => {
        let index = (bookBox.dataset.number) -1 ;
        myLibrary.splice(index, 1);
        bookBox.remove();
        counter -- ;
    })
    bookBox.appendChild(removeCard);
  
    cardInfo.classList.add("titleInfo");
    cardInfo.textContent = `Title: ${titleImput.value}`;
    bookBox.appendChild(cardInfo);
  
    cardInfo1.classList.add("autorInfo");
    cardInfo1.textContent = `Author: ${authorImput.value}`;
    bookBox.appendChild(cardInfo1);
  
    cardInfo2.classList.add("pagesInfo");
    cardInfo2.textContent = `Number of pages: ${pagesImput.value}`;
    bookBox.appendChild(cardInfo2);
  
    cardInfo3.type = "checkbox";
    cardInfo3.classList.add("readInfo");
    cardInfo3.addEventListener("click", () => {
      if(cardInfo3.checked === true) {
        cardInfo3.checked === false;
      }
      else {
        cardInfo3.checked === true;
      }

    })
    bookBox.appendChild(cardInfo3);
}

function showBook() {
  submitImput.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
    addBookToLibrary();
    createCards();
  })
}

newbookbt.onclick = () => {
  dialog.show();
  titleImput.value = "";
  authorImput.value = "";
  pagesImput.value = "";

}

closebt.onclick = () => {
  dialog.close();
}

showBook();