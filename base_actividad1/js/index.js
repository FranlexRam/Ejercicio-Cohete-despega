/*
-Para MOVER la nave
document.querySelector(".nave").style.bottom="__px";

-Para poder SUSTITUIR una imagen por otra
document.querySelector(".nave").src="img/nave2.png";
*/

window.addEventListener("keydown", teclado);
window.addEventListener("keyup", teclado);
const NAVE = document.querySelector(".nave");

function teclado(e) {
    const TECLA = e.key;

    (TECLA==="Enter") && (e.type==="keydown")
    ? NAVE.src="img/nave2.png"
    : NAVE.src="img/nave1.png"
}