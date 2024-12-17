document.querySelector(".campo").addEventListener("keydown", teclado);
let pulsaciones=0;
actualizar();

function teclado(e) {
    const TECLA= e.key; //para detectar la tecla presionada
     (TECLA==="." || TECLA===",")
     ? e.preventDefault()
     : escritura(TECLA); //Funcion que permite hacer varias condiciones 
}

function escritura(valor) {
    document.querySelector(".caja").innerHTML+=`<span class="tecla">${valor}</span>`
    ++pulsaciones;
    actualizar();
}

function actualizar() {
    const PALABRAS = (pulsaciones===1)
    ? "tecla pulsada."
    : "teclas pulsadas.";
    document.querySelector(".pulsaciones").innerHTML=`${pulsaciones} ${PALABRAS}`
}