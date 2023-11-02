class Tablero{
    constructor(filas, columnas, casillaHeight, casillaWidth, fill, defaultFill, radio, ctx){
        this.filas = filas;
        this.columnas = columnas;
        
        this.casillaHeight = casillaHeight;
        this.casillaWidth = casillaWidth;

        this.fill = fill;
        this.defaultFill = defaultFill;

        this.radio = radio;
        this.ctx = ctx;

        this.casillas = [];

        for (let i = 0; i < this.filas; i++) {
            this.casillas[i] = [];
            for (let j = 0; j < this.columnas; j++) {
                this.casillas[i][j] = new Casilla(
                    (i * this.casillaWidth-100) + this.casillaWidth / 2.4,
                    (j * this.casillaHeight-160) + this.casillaHeight / 1,
                    this.radio,
                    this.defaultFill,
                    this.ctx
                );
            }
        }
        this.draw();
    }

    draw(){
        this.ctx.fillStyle = this.fill;
        this.ctx.fillRect(25, 25, 550, 550);
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.casillas[i][j].draw();
            }
        }
    }

    getCasillas(){
        return this.casillas;
    }

    getColumna(posX, posY){
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                const casilla = this.casillas[i][j].isPointerInside(posX, posY)
                if (casilla) return i;
            }
        }
    }

    setCasillaFill(posI, posJ, fill){
        this.casillas[posI][posJ].setFill(fill)
    }

    getFila(posI){
        for (let j = this.columnas; j > 0; j--) {
            const casilla = this.casillas[posI][j];
            if (casilla) {
                if (casilla.getFill() === this.defaultFill) {
                    return j;
                }
            }
        }
    }

    getGanador(){
        const verticalWinner = this.isGanadorVertical();
        if (verticalWinner) return verticalWinner;

        const horizontalWinner = this.isGanadorHorizontal();
        if (horizontalWinner) return horizontalWinner;
          
    }

    isGanadorVertical(){
        for (let i = 0; i < this.filas; i++) {
            const casillasVertical = [];
            for (let j = 0; j < this.columnas; j++) {
                const casilla = this.casillas[i][j];
                casillasVertical.push(casilla.getFill());
            }
            const winner = this.findGanador(casillasVertical);           
            if (winner) return winner;
        }
    }
    isGanadorHorizontal(){
        for (let i = 0; i < this.columnas; i++) {
            const casillasHorizontal = [];
            for (let j = 0; j < this.filas; j++) {
                const casilla = this.casillas[j][i];
                casillasHorizontal.push(casilla.getFill());
            }
            const winner = this.findGanador(casillasHorizontal);           
            if (winner) return winner;
        }
    }

    // isGanadorHorizontal() {
    //     for (let i = 0; i < this.filas; i++) {
    //         const fila = this.casillas[i].map(casilla => casilla.getFill());
    //         const winner = this.encontrarGanadorHorizontal(fila);
    //         if (winner) return winner;
    //     }
    // }

    findGanador(array) {
        const fichaBlue = "blue";
        const fichaGreen = "green";
        let ganador = null;
        let contadorBlue = 0;
        let contadorGreen = 0;
      
        for (let i = 0; i < array.length; i++) {
            const ficha = array[i];
      
            if (ficha === fichaBlue) {
                contadorBlue++;
                contadorGreen = 0;
            } else if (ficha === fichaGreen) {
                contadorGreen++;
                contadorBlue = 0;
            } else {
                contadorBlue = 0;
                contadorGreen = 0;
            }
        
            if (contadorBlue >= 4) {
                ganador = fichaBlue;
                break;
            }
            if (contadorGreen >= 4) {
                ganador = fichaGreen;
                break;
            }
        }
      
        return ganador;
    }


}