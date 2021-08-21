// You're gonna need this
const body = document.querySelector("body"),
  h1 = body.querySelector("h1"),
  h3 = body.querySelector("h3");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const currentDay = new Date();
  const DdayGap = xmasDay.getTime() - currentDay.getTime();
  const Dday = Math.floor(DdayGap / (1000 * 60 * 60 * 24));
  const Ddayhours = Math.floor((DdayGap / (1000 * 60 * 60)) % 24);
  const Ddayminutes = Math.floor((DdayGap / (1000 * 60)) % 60);
  const Ddayseconds = Math.floor((DdayGap / 1000) % 60);
  h3.innerText = `${Dday < 10 ? `0${Dday}` : Dday}d ${
    Ddayhours < 10 ? `0${Ddayhours}` : Ddayhours
  }h ${Ddayminutes < 10 ? `0${Ddayminutes}` : Ddayminutes}m ${
    Ddayseconds < 10 ? `0${Ddayseconds}` : Ddayseconds
  }s`;
}

function init() {
  setInterval(getTime, 1000);
}

init();
