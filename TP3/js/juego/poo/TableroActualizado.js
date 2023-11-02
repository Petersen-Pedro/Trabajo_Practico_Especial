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
    // Getters
    getColumna(posX, posY){
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                const casilla = this.casillas[i][j].isPointerInside(posX, posY)
                if (casilla) return i;
            }
        }
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

        const diagonalalWinner = this.isGanadorDiagonal();
        if (diagonalalWinner) return diagonalalWinner;
    }
    // Setters
    setCasillaFill(posI, posJ, fill){
        this.casillas[posI][posJ].setFill(fill)
    }
    // Local Functions
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
    isGanadorDiagonal(){
        let casillasDiagonal = [];
        let ganador = null;
        const maxJ = Math.ceil(this.filas/2);

        casillasDiagonal = this.recorrerDiagonal(1, 0);
        ganador = this.findGanador(casillasDiagonal);
        if (ganador) return ganador;
        casillasDiagonal = [];

        let i = 0;
        for (let j = 0; j < maxJ; j++) {
            casillasDiagonal = this.recorrerDiagonal(i, j);
            ganador = this.findGanador(casillasDiagonal);
            if (ganador) return ganador;
            casillasDiagonal = [];
        }

        return null;
    }
    recorrerDiagonal(i, j){
        const filasCount = this.filas;
        const columnasCount = this.columnas;
        let casillasDiagonal = [];

        while (i<filasCount && j<columnasCount) {
            const casilla = this.casillas[i][j];
            casillasDiagonal.push(casilla.getFill());
            i++;
            j++;
        }
        return casillasDiagonal;
    }
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