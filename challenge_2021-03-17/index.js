const rangeText = document.getElementById("range-text"),
  form = document.getElementById("guess-number"),
  rangeBar = form.querySelector("#range-bar"),
  number = form.querySelector("#number"),
  button = form.querySelector("#submit"),
  resultText = document.getElementById("result-text");

let maxNumber;

function createRange(range) {
  const h3 = rangeText.querySelector("h3");
  h3.innerText = `Generate a number between 0 and ${range}`;
}

function saveMaxNumber(event) {
  maxNumber = rangeBar.value;
  createRange(maxNumber);
}

function checkNumber(event) {
  const ownNumber = parseInt(number.value);
  //parseInt 로 변경 안할경우 ownNumber 은 value값을 가져오는데 string 형식이다.
  const randomNumber = Math.random() * maxNumber;
  const computerNumber = parseInt(Math.floor(randomNumber) + 1);
  let text;
  if (ownNumber === computerNumber) {
    text = "You Won!";
  } else {
    text = "You lost!";
  }
  //자료형 확인 하는방법은 console.log(typeof value);
  const span = resultText.querySelector("span");
  const h4 = resultText.querySelector("h4");
  span.innerText = `You chose: ${ownNumber}, the machine chose: ${computerNumber}.`;
  h4.innerText = text;
}

function init() {
  button.addEventListener("click", checkNumber);
  rangeBar.addEventListener("change", saveMaxNumber);
  //"submit"인 경우 페이지 이동 해서 변수에다가 값을 저장하지 못함.
}

init();
