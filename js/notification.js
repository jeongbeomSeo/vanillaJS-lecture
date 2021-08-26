//About form
const containerNoti = document.querySelector(".container__notification");
const notificationForm = containerNoti.querySelector(".notification__form");
const notificationInput = notificationForm.querySelector("input");

//About notification
const notification = document.querySelector(".notification");

const NOTIFICATION_CHECK = "task";

function paintButton(notificationTask) {
  const label = document.createElement("label");
  label.className = "checkbox";
  const input = document.createElement("input");
  input.type = "checkbox";
  const checkboxSpan = document.createElement("span");
  label.appendChild(input);
  label.appendChild(checkboxSpan);
  notificationTask.appendChild(label);
}

function paintNotification(task) {
  const notiTitle = document.createElement("span");
  const notiTask = document.createElement("span");
  const notificaitonTask = document.createElement("div");
  notificaitonTask.className = "notification__task";
  notiTitle.innerHTML = "Today";
  notiTask.innerHTML = `${task}`;
  notification.appendChild(notiTitle);
  notification.appendChild(notificaitonTask);
  paintButton();
}

function paintcheckList(event) {
  event.preventDefault();
  const text = notificationInput.value;
  localStorage.setItem(NOTIFICATION_CHECK, text);
  notificationForm.remove();
  paintNotification(text);
}

const getTask = localStorage.getItem(NOTIFICATION_CHECK);

if (getTask !== null) {
  notificationForm.remove();
  paintNotification(getTask);
} else {
  notificationForm.addEventListener("submit", paintcheckList);
  // enter이 아니라 submit인것 인지
}
