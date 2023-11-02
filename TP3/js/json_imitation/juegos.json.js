"use strict"

// Juegos por categoria
const juegos_por_categoria = {
    juegos_especiales: {
        nombre: "juegos especiales",
        arr: [    
            {
                id: "esp1", nombre: "4 en linea", img: "images/juegos/poster/4enLinea.png", precio: 0,
            }, 
            {
                id: "esp2", nombre: "sonic", img: "images/juegos/poster/sonic.jpg", precio: 200,
            }, 
            {
                id: "esp3", nombre: "free fire", img: "images/juegos/poster/free_fire.jpg", precio: 500,
            }, 
            {
                id: "esp4", nombre: "fortnite", img: "images/juegos/poster/fortnite.jpg", precio: 500,
            }, 
            {
                id: "esp5", nombre: "minecraft", img: "images/juegos/poster/minecrat.jpg", precio: 200,
            }, 
            {
                id: "esp6", nombre: "super mario 3", img: "images/juegos/poster/mario3.jpg", precio: 300,
            }, 
            {
                id: "esp7", nombre: "GTA V", img: "images/juegos/poster/gtav.jpg", precio: 500,
            }, 
            {
                id: "esp8", nombre: "pokemon go", img: "images/juegos/poster/pokemon_go.jpg", precio: 200,
            }, 
            // {
            //     id: "esp1", nombre: "4 en linea", img: "images/juegos/poster/4enLinea.png", precio: 0,
            // }, 
            // {
            //     id: "esp2", nombre: "sonic", img: "images/juegos/poster/sonic.jpg", precio: 200,
            // }, 
            // {
            //     id: "esp3", nombre: "free fire", img: "images/juegos/poster/free_fire.jpg", precio: 500,
            // }, 
            // {
            //     id: "esp4", nombre: "fortnite", img: "images/juegos/poster/fortnite.jpg", precio: 500,
            // }, 
            // {
            //     id: "esp5", nombre: "minecraft", img: "images/juegos/poster/minecrat.jpg", precio: 200,
            // }, 
            // {
            //     id: "esp6", nombre: "super mario 3", img: "images/juegos/poster/mario3.jpg", precio: 300,
            // }, 
            // {
            //     id: "esp7", nombre: "GTA V", img: "images/juegos/poster/gtav.jpg", precio: 500,
            // }, 
            // {
            //     id: "esp8", nombre: "pokemon go", img: "images/juegos/poster/pokemon_go.jpg", precio: 200,
            // }, 
        ] 
    },
    aventura: {
        nombre: "aventura",
        arr: [
            {
                id: "av1", nombre: "pacman", img: "images/juegos/poster/pacman.png", precio: 0,
            }, 
            {
                id: "av2", nombre: "jungle adventure", img: "images/juegos/poster/jungle_adventure.jpg", precio: 0,
            }, 
            {
                id: "av3", nombre: "crash bandicoot", img: "images/juegos/poster/crash.jpg", precio: 0,
            },        
            {
                id: "av4", nombre: "tomb raider", img: "images/juegos/poster/tomb_raider.jpg", precio: 600,
            }, 
            {
                id: "av5", nombre: "shadow of the colossus", img: "images/juegos/poster/shadow_colossus.jpg", precio: 500,
            }, 
            {
                id: "av6", nombre: "watch dogs", img: "images/juegos/poster/watch_dogs.jpg", precio: 800,
            }, 
            {
                id: "av7", nombre: "juego7", img: "images/juegos/poster/far_cry5.jpg", precio: 300,
            }, 
            {
                id: "av8", nombre: "rogue galaxy", img: "images/juegos/poster/Rogue_Galaxy_pal.jpg", precio: 150,
            }, 
            // {
            //     id: "av1", nombre: "pacman", img: "images/juegos/poster/pacman.png", precio: 0,
            // }, 
            // {
            //     id: "av2", nombre: "jungle adventure", img: "images/juegos/poster/jungle_adventure.jpg", precio: 0,
            // }, 
            // {
            //     id: "av3", nombre: "crash bandicoot", img: "images/juegos/poster/crash.jpg", precio: 0,
            // },        
            // {
            //     id: "av4", nombre: "tomb raider", img: "images/juegos/poster/tomb_raider.jpg", precio: 600,
            // }, 
            // {
            //     id: "av5", nombre: "shadow of the colossus", img: "images/juegos/poster/shadow_colossus.jpg", precio: 500,
            // }, 
            // {
            //     id: "av6", nombre: "watch dogs", img: "images/juegos/poster/watch_dogs.jpg", precio: 800,
            // }, 
            // {
            //     id: "av7", nombre: "juego7", img: "images/juegos/poster/far_cry5.jpg", precio: 300,
            // }, 
            // {
            //     id: "av8", nombre: "rogue galaxy", img: "images/juegos/poster/Rogue_Galaxy_pal.jpg", precio: 150,
            // }, 
        ]
    },
    estrategia: {
        nombre: "estrategia",
        arr: [
            {
                id: "estrategia1", nombre: "geometry dash", img: "images/juegos/poster/geometry_dash.jpg", precio: 0,
            }, 
            {
                id: "estrategia2", nombre: "candy crush", img: "images/juegos/poster/candy_crush.jpg", precio: 0,
            }, 
            {
                id: "estrategia3", nombre: "starcraft", img: "images/juegos/poster/starcraft.jpg", precio: 100,
            },             
            {
                id: "estrategia4", nombre: "warcraft 3", img: "images/juegos/poster/warcraft.jpg", precio: 200,
            }, 
            {
                id: "estrategia5", nombre: "age of empires 3", img: "images/juegos/poster/age_of_empires3.jpg", precio: 150,
            }, 
            {
                id: "estrategia6", nombre: "diablo 3", img: "images/juegos/poster/diablo3.jpg", precio: 300,
            }, 
            {
                id: "estrategia7", nombre: "atom zombie smasher", img: "images/juegos/poster/atom_zombie_smasher.jpg", precio: 200,
            }, 
            {
                id: "estrategia8", nombre: "Caesar 3", img: "images/juegos/poster/caesar3.jpg", precio: 9999,
            }, 
            // {
            //     id: "estrategia1", nombre: "geometry dash", img: "images/juegos/poster/geometry_dash.jpg", precio: 0,
            // }, 
            // {
            //     id: "estrategia2", nombre: "candy crush", img: "images/juegos/poster/candy_crush.jpg", precio: 0,
            // }, 
            // {
            //     id: "estrategia3", nombre: "starcraft", img: "images/juegos/poster/starcraft.jpg", precio: 100,
            // },             
            // {
            //     id: "estrategia4", nombre: "warcraft 3", img: "images/juegos/poster/warcraft.jpg", precio: 200,
            // }, 
            // {
            //     id: "estrategia5", nombre: "age of empires 3", img: "images/juegos/poster/age_of_empires3.jpg", precio: 150,
            // }, 
            // {
            //     id: "estrategia6", nombre: "diablo 3", img: "images/juegos/poster/diablo3.jpg", precio: 300,
            // }, 
            // {
            //     id: "estrategia7", nombre: "atom zombie smasher", img: "images/juegos/poster/atom_zombie_smasher.jpg", precio: 200,
            // }, 
            // {
            //     id: "estrategia8", nombre: "Caesar 3", img: "images/juegos/poster/caesar3.jpg", precio: 9999,
            // }, 
        ]
    },
    accion: {
        nombre: "accion",
        arr: [
            {
                id: "accion1", nombre: "metal slug", img: "images/juegos/poster/metal_slug.jpg", precio: 150,
            }, 
            {
                id: "accion2", nombre: "dishonored", img: "images/juegos/poster/dishonored.jpg", precio: 300,
            }, 
            {
                id: "accion3", nombre: "halo", img: "images/juegos/poster/halo.jpg", precio: 300,
            }, 
            {
                id: "accion4", nombre: "red dead redemption", img: "images/juegos/poster/red_dead_redemption.jpg", precio: 500,
            }, 
            {
                id: "accion5", nombre: "god of war", img: "images/juegos/poster/god_of_war.jpg", precio: 600,
            }, 
            {
                id: "accion6", nombre: "battlefield 4", img: "images/juegos/poster/battlefield4.jpg", precio: 200,
            }, 
            {
                id: "accion7", nombre: "COD: Black ops 3", img: "images/juegos/poster/cod.jpg", precio: 400,
            }, 
            {
                id: "accion8", nombre: "the witcher 3", img: "images/juegos/poster/witcher3.jpg", precio: 700,
            }, 
            // {
            //     id: "accion1", nombre: "metal slug", img: "images/juegos/poster/metal_slug.jpg", precio: 150,
            // }, 
            // {
            //     id: "accion2", nombre: "dishonored", img: "images/juegos/poster/dishonored.jpg", precio: 300,
            // }, 
            // {
            //     id: "accion3", nombre: "halo", img: "images/juegos/poster/halo.jpg", precio: 300,
            // }, 
            // {
            //     id: "accion4", nombre: "red dead redemption", img: "images/juegos/poster/red_dead_redemption.jpg", precio: 500,
            // }, 
            // {
            //     id: "accion5", nombre: "god of war", img: "images/juegos/poster/god_of_war.jpg", precio: 600,
            // }, 
            // {
            //     id: "accion6", nombre: "battlefield 4", img: "images/juegos/poster/battlefield4.jpg", precio: 200,
            // }, 
            // {
            //     id: "accion7", nombre: "COD: Black ops 3", img: "images/juegos/poster/cod.jpg", precio: 400,
            // }, 
            // {
            //     id: "accion8", nombre: "the witcher 3", img: "images/juegos/poster/witcher3.jpg", precio: 700,
            // }, 
        ]
    },
    horror: {
        nombre: "horror",
        arr: [
            {
                id: "hor1", nombre: "saw", img: "images/juegos/poster/saw.jpg", precio: 300,
            }, 
            {
                id: "hor2", nombre: "resident evil 4", img: "images/juegos/poster/resident_evil_4.jpg", precio: 500,
            }, 
            {
                id: "hor3", nombre: "evil within", img: "images/juegos/poster/evil_within.jpg", precio: 400,
            }, 
            {
                id: "hor4", nombre: "the last of us", img: "images/juegos/poster/last_of_us.jpg", precio: 700,
            }, 
            {
                id: "hor5", nombre: "until dawn", img: "images/juegos/poster/until_dawn.jpg", precio: 650,
            }, 
            {
                id: "hor6", nombre: "amy", img: "images/juegos/poster/amy.jpg", precio: 300,
            }, 
            {
                id: "hor7", nombre: "outlast", img: "images/juegos/poster/outlast.jpg", precio: 360,
            }, 
            {
                id: "hor8", nombre: "dead island", img: "images/juegos/poster/dead_island.jpg", precio: 400,
            },
        //     {
        //         id: "hor1", nombre: "saw", img: "images/juegos/poster/saw.jpg", precio: 300,
        //     }, 
        //     {
        //         id: "hor2", nombre: "resident evil 4", img: "images/juegos/poster/resident_evil_4.jpg", precio: 500,
        //     }, 
        //     {
        //         id: "hor3", nombre: "evil within", img: "images/juegos/poster/evil_within.jpg", precio: 400,
        //     }, 
        //     {
        //         id: "hor4", nombre: "the last of us", img: "images/juegos/poster/last_of_us.jpg", precio: 700,
        //     }, 
        //     {
        //         id: "hor5", nombre: "until dawn", img: "images/juegos/poster/until_dawn.jpg", precio: 650,
        //     }, 
        //     {
        //         id: "hor6", nombre: "amy", img: "images/juegos/poster/amy.jpg", precio: 300,
        //     }, 
        //     {
        //         id: "hor7", nombre: "outlast", img: "images/juegos/poster/outlast.jpg", precio: 360,
        //     }, 
        //     {
        //         id: "hor8", nombre: "dead island", img: "images/juegos/poster/dead_island.jpg", precio: 400,
        //     }, 
        ]
    },
}

const juegos_similares = {
    similares: {
        nombre: "juegos similares",
        arr: [
            {
                id: "sim1", nombre: "pacman", img: "images/juegos/poster/pacman.png", precio: 0,
            }, 
            {
                id: "sim2", nombre: "jungle adventure", img: "images/juegos/poster/jungle_adventure.jpg", precio: 0,
            }, 
            {
                id: "sim3", nombre: "crash bandicoot", img: "images/juegos/poster/crash.jpg", precio: 0,
            }, 
            {
                id: "sim4", nombre: "candy crush", img: "images/juegos/poster/candy_crush.jpg", precio: 0,
            }, 
            {
                id: "sim5", nombre: "minecraft", img: "images/juegos/poster/minecrat.jpg", precio: 200,
            }, 
            {
                id: "sim6", nombre: "GTA V", img: "images/juegos/poster/gtav.jpg", precio: 500,
            }, 
            // {
            //     id: "sim1", nombre: "pacman", img: "images/juegos/poster/pacman.png", precio: 0,
            // }, 
            // {
            //     id: "sim2", nombre: "jungle adventure", img: "images/juegos/poster/jungle_adventure.jpg", precio: 0,
            // }, 
            // {
            //     id: "sim3", nombre: "crash bandicoot", img: "images/juegos/poster/crash.jpg", precio: 0,
            // }, 
            // {
            //     id: "sim4", nombre: "candy crush", img: "images/juegos/poster/candy_crush.jpg", precio: 0,
            // }, 
            // {
            //     id: "sim5", nombre: "minecraft", img: "images/juegos/poster/minecrat.jpg", precio: 200,
            // }, 
            // {
            //     id: "sim6", nombre: "GTA V", img: "images/juegos/poster/gtav.jpg", precio: 500,
            // }, 
            // {
            //     id: "sim7", nombre: "juego7", img: "images/juegos/poster/juego_sin-imagen.png", precio: 9999,
            // }, 
            // {
            //     id: "sim8", nombre: "juego8", img: "images/juegos/poster/juego_sin-imagen.png", precio: 9999,
            // }, 
        ]
    },
}
// Carrito 
const juegosCarrito = [];