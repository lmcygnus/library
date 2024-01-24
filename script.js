let dialog = document.querySelector("dialog");
let newbookbt = document.querySelector("dialog + #new-book-bt");
let closebt = document.querySelector("dialog #closebt");
let form = document.querySelector("form");
let authorImput = document.querySelector("#author");
let titleImput = document.querySelector("#title");
let pagesImput = document.querySelector("#pages");
let readImput = document.querySelector("#read");
let submit = document.querySelector("#submit");
let books = document.querySelector(".books");
let card = document.querySelectorAll(".bookBox");

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
  const newBook = new Book(titleImput.value, authorImput.value, pagesImput.value, readImput.checked);
  myLibrary.push(newBook);
}

function createCards () {
  const bookBox = document.createElement("div");
  const removeCard= document.createElement("button");
  const cardInfo = document.createElement("div");
  const cardInfo1 = document.createElement("div");
  const cardInfo2 = document.createElement("div");
  const cardInfo3 = document.createElement("button");

  bookBox.classList.add("bookBox");
  cardInfo.classList.add("titleInfo");
  cardInfo1.classList.add("autorInfo");
  cardInfo2.classList.add("pagesInfo");
  cardInfo3.classList.add("readInfo");
  removeCard.classList.add("removeCard")
  
  myLibrary.forEach((element, index) => {
    bookBox.setAttribute("data-number", index); 
  });
  
  cardInfo.textContent = `Title: ${titleImput.value}`;
  cardInfo1.textContent = `Author: ${authorImput.value}`;
  cardInfo2.textContent = `Number of pages: ${pagesImput.value}`;
  
  if (readImput.checked == true) {
    cardInfo3.textContent = "Read";
  }
  else {
    cardInfo3.textContent = "Not readed"
  }

  cardInfo3.addEventListener("click", () => {
    if(cardInfo3.textContent == "Read") {
      cardInfo3.textContent = "Not readed";
    }
    else if(cardInfo3.textContent == "Not readed"){
      cardInfo3.textContent = "Read";
    }
  })
  removeCard.textContent = "Remove";

  removeCard.addEventListener('click', () => {
    let index = (bookBox.dataset.number);
    myLibrary.splice(index, 1);
    bookBox.remove();
  })
    
  books.appendChild(bookBox);
  bookBox.appendChild(cardInfo);
  bookBox.appendChild(cardInfo1);
  bookBox.appendChild(cardInfo2);
  bookBox.appendChild(cardInfo3); 
  bookBox.appendChild(removeCard);
}

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  dialog.close();
  addBookToLibrary();
  createCards();
  newbookbt.style.display = "inline-block";
  books.style.display = "flex";
})

newbookbt.addEventListener("click", () => {
  form.reset();
  dialog.show();
  newbookbt.style.display = "none";
  books.style.display = "none";
})

closebt.onclick = () => {
  dialog.close();
  newbookbt.style.display = "inline-block";
  books.style.display = "flex";
}


