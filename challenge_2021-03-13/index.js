const select = document.querySelector("select");

const COUNTRY = "country";

function countrySave(text) {
  localStorage.setItem(COUNTRY, text);
}

function choosedCountry() {
  let value;
  for (let i = 0; i < select.options.length; i++) {
    if (select.options[i].selected == true) {
      value = select.options[i].value;
    }
  }
  countrySave(value);
}

function selectCountry(event) {
  select.addEventListener("change", choosedCountry);
}

function countryLoad() {
  const country = localStorage.getItem(COUNTRY);

  if (country === null) {
    selectCountry();
  } else {
    for (i = 0; i < select.options.length; i++) {
      if (select[i].value === country) {
        select.options[i].selected = true;
        break;
      }
    }
  }
}

function init() {
  countryLoad();
}

init();
