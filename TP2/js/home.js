"use strict"

const categoria1 = document.querySelector("#especiales-para-ti");

const juegos_especiales = [
    {
        img: "images/juego_sin-imagen.png",
        precio: "$9999",
    }, 
    {
        img: "images/juego_sin-imagen.png",
        precio: "$9999",
    }, 
    {
        img: "images/juego_sin-imagen.png",
        precio: "$9999",
    }, 
    {
        img: "images/juego_sin-imagen.png",
        precio: "$9999",
    } 
]

const cargarSeccionJuego = (arr, section) => {
    for(const elem of arr){
        section.innerHTML += `
            <article class="home_categoria--juego">
                <img src="${elem.img}" alt="juego">
                <div class="juego_precio_sin-compra">
                    <span>${elem.precio}</span>
                    <img src="images/logo/agregar-carrito.png" alt="add-carr" class="juego_add-carr">
                </div>
            </article>
        `
    }
}

cargarSeccionJuego(juegos_especiales, categoria1);