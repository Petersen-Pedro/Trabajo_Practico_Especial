"use strict"

const emailSubmit = document.querySelector("#email_submit");
emailSubmit.addEventListener("click", (e) => e.preventDefault())

// Pralax principal del HOME

const header = document.querySelector("#header");
const logo = document.querySelector("#logo");
const miniLogo = document.querySelector(".miniLogo");

// mini logo aparece y desaparece al hacer scroll
document.addEventListener("scroll", () => {
    if (window.scrollY < 100) { // Si el scroll es menor a 100px
        miniLogo.style.opacity = 0;
    }
    if (window.scrollY > 100) { // Si el scroll es mayor a 100px
        miniLogo.style.opacity = window.scrollY / 500;
    }
    //logo.style.opacity = 1 - window.scrollY / 100;
    //logo.style.scale = 1 - window.scrollY / 100;
});

// paralax de los spiders
//NACHO, SI ENTRASTE EN UN ESTADO DE PSICOTAPTIA NOCTAMBULA PROGRAMADORA INTENSA, NO TE PREOCUPES. ESTE CACHO DE CODIGO NO FUE ABANDONADO A MEDIO HACER SIN ESPERANZAS DE VER UN MA;ANA, ESTA BIEN ENCAMINADO, TAN SOLO PERDI TIEMPO VIENDO COMO MIERDA HACER QUE LOS EDIFICOS SE MUEVAN.
//NO TE PREOCUPES, NO ES UNA LOCURA, ES UNA LOCURA PROGRAMADORA.

const edificioIzq = document.querySelector(".edificio_izq");
const edificioCentro = document.querySelector(".edificio_centro");
const edificioDer = document.querySelector(".edificio_der");
const spiderWoman = document.querySelector("spiderman_izq");
const spiderMan = document.querySelector("spiderman_centro");
const spiderBlack = document.querySelector("spiderman_der");
const tIzq = document.querySelector(".t_izq");
const tDer = document.querySelector(".t_der");

document.addEventListener("scroll", () => {
    //Edificios
    edificioIzq.style.transform = `translateX(${-window.scrollY * 0.2}px)`;
    edificioDer.style.transform = `translateX(${window.scrollY * 0.3}px)`;
    edificioCentro.style.transform = `scale(${1 + window.scrollY * 0.0002}px)`;

    /*
    // Spiders
    spiderWoman.style.transform = `translateY(${-window.scrollY * 0.2}px) translateX(${-window.scrollY * 0.2}px)`;
    spiderMan.style.transform = `translateY(${-window.scrollY * 0.2}px) translateY(${window.scrollY * 0.2}px)`;
    spiderBlack.style.transform = `translateY(${-window.scrollY * 0.2}px) translateX(${window.scrollY * 0.2}px)`;

    // Telarañas
    tIzq.style.transform = `translateY(${window.scrollY * 0.2}px) translateY(${-window.scrollY * 0.2}px)`;
    tDer.style.transform = `translateY(${window.scrollY * 0.2}px) translateX(${-window.scrollY * 0.2}px)`;
    */


    // Spiders
    spiderWoman.style.transform = `translateX(${-window.scrollY * 0.2}px)`;
    spiderMan.style.transform = `translateX(${window.scrollY * 0.3}px)`;
    spiderBlack.style.transform = `translateY(${-window.scrollY * 0.2}px) translateX(${window.scrollY * 0.2}px)`;

    // Telarañas
    tIzq.style.transform = `translateY(${window.scrollY * 0.2}px) translateY(${-window.scrollY * 0.2}px)`;
    tDer.style.transform = `translateY(${window.scrollY * 0.2}px) translateX(${-window.scrollY * 0.2}px)`;
});

//-----------------------------

//SECCION DUENDE VERDE

const duendeVerde = document.querySelector(".duende-verde_img");

window.addEventListener("scroll", function () {

    const x = duendeVerde.getBoundingClientRect();
    const scroll = window.scrollY;
    if (x.top < window.innerHeight && x.bottom > 0) {
        duendeVerde.style.transform = `translateY(${(scroll - x.top) * 0.025}px)`;
    }
});

//-----------------------------

//SECCION TARJETAS DE PERSONAJE

//const tarjetas = document.querySelectorAll(".ficha_pj");
Window.addEventListener("scroll", function () {
    if(window.scrollY > 1400){
        document.querySelector(".imgPeter").classList.add("fichaImg_animacion");
        document.querySelector(".imgMiles").classList.add("fichaImg_animacion");
        document.querySelector(".imgGwen").classList.add("fichaImg_animacion");
    }
});