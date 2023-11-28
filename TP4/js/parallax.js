"use strict"

const segundoEjemploJuegoScroll = 4250;
const tercerEJemploJuegoScroll = 4750;
const cuartoEjemploJuegoScroll = 5200;

document.addEventListener("DOMContentLoaded", parallaxLogoHeader);

document.addEventListener("scroll", parallaxLogoHeader);
document.addEventListener("scroll", parallaxFirstSection);
document.addEventListener("scroll", parallaxDuendeVerde);
document.addEventListener("scroll", parallaxTarjetasPj);
document.addEventListener("scroll", parallaxGwen);
document.addEventListener("scroll", threeSpideysSectionToWhite);
document.addEventListener("scroll", parallaxEjemplosJuego);

vengadores.addEventListener("mousemove", (e) => moveVengadoresByMouse(e));

// Header
function parallaxLogoHeader() {
    // cuando el usuario sube el scroll en Y lo suficiente, se agrega
    // la clase <header_at_top> para ponerle un bg gradiente y aumentar el height
    // tambien se quita la clase <header_low>
    if (window.scrollY < 100) {
        header.classList.remove(headerLow);
        header.classList.add(headerTop);
        miniLogo.style.opacity = 0;
    }
    // Cuando el usuario baja con el scroll en Y lo suficiente, se agrega la 
    // clase <header_low> para poner un bg plano y bajar su height 
    // tambien se quita la clase <header_at_top>
    else if (window.scrollY > 20) {
        header.classList.remove(headerTop);
        header.classList.add(headerLow);
        miniLogo.style.opacity = window.scrollY / 500;
    }
}
// Primera seccion
function parallaxFirstSection() {
    // dado un rango de scroll en Y, para activar la animacion,
    // si el scroll no se encuentra en ese rango, la funcion simplemente retorna
    if (window.scrollY < 100 || window.scrollY > 800) return
    
    // Estando en ese rango se mueven los elementos en base al scroll en Y.
    
    //Edificios
    edificioIzq.style.transform = `translateX(${-window.scrollY * 0.4}px)`;
    edificioDer.style.transform = `translateX(${window.scrollY * 0.4}px)`;
    edificioCentro.style.transform = `translateY(${window.scrollY * 0.2}px)`; 

    // Spiders
    spiderWoman.style.transform = `translateX(${-window.scrollY * 0.2}px)`;
    spiderMan.style.transform = `translateY(${-window.scrollY * 0.3}px)`;
    spiderBlack.style.transform = `translateY(${-window.scrollY * 0.2}px) translateX(${window.scrollY * 0.2}px)`;

    // Telarañas
    tIzq.style.transform = `translateX(${-window.scrollY * 0.5}px)`;
    tDer.style.transform = `translateX(${window.scrollY * 0.2}px)`;
}
// Seccion Duende Verde
function parallaxDuendeVerde() {
    // se toma el boundingClientRect de la seccion del duende verde
    // para saber si el usuario se encuentra dicha seccion
    const x = duendeVerdeSection.getBoundingClientRect();
    if (x.top < window.innerHeight && x.bottom > 0) {
        // En caso de ser así, se modifica levemente su translateY
        duendeVerde.style.transform = `translateY(${(window.scrollY - x.top) * 0.03}px)`;
    }
}
// Seccion Tarjetas de personajes
function parallaxTarjetasPj() {
    // se toma el boundingClientRect de la seccion de presentacion
    // para saber si el usuario se encuentra dicha seccion
    const x = seccionPresentacionPj.getBoundingClientRect();
    if (x.top < window.innerHeight && x.bottom > 0) {
        // Si esta, se le agrega a cada ficha de presentación la clase <fichaImg_animacion>
        // para que aumente su opacidad y se modifique su translateY
        for (const ficha of fichasPj) {
            ficha.classList.add(animationFicha)
        }
    } else {
        // Si no, se quita la animacion para que se oculten.
        for (const ficha of fichasPj) {
            ficha.classList.remove(animationFicha)
        }
    }
}
// Seccion Gwen
function parallaxGwen() {
    // se toma el boundingClientRect de la seccion de Gwen
    // para saber si el usuario se encuentra dicha seccion
    const x = gwenSection.getBoundingClientRect();
    if (x.top < window.innerHeight && x.bottom > 0) {
        // Si es así, se muestran las card de gwen con una transicion agregando la clase <gwen_card_visible>
        gwenCards.forEach(card => card.classList.add(visibleGwenCard));
    }else{
        // Si no, se le coloca a cada card un blur de 0 y un z-index de 2 para que no destaque ninguna.
        gwenCards.forEach(card => card.style.cssText = "z-index: 2; filter: blur(0);");
    }
}
// Seccion Vengadores
function moveVengadoresByMouse(e){
    // se toma la posY y posX del cliente
    let posX = e.clientX;
    let posY = e.clientY;

    // Cada elemento se mueve en base a estas posiciones y numeros que fuimos probando.
    pantera.style.transform = `translateX(${posX * 0.05}px) translateY(${posY * 0.05}px) rotate(${posX * 0.01}deg)`;
    elastic.style.transform = `translateX(${20 + posX * 0.02}px) translateY(${posY * 0.02}px) rotate(${-posX * 0.01}deg)`;
    hulk.style.transform = `translateX(${-posX * 0.02}px) translateY(${20 + posY * 0.02}px) rotate(${posX * 0.01}deg)`;

    hojas.style.transform = `translateX(${1 + posY * 0.0002}) scale(${1 + posY * 0.002}`;
    arboles.style.transform = `translateX(${-posX * 0.005}px) scale(${1 + posY * 0.000001})`;
}
// Seccion Ejemplos de Juego
function parallaxEjemplosJuego(){
    const { scrollY } = window;

    // se toma la imagen visible actual 
    const displayedImg = document.querySelector("."+visibleEjemploJuego);

    // se eligen partes del scrollY de window para mostrar cada imagen.
    // el criterio de eleccion fue cuando empiece a aparecer el texto de cada una. 
    // cuando se asoma el texto de la segunda imagen, por ejemplo, se muestra dicha imagen.

    // Para no hacer todo el proceso de cambio de imagen de gusto, se pregunta 
    // si la imagen mostrada es distinta a la que se deberia mostrar, en ese caso se cambian.

    // Mientras el scrollY sea menor que el de la segunda imagen, se mostrará la primera.
    if (scrollY < segundoEjemploJuegoScroll) {
        if (displayedImg.id !== ejemplo1.id) {
            hideEjemploJuego(displayedImg);
            ejemplo1.classList.add(visibleEjemploJuego);
        }
    }
    // Mientras el scrollY ste entre el segundo y el tercero, se muestra la segunda imagen.
    else if(scrollY > segundoEjemploJuegoScroll && scrollY < tercerEJemploJuegoScroll){
        if (displayedImg.id !== ejemplo2.id) {
            hideEjemploJuego(displayedImg);
            ejemplo2.classList.add(visibleEjemploJuego);
        }
    }
    // Mientras el scrollY este entre el tercer y el cuarto se muestra la tercer imagen
    else if(scrollY >= tercerEJemploJuegoScroll && scrollY < cuartoEjemploJuegoScroll){
        if (displayedImg.id !== ejemplo3.id) {
            hideEjemploJuego(displayedImg);
            ejemplo3.classList.add(visibleEjemploJuego);
        }
    }
    // Mientras que el scrollY sea mayor que el de la 4 imagen, se mostrará la cuarta
    else if(scrollY > cuartoEjemploJuegoScroll){
        if (displayedImg.id !== ejemplo4.id) {
            hideEjemploJuego(displayedImg);
            ejemplo4.classList.add(visibleEjemploJuego);
        }
    }
    
}
function hideEjemploJuego(displayedImg){
    // Oculta el ejemplo de juego que esta a la vista
    displayedImg.classList.remove(visibleEjemploJuego);
}

// Seccion de Tres Spideys
function threeSpideysSectionToWhite() {
    // busca reinicar la seccion de los tres spideys cuando el usuario sale de ella.
    // Para no reiniciarla cada vez que el usuairo hace scroll 
    // se pregunta si ya esta en blanco y en dicho caso, retorna.
    if (threeSection.classList.contains(whiteBg)) return;

    // Si el usuario salio de la seccion y no esta aun en blanco...
    const x = threeSection.getBoundingClientRect();
    if (!(x.top < window.innerHeight && x.bottom > 0)) {

        // A cada spidey se le coloca un blur de 0 y se lo vuelve a su tamaño original
        for (const spidey of threeSpideys) {
            spidey.style.cssText = "filter: blur(0); transform: scale(1);"
        }
        // se agrega el fondo blanco a la seccion.
        threeSection.classList.add(whiteBg);
        // se quita el recorte de la seccion inferior (pre-footer)
        preFooter.classList.remove(clipped);
    }
}
