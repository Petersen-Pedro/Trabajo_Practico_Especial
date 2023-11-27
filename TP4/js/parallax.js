"use strict"

document.addEventListener("DOMContentLoaded", parallaxLogoHeader);

document.addEventListener("scroll", parallaxLogoHeader);
document.addEventListener("scroll", parallaxFirstSection);
document.addEventListener("scroll", parallaxDuendeVerde);
document.addEventListener("scroll", parallaxTarjetasPj);
document.addEventListener("scroll", parallaxGwen);
document.addEventListener("scroll", threeSpideysSectionToWhite);
document.addEventListener("scroll", parallaxEjemplosJuego);

vengadores.addEventListener("mousemove", (e) => moveVengadoresByMouse(e));

// Mini Logo Header - aparece y desaparece al hacer scroll
function parallaxLogoHeader() {
    if (window.scrollY < 100) {
        header.classList.remove(headerLow);
        header.classList.add(headerTop);
        header.style.cssText = "height: 100px;";
        miniLogo.style.opacity = 0;
    }
    if (window.scrollY > 20) {
        header.classList.remove(headerTop);
        header.classList.add(headerLow);
        header.style.cssText = "height: 90px;";
        miniLogo.style.opacity = window.scrollY / 500;
    }
}
// parallax de los spiders
function parallaxFirstSection() {
    //Edificios
    edificioIzq.style.transform = `translateX(${-window.scrollY * 0.2}px)`;
    edificioDer.style.transform = `translateX(${window.scrollY * 0.3}px)`;
    edificioCentro.style.transform = `scale(${1 + window.scrollY * 0.0002}px)`;

    // Spiders
    // spiderWoman.style.transform = `translateY(${-window.scrollY * 0.2}px) translateX(${-window.scrollY * 0.2}px)`;
    // spiderMan.style.transform = `translateY(${-window.scrollY * 0.2}px) translateY(${window.scrollY * 0.2}px)`;    

    // Spiders
    spiderWoman.style.transform = `translateX(${-window.scrollY * 0.2}px)`;
    spiderMan.style.transform = `translateX(${window.scrollY * 0.3}px)`;
    spiderBlack.style.transform = `translateY(${-window.scrollY * 0.2}px) translateX(${window.scrollY * 0.2}px)`;

    // Telarañas
    tIzq.style.transform = `translateY(${window.scrollY * 0.2}px) translateY(${-window.scrollY * 0.2}px)`;
    tDer.style.transform = `translateY(${window.scrollY * 0.2}px) translateX(${-window.scrollY * 0.2}px)`;
}
// Seccion Duende Verde
function parallaxDuendeVerde() {
    const x = duendeVerdeSection.getBoundingClientRect();
    if (x.top < window.innerHeight && x.bottom > 0) {
        duendeVerde.style.transform = `translateY(${(window.scrollY - x.top) * 0.03}px)`;
    }
}
// Seccion Tarjetas de personajes
function parallaxTarjetasPj() {
    if (window.scrollY > 1400) {
        for (const ficha of fichasPj) {
            ficha.classList.add(animationFicha)
        }
    } else {
        for (const ficha of fichasPj) {
            ficha.classList.remove(animationFicha)
        }
    }
}
// Seccion Gwen
// function gwenSectionReset() {
//     const x = gwenSection.getBoundingClientRect();
//     if (!(x.top < window.innerHeight && x.bottom > 0)) {
//         gwenCards.forEach(card => {
//             card.classList.remove("gwen_card_visible");
//             card.style.cssText = "z-index: 2;";
//         });
//     }
// }
/* 
    TODO - el tiempo de transition deberia aplicarse a translateX pero no a rotate. 
    Sin embargo ambas son propiedas de transform por lo que no se como solucionarlo.
*/
function parallaxGwen() {
    const x = gwenSection.getBoundingClientRect();
    if (x.top < window.innerHeight && x.bottom > 0) {
        gwenCards.forEach(card => card.classList.add("gwen_card_visible"));
    }
}

// Seccion de tres spideys
/*
    Al salirse de la seccion de  los tres spideys 
    la coloca en blanco y le quita el efecto blur a los tres spideys.
    Si se llama a la funcion cuando ya la seccion estaba en blanco, 
    simplemente retorna.
*/
function threeSpideysSectionToWhite() {
    if (threeSection.classList.contains("bg_white")) return;

    const x = threeSection.getBoundingClientRect();
    if (!(x.top < window.innerHeight && x.bottom > 0)) {
        threeSpideys.forEach(spidey => {
            spidey.style.cssText = "filter: blur(0); transform: scale(1);"
        });
        threeSection.classList.add("bg_white");
    }
}

// Parte 5 - Vengadores
function moveVengadoresByMouse(e){
    let posX = e.clientX;
    let posY = e.clientY;

    pantera.style.transform = `translateX(${posX * 0.05}px) translateY(${posY * 0.05}px) rotate(${posX * 0.01}deg)`;
    elastic.style.transform = `translateX(${20 + posX * 0.02}px) translateY(${posY * 0.02}px) rotate(${-posX * 0.01}deg)`;
    hulk.style.transform = `translateX(${-posX * 0.02}px) translateY(${20 + posY * 0.02}px) rotate(${posX * 0.01}deg)`;

    hojas.style.transform = `trscale(${1 + posY * 0.0002}) scale(${1 + posY * 0.002}`;
    arboles.style.transform = `translateX(${-posX * 0.005}px) scale(${1 + posY * 0.000001})`;
}

//Parte 6 - Ejemplos de Juego
function parallaxEjemplosJuego(){

    // console.log(window.scrollY);

    if (window.scrollY<4250) {
        removeView();
        const img1 = document.querySelector("#ej-juego1");
        img1.classList.add("EjJueImg-view");
    }

    else if(window.scrollY > 4250 && window.scrollY < 4750){
        removeView();
        const img2 = document.querySelector("#ej-juego2");
        img2.classList.add("EjJueImg-view");
    }

    else if(window.scrollY >= 4750 && window.scrollY < 5200){
        removeView();
        const img3 = document.querySelector("#ej-juego3");
        img3.classList.add("EjJueImg-view");
    }

    else if(window.scrollY > 5200){
        removeView();
        const img4 = document.querySelector("#ej-juego4");
        img4.classList.add("EjJueImg-view");
    }
    
    // if (window.scrollY < 3600) {
    //     removeView();
    //     const img1 = document.querySelector("#ej-juego1");
    //     img1.classList.add("EjJueImg-view");
    // }

    // if (window.scrollY > 3600 && window.scrollY < 4000) {
    //     removeView();
    //     const img2 = document.querySelector("#ej-juego2");
    //     img2.classList.add("EjJueImg-view");
    // }

    // if (window.scrollY > 4000 && window.scrollY < 4400) {
    //     removeView();
    //     const img3 = document.querySelector("#ej-juego3");
    //     img3.classList.add("EjJueImg-view");
    // }


    // if (window.scrollY > 4400) {
    //     removeView();
    //     const img4 = document.querySelector("#ej-juego4");
    //     img4.classList.add("EjJueImg-view");
    // }
}
function removeView(){
    // Oculta los que esta a la vista
    const displayedImg = document.querySelectorAll(".EjJueImg");
    displayedImg.forEach(img => img.classList.remove("EjJueImg-view"))
}