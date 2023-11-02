class Jugador{
    constructor(nombre, ficha){
        this.nombre = nombre;
        this.ficha = ficha;
    }

    getNombre(){
        return this.nombre;
    }
    getFicha(){
        return this.ficha;
    }

    setFicha(ficha){
        this.ficha = ficha;
    }
}