"use strict"

const mainContainer = document.querySelector("#lista-categorias_container");
const ulCarrito = document.querySelector("#carrito_lista-juegos");
const imgCarrito = document.querySelector("#carrito_img");
let mainArray = [];

const jugable = ["4 en linea"];
const categoriasEspeciales = [
    "juegos especiales", "juegos similares"
]

window.addEventListener("DOMContentLoaded", () => {
    if (document.URL.includes("home.html")) {
        mainArray = juegos_por_categoria;
    }else if(document.URL.includes("juego4EnLinea.html")){
        mainArray = juegos_similares;
    }
    cargarSeccionJuego(mainArray, mainContainer);
    cargarCarrito();
});

function cargarSeccionJuego(categorias, container){
    for (const categoria in categorias) {
        const categoriaArr = categorias[categoria].arr;
        const categoriaNombre = categorias[categoria].nombre;
        
        // Crear la sección
        const section = document.createElement('section');
        section.classList.add('home_categoria-container');
        if (categoriasEspeciales.includes(categoriaNombre)) {
            section.classList.add("especial");
        }

        const h1 = document.createElement('h1');
        h1.textContent = categoriaNombre;

        const categoriaContainer = document.createElement('div');
        categoriaContainer.classList.add('categoria-carrusel');
        categoriaContainer.id = `${categoria.toString()}_container`;

        const leftArrow = document.createElement('i');
        leftArrow.id = 'left';
        leftArrow.classList.add('fa-solid', 'fa-angle-left');

        const rightArrow = document.createElement('i');
        rightArrow.id = 'right';
        rightArrow.classList.add('fa-solid', 'fa-angle-right');

        const homeCategoria = document.createElement('div');
        homeCategoria.classList.add('home_categoria');
        homeCategoria.id = categoria.toString();

        for(const elem of categoriaArr){
            const isGratis = elem.precio <= 0;

            const juegoArticle = document.createElement('article');
            juegoArticle.classList.add('home_categoria--juego');

            let enlace;
            let precioSpan;

            if (jugable.includes(elem.nombre)) {
                enlace = document.createElement("a");
                enlace.href = "juego4EnLinea.html";
            }

            const img = document.createElement('img');
            img.src = elem.img;
            img.alt = 'juego';
            img.draggable = false;
            img.classList.add('img_animacion');

            const juegoPrecio = document.createElement('div');
            juegoPrecio.classList.add('juego_precio');
            juegoPrecio.setAttribute('data-idjuego', elem.id);
            juegoPrecio.setAttribute('data-categoria', categoria);

            const hoverBoton = document.createElement('div');
            hoverBoton.classList.add('hover_compra');

            if (!isGratis) {
                precioSpan = document.createElement('span');
                precioSpan.textContent = `$${elem.precio}`;
            }

            const carritoImg = document.createElement('img');
            carritoImg.src = 'images/logo/carrito.png';
            carritoImg.alt = 'carr';

            juegoPrecio.appendChild(hoverBoton);

            if (!isGratis) { juegoPrecio.appendChild(precioSpan); }
            juegoPrecio.appendChild(carritoImg);
            if (enlace) {
                enlace.appendChild(img);
                juegoArticle.appendChild(enlace);
            }else{
                juegoArticle.appendChild(img);
            }
            juegoArticle.appendChild(juegoPrecio);
            homeCategoria.appendChild(juegoArticle);
          
        }
        section.appendChild(h1);
        section.appendChild(categoriaContainer);
        categoriaContainer.appendChild(leftArrow);
        categoriaContainer.appendChild(homeCategoria);
        categoriaContainer.appendChild(rightArrow);
        container.appendChild(section);

    }
    const cards = document.querySelectorAll(".juego_precio");
    cards.forEach(card => card.addEventListener("click", agregarJuegoCarrito));

    const carousels = document.querySelectorAll(".home_categoria");
    carousels.forEach(car => initializeCarousel(car.id));
}

function cargarCarrito(arr = []){
    ulCarrito.innerHTML = "";

    if (arr.length <= 0) {
        imgCarrito.src = "images/logo/carrito.png";
        ulCarrito.innerHTML += `
            <li class="carrito_sin-juego">
                <span>No hay juegos agregados</span>
            </li>
        `
    }else{
        imgCarrito.src = "images/logo/agregar-carrito.png";
        ulCarrito.innerHTML += `
            <li class="carrito_juego">
                <span>Nombre</span>
                <span>Precio</span>
            </li>
        `
        let totalPrecio = 0;
        for (const elem of arr) {
            const { precio, cant, nombre } = elem;
            totalPrecio += precio * cant;
            ulCarrito.innerHTML += `
                <div class="menu-desplegable_linea-separadora"></div>
                <li class="carrito_juego seleccionable">
                    <span class="nombre">${nombre}</span>
                    <span>$${precio}</span>
                </li>
            `
        }
        ulCarrito.innerHTML += `
            <div class="menu-desplegable_linea-separadora"></div>
            <li class="carrito_precio-total">
                <span>Total: $${totalPrecio}</span>
            </li>
        `
    }
}
function agregarJuegoCarrito(){
    const { idjuego, categoria } = this.dataset;
    const array = mainArray[categoria].arr;
    const newJuego = array.find(juego => juego.id === idjuego);
    const addedJuego = juegosCarrito.find(juego => juego.id === newJuego.id);
    if (!addedJuego) {
        const { id, nombre, precio } = newJuego;
        juegosCarrito.push({id, cant:1, nombre, precio});
        aplicarEstilos(this);
    }
    cargarCarrito(juegosCarrito);
}

function aplicarEstilos(element){
    const span = element.querySelector("span");
    const img = element.querySelector("img");

    element.classList.add("juego_agregado");
    img.src = "images/logo/agregar-carrito.png";
    if (span) { span.classList.add("lined_text"); } 
}
