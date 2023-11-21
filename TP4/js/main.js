"use strict"

const emailSubmit = document.querySelector("#email_submit");
emailSubmit.addEventListener("click", (e) => e.preventDefault())

// Pralax principal del HOME

const header = document.querySelector("#header");
const logo = document.querySelector("#logo");
const miniLogo = document.querySelector(".miniLogo");

// mini logo aparece y desaparece al hacer scroll
document.addEventListener("scroll", () => {
    if (window.scrollY < 100){ // Si el scroll es menor a 100px
        miniLogo.style.opacity = 0;
    }
    if (window.scrollY > 100){ // Si el scroll es mayor a 100px
        miniLogo.style.opacity = 1;
    }

});

// paralax de los spiders
//NACHO, SI ENTRASTE EN UN ESTADO DE PSICOTAPTIA NOCTAMBULA PROGRAMADORA INTENSA, NO TE PREOCUPES. ESTE CACHO DE CODIGO NO FUE ABANDONADO A MEDIO HACER SIN ESPERANZAS DE VER UN MA;ANA, ESTA BIEN ENCAMINADO, TAN SOLO PERDI TIEMPO VIENDO COMO MIERDA HACER QUE LOS EDIFICOS SE MUEVAN.
//NO TE PREOCUPES, NO ES UNA LOCURA, ES UNA LOCURA PROGRAMADORA.

const edificioIzq = document.querySelector(".edificio_izq");
const edificioCentro = document.querySelector(".edificio_centro");
const edificioDer = document.querySelector(".edificio_der");
const spiderWoman = document.querySelector("spiderWoman");
const spiderMan = document.querySelector("spiderMan");
const spiderBlack = document.querySelector("spiderBlack");
const tIzq = document.querySelector(".t_izq");
const tDer = document.querySelector(".t_der");

document.addEventListener("scroll", () => {
    //Edificios
    edificioIzq.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    edificioCentro.style.transform = `translateY(${window.scrollY * 0.1}px)`;
    edificioDer.style.transform = `translateY(${window.scrollY * 0.2}px)`;

    // Spiders
    spiderWoman.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    spiderMan.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    spiderBlack.style.transform = `translateY(${window.scrollY * 0.2}px)`;

    // Telarañas
    tIzq.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    tDer.style.transform = `translateY(${window.scrollY * 0.2}px)`;
});

