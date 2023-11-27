// body main elements
const main = document.querySelector("#home-main");
const footer = document.querySelector("#home-footer");
// Header
const header = document.querySelector("#home-header");
const miniLogo = document.querySelector("#miniLogo");
const menuHamburguesa = document.querySelector("#menu-hamburguesa");

const menuHamburguesaRects = document.querySelectorAll(".menuH_rec");
const menuDesplegadoItems = document.querySelectorAll(".menu_list-item");

const logo = document.querySelector("#logo");

// First Section
const edificioIzq = document.querySelector("#edificio_izq");
const edificioCentro = document.querySelector("#edificio_centro");
const edificioDer = document.querySelector("#edificio_der");
const spiderWoman = document.querySelector("#spiderman_izq");
const spiderMan = document.querySelector("#spiderman_centro");
const spiderBlack = document.querySelector("#spiderman_der");
const tIzq = document.querySelector("#t_izq");
const tDer = document.querySelector("#t_der");
// Duende verde
const duendeVerdeSection = document.querySelector("#duende-verde-section");
const duendeVerde = duendeVerdeSection.querySelector("#duende-verde_img");
// Tarjetas de personaje
const fichasPj = document.querySelectorAll(".ficha_pj");
// Gwen section
const gwenSection = document.querySelector("#gwen_container");
const gwenCards = document.querySelectorAll(".gwen_card");
// Ejemplo Juego
const ejemplo1 = document.querySelector("#ej-juego1");
const ejemplo2 = document.querySelector("#ej-juego2");
const ejemplo3 = document.querySelector("#ej-juego3");
const ejemplo4 = document.querySelector("#ej-juego4");
// Three spideys section
const threeSection = document.querySelector("#spideys_img-container");
const threeSpideys = threeSection.querySelectorAll(".threeSpideys");
// Parte 5 - Vengadores
const vengadores = document.querySelector("#vengadores_great-container");
const hojas = vengadores.querySelector("#vengadores_upfront");
const arboles = vengadores.querySelector("#vengadores_trees");
const pantera = vengadores.querySelector("#vengadores_pantera");
const elastic = vengadores.querySelector("#vengadores_elastic");
const hulk = vengadores.querySelector("#vengadores_hulk");
// Pre-footer
const preFooter = document.querySelector("#pre-footer");
const emailSubmit = document.querySelector("#email_submit");
// Global Classes
const classInvisible = "hidden";
const animationFicha = "fichaImg_animacion";
const headerTop = "header_at_top";
const headerLow = "header_low";
const rectToX = "rec-to-x";
const visibleGwenCard = "gwen_card_visible";
const visibleMenuItem = "visible-item";
const visibleEjemploJuego = "EjJueImg-view";