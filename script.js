// let btn = document.getElementById("submit");
// let elementUl = document.getElementById("book-list");

const myLibrary = [];

class Book {
  constructor(title, author, pages, checkRead) {
    this.title = title;
    this.author = author;
    this.pagesContained = pages;
    this.alreadyRead = checkRead;

    const myBook = new Book(title, author, pages, checkRead);
    console.log('title,author,pages,checkRead', title,author,pages,checkRead)
    myLibrary.push(myBook);
  }
}

const addElement = (title, author, pages, checkRead) => {
  console.log('title,author,pages,checkRead', title,author,pages,checkRead)
  let bookContainer = document.getElementById("card-container");
console.log('bookContainer', bookContainer)
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("removeBtn");
  removeBtn.textContent = "X";

  removeBtn.addEventListener("click", function () {
    bookContainer.remove();
  });

  bookContainer.appendChild(removeBtn);

  const cardChangeStatusButton = document.createElement("button");
  cardChangeStatusButton.classList.add("status-btn");
  cardChangeStatusButton.textContent = "✔";

  cardChangeStatusButton.addEventListener("click", function () {
    let status = readCheckRead.textContent;

    if (status == "The book is read") {
      readCheckRead.textContent = "The book is not read";
    } else {
      readCheckRead.textContent = "The book is read";
    }
  });

  bookContainer.appendChild(cardChangeStatusButton);

  let titleContent = document.getElementById("element-title");
  let authorContent = document.getElementById("element-author");
  let readContent = document.getElementById("element-pages");
  let readCheckRead = document.getElementById("element-checkRead");

  titleContent.textContent = title;
  authorContent.textContent = author;
  readContent.textContent = pages + " pages";
  readCheckRead.textContent = checkRead;
};

let newBook = document.getElementById("submit");
let resetBtn = document.getElementById("reset");
let containerBook = document.getElementById("card-container")

newBook.addEventListener("click",(e)=>{
  console.log('clicked')
  e.preventDefault()
  let title = "";
  let author = "";
  let pages = 0;
  let checkRead = false;  

const dialogue = document.getElementById("book-list")
const titleInput = document.querySelector("#inputTitle")
// const titleInput = document.getElementById("inputTitle").value;
const authorInput = document.querySelector("#author")
// const authorInput = document.getElementById("author").value;
const pagesInput = document.querySelector("#pages")
// const pagesInput = document.getElementById("pages").value;
// const checkInput = document.getElementById("Cyes").value
const checkInput = document.querySelector("#Cyes")
const form = document.getElementById("form")

const optionContainer = document.createElement("div");
optionContainer.classList.add("optionContainer");
form.appendChild(optionContainer);


const formButtonCancel = document.createElement("button");
    formButtonCancel.classList.add("cancelButton");
    formButtonCancel.textContent = "X";
    form.appendChild(formButtonCancel);

const confirmBtn = document.createElement("button");
confirmBtn.setAttribute("for","submit");
confirmBtn.classList.add("confirmButton");
confirmBtn.textContent = "Add Book";
form.appendChild(confirmBtn);

confirmBtn.addEventListener("click",function(event){
  console.log('clicked' )
  event.preventDefault();
  title = titleInput.value;
  console.log('title', titleInput.value)
  author = authorInput.value;
  console.log('authorInput', authorInput)
  pages = pagesInput.value;
  console.log('pages', pages)
  if(checkInput.checked == true ){
      checkRead = "The book is read";
  }
  else{
      checkRead = "The book is not read";
  }
  console.log('title,author,pages,checkRead', title,author,pages,checkRead)
  addElement(title,author,pages,checkRead);
  // dialogue.close();

})
// dialogue.show();

})

resetBtn.addEventListener("click",function(){
  containerBook.innerHTML = "";
})
