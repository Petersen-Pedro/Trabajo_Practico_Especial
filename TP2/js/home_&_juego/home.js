"use strict"

const mainContainer = document.querySelector("#lista-categorias_container");
const ulCarrito = document.querySelector("#carrito_lista-juegos");


window.addEventListener("DOMContentLoaded", () => {
    if (document.URL.includes("index.html")) {
        cargarSeccionJuego(juegos_por_categoria, mainContainer);
    }else if(document.URL.includes("juego.4EnLinea.html")){
        cargarSeccionJuego(juegos_similares, mainContainer);
    }
    cargarCarrito();
});

const categoriasEspeciales = [
    "juegos especiales", "juegos similares"
]


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

        // Crear el título
        const h1 = document.createElement('h1');
        h1.textContent = categoriaNombre;

        // Crear el contenedor del carrusel
        const categoriaContainer = document.createElement('div');
        categoriaContainer.classList.add('categoria-carrusel');
        categoriaContainer.id = `${categoria.toString()}_container`;

        // Crear las flechas izquierda y derecha
        const leftArrow = document.createElement('i');
        leftArrow.id = 'left';
        leftArrow.classList.add('fa-solid', 'fa-angle-left');

        const rightArrow = document.createElement('i');
        rightArrow.id = 'right';
        rightArrow.classList.add('fa-solid', 'fa-angle-right');

        // Crear el contenedor de juegos
        const homeCategoria = document.createElement('div');
        homeCategoria.classList.add('home_categoria');
        homeCategoria.id = categoria.toString();

        for(const elem of categoriaArr){
            // Crear el artículo del juego
            const juegoArticle = document.createElement('article');
            juegoArticle.classList.add('home_categoria--juego');

            // Crear la imagen del juego
            const img = document.createElement('img');
            img.src = elem.img;
            img.alt = 'juego';
            img.draggable = false;

            // Crear el precio y el botón de agregar al carrito
            const juegoPrecio = document.createElement('div');
            juegoPrecio.classList.add('juego_precio_sin-compra', elem.precio > 0 ? 'precio' : 'gratis');
            juegoPrecio.setAttribute('data-idjuego', elem.id);
            juegoPrecio.setAttribute('data-categoria', categoria);

            const hoverBoton = document.createElement('div');
            hoverBoton.classList.add('hover_compra');

            const precioSpan = document.createElement('span');
            precioSpan.textContent = `$${elem.precio}`;

            const agregarCarritoImg = document.createElement('img');
            agregarCarritoImg.src = 'images/logo/agregar-carrito.png';
            agregarCarritoImg.alt = 'add-carr';
            agregarCarritoImg.classList.add('juego_add-carr');

            // Anidar los elementos
            juegoPrecio.appendChild(hoverBoton);
            juegoPrecio.appendChild(precioSpan);
            juegoPrecio.appendChild(agregarCarritoImg);

            juegoArticle.appendChild(img);
            juegoArticle.appendChild(juegoPrecio);
            homeCategoria.appendChild(juegoArticle);
        }
        // Anidar los elementos
        section.appendChild(h1);
        section.appendChild(categoriaContainer);
        categoriaContainer.appendChild(leftArrow);
        categoriaContainer.appendChild(homeCategoria);
        categoriaContainer.appendChild(rightArrow);
        container.appendChild(section);

    }
    const cards = document.querySelectorAll(".juego_precio_sin-compra");
    cards.forEach(card => card.addEventListener("click", agregarJuegoCarrito));
}

function cargarCarrito(arr = []){
    ulCarrito.innerHTML = "";

    if (arr.length <= 0) {
        ulCarrito.innerHTML += `
            <li class="carrito_sin-juego">
                <span>No hay juegos agregados</span>
            </li>
        `
    }else{
        ulCarrito.innerHTML += `
            <li class="carrito_juego">
                <span>Cant</span>
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
                    <span>${cant}</span>
                    <span>${nombre}</span>
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
    const array = juegos_por_categoria[categoria].arr;
    const newJuego = array.find(juego => juego.id === idjuego);
    const addedJuego = juegosCarrito.find(juego => juego.id === newJuego.id);
    if (addedJuego) {
        const index = juegosCarrito.findIndex(juego => juego.id === newJuego.id);
        juegosCarrito[index].cant = addedJuego.cant +1;
    }else{
        const { id, nombre, precio } = newJuego;
        juegosCarrito.push({id, cant:1, nombre, precio});
    }
    cargarCarrito(juegosCarrito);
}


// function cargarSeccionJuego(categorias, container){
//     for (const categoria in categorias) {
//         const categoriaArr = categorias[categoria].arr;
//         const categoriaNombre = categorias[categoria].nombre;

//         container.innerHTML += `
//             <section class="home_categoria-container 
//                 ${categoriaNombre === "juegos especiales" && "especial"} >
//                 <h1>${categoriaNombre}</h1>
//                 <div class="categoria-carrusel" id="${categoria.toString()}_container">
//                     <i id="left" class="fa-solid fa-angle-left"></i>
//                     <div class="home_categoria" id="${categoria.toString()}">
//                     </div>
//                     <i id="right" class="fa-solid fa-angle-right"></i>
//                 </div>
//             </section>
//         `
//         for(const elem of categoriaArr){
//             container.innerHTML += `
//                 <article class="home_categoria--juego">
//                     <img src="${elem.img}" alt="juego" draggable="false">
//                     <div class="juego_precio_sin-compra ${elem.precio > 0 ? 'precio' : 'gratis'}" 
//                         data-idjuego="${elem.id}" data-categoria="${categoria}">
//                         <span>$${elem.precio}</span>
//                         <img src="images/logo/agregar-carrito.png" alt="add-carr" class="juego_add-carr">
//                     </div>
//                 </article>
//             `
//         }
//         const cards = document.querySelectorAll(".juego_precio_sin-compra");
//         cards.forEach(card => card.addEventListener("click", agregarJuegoCarrito));
//     }
// }

// function cargarJuego(categoria, container){
//     for(const elem of categoria){
//         container.innerHTML += `
//             <article class="home_categoria--juego">
//                 <img src="${elem.img}" alt="juego" draggable="false">
//                 <div class="juego_precio_sin-compra ${elem.precio > 0 ? 'precio' : 'gratis'}" 
//                     data-idjuego="${elem.id}" data-categoria="${categoria}">

//                     <span>$${elem.precio}</span>
//                     <img src="images/logo/agregar-carrito.png" alt="add-carr" class="juego_add-carr">
//                 </div>
//             </article>
//         `
//     }
//     const cards = document.querySelectorAll(".juego_precio_sin-compra");
//     cards.forEach(card => card.addEventListener("click", agregarJuegoCarrito));
// }