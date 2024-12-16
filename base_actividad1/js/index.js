/*
-Para MOVER la nave
document.querySelector(".nave").style.bottom="__px";

-Para poder SUSTITUIR una imagen por otra
document.querySelector(".nave").src="img/nave2.png";
*/

window.addEventListener("keydown", teclado);
window.addEventListener("keyup", teclado);
const NAVE = document.querySelector(".nave");
let EMPEZAR=false;
let y=0;

function teclado(e) {
    const TECLA = e.key;

    (TECLA==="Enter") && (e.type==="keydown")
    ? COMBUSTION()
    : NAVE.src="img/nave1.png";
    
    (TECLA==="ArrowUp" && EMPEZAR===true) && (NAVE.style.bottom=`${y+=10}px`)
}

function COMBUSTION() {
    NAVE.src="img/nave2.png";
    EMPEZAR=true;
}