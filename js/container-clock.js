const containerClock = document.querySelector(".container__clock");
const clockSpan = containerClock.querySelector("span");

function clock() {
  const newDate = new Date();
  const change = containerClock.querySelector(".change");
  if (change === null) {
    const hours = `${newDate.getHours()}`.padStart(2, "0");
    const minutes = `${newDate.getMinutes()}`.padStart(2, "0");
    // string(newDate.getHours()).padStart(2, "0"); 이런 방식도 가능하다.
    // parseInt()를 적용해버리면 숫자로 바뀌면서 앞자리 0이 사라집니다.
    const currentTime = `${hours}:${minutes}`;
    clockSpan.innerText = currentTime;
  } else {
    let hours = newDate.getHours();
    if (hours >= 13) {
      hours = String(hours - 12);
    }
    const minutes = `${newDate.getMinutes()}`.padStart(2, "0");
    const currentTime = `${hours}:${minutes}`;
    clockSpan.innerText = currentTime;
  }
}
clock();
setInterval(clock, 1000);

const clockIcon = containerClock.querySelector("i");

function changeNotaion() {
  clockSpan.classList.toggle("change");
}

clockIcon.addEventListener("click", changeNotaion);
