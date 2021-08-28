const todoListParentNode = document.querySelector(".footer__todoList");
const todoList = document.querySelector(".todoList");

const todoListHeader = document.querySelector(".todoList__header");
const todoListHeaderIcon = todoListHeader.querySelector(".fa-ellipsis-h");
const headerDeleteBox = document.querySelector(".delete-box");

const list = document.querySelector(".todoList__list");

const inputText = document.querySelector(".todoList__input");

function todoListOpen() {
  todoList.classList.toggle("active");
}

todoListParentNode.addEventListener("click", todoListOpen);

function deleteBoxOpen() {
  headerDeleteBox.classList.toggle("active");
}

todoListHeaderIcon.addEventListener("click", deleteBoxOpen);
