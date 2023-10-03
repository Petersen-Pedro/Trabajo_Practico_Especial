"use strict"

const especialesParaTi = document.querySelector("#especiales-para-ti");
const masJugado = document.querySelector("#mas-jugado");
const aventura = document.querySelector("#aventura");
const horror = document.querySelector("#horror");
const suspenso = document.querySelector("#suspenso");
const accion = document.querySelector("#accion");

const cargarSeccionJuego = (arr, section) => {
    for(const elem of arr){
        section.innerHTML += `
            <article class="home_categoria--juego">
                <img src="${elem.img}" alt="juego">
                <div class="juego_precio_sin-compra ${elem.precio>0 ? "precio" : "gratis"}">
                    <span>$${elem.precio}</span>
                    <img src="images/logo/agregar-carrito.png" alt="add-carr" class="juego_add-carr">
                </div>
            </article>
        `
    }
}

cargarSeccionJuego(juegos_especiales, especialesParaTi);
cargarSeccionJuego(juegos_especiales, masJugado);
cargarSeccionJuego(juegos_especiales, aventura);
cargarSeccionJuego(juegos_especiales, horror);
cargarSeccionJuego(juegos_especiales, suspenso);
cargarSeccionJuego(juegos_especiales, accion);