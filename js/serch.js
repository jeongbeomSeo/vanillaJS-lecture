const search_form = document.querySelector(".header-link__serch");
const search_input = search_form.querySelector("input");

function pressEnter(event) {
  if (event.keyCode === 13) {
    const url = search_input.value;
    search_input.value = "";
    search_form.setAttribute("action", `http://${url}`);
  }
}

search_form.addEventListener("keydown", pressEnter);
