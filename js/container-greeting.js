const greeting = document.querySelector(".container__greeting");
const greetingForm = document.querySelector(".greeting__form");
const greetingInput = greetingForm.querySelector("input");

const LOGIN_KEY = "loginName";

function paintGreeting(name) {
  const greetingSpan = document.createElement("span");
  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  if (currentHours < 12) {
    greetingSpan.innerHTML = `Good morning, ${name}`;
  } else if (12 < currentHours && currentHours < 18) {
    greetingSpan.innerHTML = `Good afternoon, ${name}`;
  } else if (18 < currentHours && currentHours < 20) {
    greetingSpan.innerHTML = `Good evening, ${name}`;
  } else {
    greetingSpan.innerHTML = `Good night, ${name}`;
  }
  greetingSpan.className = "greeting-span";
  greetingForm.remove();
  greeting.appendChild(greetingSpan);
}

function logInEnter(event) {
  event.preventDefault();
  const text = greetingInput.value;
  localStorage.setItem(LOGIN_KEY, text);
  paintGreeting(text);
}

const getItem = localStorage.getItem(LOGIN_KEY);

if (getItem !== null) {
  paintGreeting(getItem);
} else {
  greetingForm.addEventListener("submit", logInEnter);
}
