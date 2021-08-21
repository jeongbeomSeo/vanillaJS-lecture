const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoPending = document.querySelector(".js-pending"),
  toDoFin = document.querySelector(".js-finished");

const TODOS_LS = "toDos";
const TODOS_FIN = "finished";

let toDos = [];
let toDosFin = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoPending.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function deleteToDoFin(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoFin.removeChild(li);
  const cleanToDos = toDosFin.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDosFin = cleanToDos;
  saveToDosFin();
}

function backToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const li_span = li.querySelector("span");
  toDoFin.removeChild(li);
  const cleanToDos = toDosFin.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDosFin = cleanToDos;
  saveToDosFin();
  paintToDo(li_span.innerText);
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function saveToDosFin() {
  localStorage.setItem(TODOS_FIN, JSON.stringify(toDosFin));
}

function checkToDo(event) {
  const btn = event.target;
  const list = btn.parentNode;
  const li_span = list.querySelector("span");
  toDoPending.removeChild(list);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(list.id);
  });
  toDos = cleanToDos;
  saveToDos();
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const newId = toDosFin.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDoFin);
  backBtn.innerText = "⏪";
  backBtn.addEventListener("click", backToDo);
  span.innerText = li_span.innerText;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(backBtn);
  li.id = newId;
  toDoFin.appendChild(li);
  const toDoFinObj = {
    text: li_span.innerText,
    id: newId,
  };
  toDosFin.push(toDoFinObj);
  saveToDosFin();
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  checkBtn.innerText = "✔";
  checkBtn.addEventListener("click", checkToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.id = newId;
  toDoPending.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  const finishedToDos = localStorage.getItem(TODOS_FIN);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
  if (finishedToDos !== null) {
    const parsedFin = JSON.parse(finishedToDos);
    parsedFin.forEach(function (toDo) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      const delBtn = document.createElement("button");
      const backBtn = document.createElement("button");
      const newId = toDosFin.length + 1;
      delBtn.innerText = "❌";
      delBtn.addEventListener("click", deleteToDoFin);
      backBtn.innerText = "⏪";
      backBtn.addEventListener("click", backToDo);
      span.innerText = toDo.text;
      li.appendChild(span);
      li.appendChild(delBtn);
      li.appendChild(backBtn);
      li.id = newId;
      toDoFin.appendChild(li);
      const toDoFinObj = {
        text: toDo.text,
        id: newId,
      };
      toDosFin.push(toDoFinObj);
      saveToDosFin();
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
