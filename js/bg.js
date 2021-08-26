const body = document.querySelector("body");

const RANDOM_NUMBER = Math.floor(Math.random() * 13);
const PICTURE_NAME = `./img/${RANDOM_NUMBER}.jpg`;

body.style.background = `url('${PICTURE_NAME}')`;
// directory는 html기준에서 바라봐야된다.
