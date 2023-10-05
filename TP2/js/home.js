"use strict"

const especialesParaTi = document.querySelector("#especiales-para-ti");
const masJugado = document.querySelector("#mas-jugado");
const aventura = document.querySelector("#aventura");
const horror = document.querySelector("#horror");
const suspenso = document.querySelector("#suspenso");
const accion = document.querySelector("#accion");
const ulCarrito = document.querySelector("#carrito_lista-juegos");

const cargarSeccionJuego = (arr, section) => {
    for(const elem of arr){
        section.innerHTML += `
            <article class="home_categoria--juego">
                <img src="${elem.img}" alt="juego" draggable="false">
                <div class="juego_precio_sin-compra ${elem.precio>0 ? "precio" : "gratis"}">
                    <span>$${elem.precio}</span>
                    <img src="images/logo/agregar-carrito.png" alt="add-carr" class="juego_add-carr">
                </div>
            </article>
        `
    }
}

const cargarCarrito = (arr) => {
    if (arr.length <= 0) {
        ulCarrito.innerHTML += `
            <li class="carrito_sin-juego">
                <span>No hay juegos agregados</span>
            </li>
        `
    }else{

        ulCarrito.innerHTML = "";
        ulCarrito.innerHTML += `
            <li class="carrito_juego">
                <span>Cant</span>
                <span>Nombre</span>
                <span>Precio</span>
            </li>
        `
        let totalPrecio = 0;
        for (const elem of arr) {
            totalPrecio += elem.precio;
            ulCarrito.innerHTML += `
                <div class="carrito_linea-separadora"></div>
                <li class="carrito_juego">
                    <span>${elem.cant}</span>
                    <span>${elem.nombre}</span>
                    <span>$${elem.precio}</span>
                </li>
            `
        }
        ulCarrito.innerHTML += `
            <div class="carrito_linea-separadora"></div>
            <li class="carrito_precio-total">
                <span>Total: $${totalPrecio}</span>
            </li>
        `
    }
}

cargarSeccionJuego(juegos_especiales, especialesParaTi);
cargarSeccionJuego(juegos_especiales, masJugado);
cargarSeccionJuego(juegos_especiales, aventura);
cargarSeccionJuego(juegos_especiales, horror);
cargarSeccionJuego(juegos_especiales, suspenso);
cargarSeccionJuego(juegos_especiales, accion);
// cargarCarrito([]);
cargarCarrito(juegosCarrito);