const range = document.getElementById("js-range");
const title = document.querySelector(".js-title");
const guessForm = document.getElementById("js-guess");
const result = document.getElementById("js-result");

function handleRangeChange(e) {
  const selectedRange = title.querySelector("span");
  selectedRange.innerHTML = range.value;
}

function handleGuessSubmit(e) {
  e.preventDefault();
  const guessInput = guessForm.querySelector("input");
  if (guessInput.value === "") {
    return;
    // return의 특징살리기!
  }
  const max = range.value;
  const random = Math.ceil(Math.random() * max);
  const userGuess = parseInt(guessInput.value, 10);
  // parseInt 공부하기.
  const resultSpan = result.querySelector("span");
  resultSpan.innerHTML = `
  You chose: ${userGuess},
  the machine chose: ${random}.<br />
  <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
  <!-- 조건문 이용! -->
  `;
}

guessForm.addEventListener("submit", handleGuessSubmit);
range.addEventListener("input", handleRangeChange);
