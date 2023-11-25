"use strict"

document.addEventListener("scroll", parallaxLogoHeader);
document.addEventListener("scroll", parallaxFirstSection);
document.addEventListener("scroll", parallaxDuendeVerde);
document.addEventListener("scroll", parallaxTarjetasPj);
document.addEventListener("scroll", parallaxGwen);
document.addEventListener("scroll", gwenSectionReset);
document.addEventListener("scroll", threeSpideysSectionToWhite);

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
function parallaxFirstSection(){
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
function parallaxDuendeVerde(){
    const x = duendeVerdeSection.getBoundingClientRect();
    if (x.top < window.innerHeight && x.bottom > 0) {
        // Estuve como 10 minutos tratando de arreglarlo, hasta que con simplemente cambie el 0.25 por 0.03 y quedó perfecto
        duendeVerde.style.transform = `translateY(${(window.scrollY - x.top) * 0.03}px)`;
    }
}



// Seccion Tarjetas de personajes
function parallaxTarjetasPj(){
    if(window.scrollY > 1400){
        for (const ficha of fichasPj) {
            ficha.classList.add(animationFicha)
        }
    }else{
        for (const ficha of fichasPj) {
            ficha.classList.remove(animationFicha)
        }
    }
}
// Seccion Gwen
function gwenSectionReset(){
    const x = gwenSection.getBoundingClientRect();
    if (!(x.top < window.innerHeight && x.bottom > 0)) {
        gwenCards.forEach(card => {
            card.classList.remove("gwen_card_visible");
            card.style.cssText = "z-index: 2;";
        });
    }
}
/* 
    TODO - el tiempo de transition deberia aplicarse a translateX pero no a rotate. 
    Sin embargo ambas son propiedas de transform por lo que no se como solucionarlo.
*/ 
function parallaxGwen(){
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
function threeSpideysSectionToWhite(){
    if (threeSection.classList.contains("bg_white")) return;

    const x = threeSection.getBoundingClientRect();
    if (!(x.top < window.innerHeight && x.bottom > 0)) {
        threeSpideys.forEach(spidey => {
            spidey.style.cssText = "filter: blur(0); transform: scale(1);"
        });
        threeSection.classList.add("bg_white");
    }
}
