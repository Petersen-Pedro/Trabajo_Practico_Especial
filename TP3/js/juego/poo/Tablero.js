class Tablero{
    constructor(
        filas, columnas, Jugador1, Jugador2, cantFichas,
        casillaHeight, casillaWidth, 
        fill, fichaFill, radio, ctx
    ){
        this.filas = filas;
        this.columnas = columnas;

        this.Jugador1 = Jugador1;
        this.Jugador2 = Jugador2;
        
        this.casillaHeight = casillaHeight;
        this.casillaWidth = casillaWidth;

        this.fill = fill;
        this.fichaFill = fichaFill;

        this.radio = radio;
        this.ctx = ctx;

        this.casillas = [];

        this.cantFichas = cantFichas;

        const widthResta = 100;
        const heightResta = cantFichas === 4 ? 160 : 120;

        for (let i = 0; i < this.filas; i++) {
            this.casillas[i] = [];
            for (let j = 0; j < this.columnas; j++) {
                this.casillas[i][j] = new Casilla(
                    (i * this.casillaWidth-widthResta) + this.casillaWidth / 3,
                    (j * this.casillaHeight-heightResta) + this.casillaHeight / 1,
                    this.radio,
                    this.fichaFill,
                    this.ctx
                );
            }
        }

        this.fill.onload = () => {
            this.draw();
        }
    }

    draw(){
        this.ctx.drawImage(this.fill, 0, 0, 600, 600);
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
    getFilaVacia(posI){
        for (let j = this.columnas; j > 0; j--) {
            const casilla = this.casillas[posI][j];
            if (casilla) {
                if (casilla.getFill() === this.fichaFill)
                    return j;
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
        const fichaJug1 = this.Jugador1.getFicha().getFill();
        const fichaJug2 = this.Jugador2.getFicha().getFill();
        let contadorJug1 = 0;
        let contadorJug2 = 0;
        let ganador = null;
      
        for (let i = 0; i < array.length; i++) {
            const ficha = array[i];
      
            if (ficha === fichaJug1) {
                contadorJug1++;
                contadorJug2 = 0;
            } else if (ficha === fichaJug2) {
                contadorJug2++;
                contadorJug1 = 0;
            } else {
                contadorJug1 = 0;
                contadorJug2 = 0;
            }
        
            if (contadorJug1 >= this.cantFichas) {
                ganador = this.Jugador1;
                break;
            }
            if (contadorJug2 >= this.cantFichas) {
                ganador = this.Jugador2;
                break;
            }
        }
      
        return ganador;
    }
}