const notificationForm = document.querySelector(".notification__form");
const notificationInput = notificationForm.querySelector("input");
const notification = document.querySelector(".notification");
const notificationTask = document.querySelector(".notification__message");

const checkbox = document.querySelector(".checkbox");
const checkboxInput = checkbox.querySelector("input");
const task = document.querySelector(".notification__message");

const TASK_KEY = "task";
const CHECKBOX_BOOLEAN = "checkbox";

//About paint Notification and erase form state
function paintNotification(task) {
  notificationForm.classList.remove("active");
  notification.classList.add("active");
  notificationTask.innerHTML = task;
  checkboxReloading();
}

//About Received text through input:text and toss
function enterTask(event) {
  event.preventDefault();
  const task = notificationInput.value;
  notificationInput.value = "";
  localStorage.setItem(TASK_KEY, task);
  paintNotification(task);
}

const getLocalItem = localStorage.getItem(TASK_KEY);

//First Strat
if (getLocalItem !== null) {
  paintNotification(getLocalItem);
} else {
  notificationForm.classList.add("active");
  notificationForm.addEventListener("submit", enterTask);
}

const notificationOption = document.querySelector(".notification__option");
const optinoClearIcon = notificationOption.querySelector("i");
const optionClear = document.querySelector(".option__clear");

//About Create mid-line when checkbox is clicked
function touchTask() {
  if (checkboxInput.checked) {
    localStorage.setItem(CHECKBOX_BOOLEAN, "true");
    task.style.textDecoration = "line-through";
    task.style.textDecorationColor = "white";
    task.style.textDecorationThickness = "3px";
  } else {
    localStorage.setItem(CHECKBOX_BOOLEAN, "false");
    task.style.textDecoration = "none";
  }
}

checkboxInput.addEventListener("click", touchTask);

//About Checkbox function
function checkboxReloading() {
  const checkboxChecked = localStorage.getItem(CHECKBOX_BOOLEAN);
  if (checkboxChecked === "true") {
    checkboxInput.checked = true;
  } else {
    checkboxInput.checked = false;
  }
  touchTask();
}

//About remove the Task and reutrn to the Form state
function removeTask() {
  localStorage.removeItem(TASK_KEY);
  notificationForm.classList.add("active");
  notification.classList.remove("active");
  optionClear.classList.remove("active");
  localStorage.setItem(CHECKBOX_BOOLEAN, "false");
  checkboxReloading();
}

//About Change the display when you click the icon
function displayChange() {
  optionClear.classList.toggle("active");
  optionClear.addEventListener("click", removeTask);
}

optinoClearIcon.addEventListener("click", displayChange);
