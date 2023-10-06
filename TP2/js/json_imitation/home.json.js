"use strict"

// Juegos por categoria
const juegos_por_categoria = {
    juegos_especiales: {
        nombre: "juegos especiales",
        arr: [    
            {
                id: "esp1", nombre: "el nombre mas largo del mundo", img: "images/juegos/juego_sin-imagen.png", precio: 0,
            }, 
            {
                id: "esp2", nombre: "juego2", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "esp3", nombre: "juego3", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "esp4", nombre: "juego4", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "esp5", nombre: "juego5", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "esp6", nombre: "juego6", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "esp7", nombre: "juego7", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "esp8", nombre: "juego8", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
        ] 
    },
    mas_jugado: {
        nombre: "mas jugado",
        arr: [
            {
                id: "masJug1", nombre: "juego1", img: "images/juegos/juego_sin-imagen.png", precio: 0,
            }, 
            {
                id: "masJug2", nombre: "juego2", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "masJug3", nombre: "juego3", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "masJug4", nombre: "juego4", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "masJug5", nombre: "juego5", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "masJug6", nombre: "juego6", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "masJug7", nombre: "juego7", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "masJug8", nombre: "juego8", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
        ]
    },
    aventura: {
        nombre: "aventura",
        arr: [
            {
                id: "av1", nombre: "juego1", img: "images/juegos/juego_sin-imagen.png", precio: 0,
            }, 
            {
                id: "av2", nombre: "juego2", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "av3", nombre: "juego3", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            },        
            // {
            //     id: "av4", nombre: "juego4", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            // }, 
            // {
            //     id: "av5", nombre: "juego5", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            // }, 
            // {
            //     id: "av6", nombre: "juego6", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            // }, 
            // {
            //     id: "av7", nombre: "juego7", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            // }, 
            // {
            //     id: "av8", nombre: "juego8", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            // }, 
        ]
    },
    horror: {
        nombre: "horror",
        arr: [
            {
                id: "hor1", nombre: "juego1", img: "images/juegos/juego_sin-imagen.png", precio: 0,
            }, 
            {
                id: "hor2", nombre: "juego2", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "hor3", nombre: "juego3", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "hor4", nombre: "juego4", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "hor5", nombre: "juego5", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "hor6", nombre: "juego6", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "hor7", nombre: "juego7", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "hor8", nombre: "juego8", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
        ]
    },
    suspenso: {
        nombre: "suspenso",
        arr: [
            {
                id: "susp1", nombre: "juego1", img: "images/juegos/juego_sin-imagen.png", precio: 0,
            }, 
            {
                id: "susp2", nombre: "juego2", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "susp3", nombre: "juego3", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            },             
            {
                id: "susp4", nombre: "juego4", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "susp5", nombre: "juego5", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "susp6", nombre: "juego6", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "susp7", nombre: "juego7", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "susp8", nombre: "juego8", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
        ]
    },
    accion: {
        nombre: "accion",
        arr: [
            {
                id: "accion", nombre: "juego1", img: "images/juegos/juego_sin-imagen.png", precio: 0,
            }, 
            {
                id: "accion2", nombre: "juego2", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "accion3", nombre: "juego3", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "accion4", nombre: "juego4", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "accion5", nombre: "juego5", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "accion6", nombre: "juego6", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "accion7", nombre: "juego7", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
            {
                id: "accion8", nombre: "juego8", img: "images/juegos/juego_sin-imagen.png", precio: 9999,
            }, 
        ]
    },
}
// Carrito 
// const juegosCarrito = [
//     { id: 22, cant: 1, nombre: "Metal Gear", precio: 500 },
//     { id: 23, cant: 1, nombre: "GTA SA", precio: 1500 },
// ]
const juegosCarrito = [];