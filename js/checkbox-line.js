const checkbox = document.querySelector(".checkbox");
const checkboxInput = checkbox.querySelector("input");
const task = document.querySelector(".notification__message");

function touchTask() {
  if (checkboxInput.checked) {
    task.style.textDecoration = "line-through";
    task.style.textDecorationColor = "white";
    task.style.textDecorationThickness = "3px";
  } else {
    task.style.textDecoration = "none";
  }
}

checkboxInput.addEventListener("click", touchTask);
