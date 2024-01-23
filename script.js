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

function createCards () {
  const bookBox = document.createElement("div");
  const removeCard= document.createElement("div");
  const cardInfo = document.createElement("div");
  const cardInfo1 = document.createElement("div");
  const cardInfo2 = document.createElement("div");
  const cardInfo3 = document.createElement("button");

  bookBox.classList.add("bookBox");
  cardInfo.classList.add("titleInfo");
  cardInfo1.classList.add("autorInfo");
  cardInfo2.classList.add("pagesInfo");
  cardInfo3.classList.add("readInfo");
  
  bookBox.setAttribute("data-number", counter);
  
  cardInfo.textContent = `Title: ${titleImput.value}`;
  cardInfo1.textContent = `Author: ${authorImput.value}`;
  cardInfo2.textContent = `Number of pages: ${pagesImput.value}`;
  cardInfo3.textContent = `${readImput.value}`;
  removeCard.innerHTML = `<button class="button" id="closebt">
  <span class="X"></span>
  <span class="Y"></span>
  <div class="close">Close</div>
</button>`;

  removeCard.addEventListener('click', () => {
    let index = (bookBox.dataset.number) -1 ;
    myLibrary.splice(index, 1);
    bookBox.remove();
    counter -- ;
  })
    
  books.appendChild(bookBox);
  bookBox.appendChild(cardInfo);
  bookBox.appendChild(cardInfo1);
  bookBox.appendChild(cardInfo2);
  bookBox.appendChild(cardInfo3); 
  bookBox.appendChild(removeCard);
}

submitImput.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
  addBookToLibrary();
  createCards();
  newbookbt.style.display = "inline-block";
})

newbookbt.onclick = () => {
  dialog.show();
  newbookbt.style.display = "none";
  titleImput.value = "";
  authorImput.value = "";
  pagesImput.value = "";
  readImput.checked === false;
}

closebt.onclick = () => {
  dialog.close();
  newbookbt.style.display = "inline-block";
}