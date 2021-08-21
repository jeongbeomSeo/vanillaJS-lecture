// <⚠️ DONT DELETE THIS ⚠️>
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector('body');

function resize() {
    const windowWidth = window.innerWidth;
    if(windowWidth > 1500) {
        body.style.backgroundColor = "#e5e619";
    } else if(windowWidth > 900) {
        body.style.backgroundColor = "purple";
    } else {
        body.style.backgroundColor = "skyblue";
    }
}

function createText() {
    const h1 = document.createElement('h1');
    const hello = document.createTextNode("Hello!");
    h1.style.color = "white";
    h1.appendChild(hello);
    document.body.appendChild(h1);
}


function init() {
    body.style.backgroundColor = "#e5e619";
    createText();
    window.addEventListener("resize", resize)
}

init();