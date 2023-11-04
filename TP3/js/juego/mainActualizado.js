"use strict"
/** @type {CanvasRenderingContext2D} */

const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");

const startPantalla = document.querySelector("#start_game-container");
const startBtn = startPantalla.querySelector("#play-game_btn");

const choseFichaPantalla = document.querySelector("#choose-ficha_container");
const choseFichaBtn = document.querySelector("#choose-ficha_btn");
const chooseFichaError = document.querySelector("#choose-ficha_error");

const winnerPantalla = document.querySelector("#ganadorMensaje");

const canvasFill = "red";
const { width: canvasWidth } = canvas;
const { height: canvasHeight } = canvas;
canvas.style.cssText = "background-color: red;";

const invisibleClass = "hidden";
const idJugador1 = "jugador1";
const idJugador2 = "jugador2";

let fillFicha1;
let fillFicha2;

startBtn.addEventListener("click", chooseFicha);
choseFichaBtn.addEventListener("click", runGame);

function playGame(){
    canvas.addEventListener("mouseup", onMouseUp, false);
    canvas.addEventListener("mousedown", onMouseDown, false);
    canvas.addEventListener("mousemove", onMouseMove, false);

    const fichas = [];
    let columna = null;         //  Columna donde se solto la ficha
    let clickedFicha = null;    //  Ficha que se clickeo
    let isMouseDown = false;    //  Se clickeo una ficha

    let isTurno1 = true;        //  Turno del jugador 1
    let isTurno2 = !isTurno1;   //  Turno del jugador 2

    const { // Llamamos a iniciar todo
        filas, columnas, fillTable, defaultFichaFill,
        casillaHeight, casillaWidth, radio
    } = getInitialState();      

    const ficha1Init = getFichaInitPos(idJugador1);  //   Posicion inicial de la ficha 1
    const ficha2Init = getFichaInitPos(idJugador2);  //   Posicion inicial de la ficha 2

    const ficha1 = new Ficha(ficha1Init.initX, ficha1Init.initY, radio, fillFicha1, ctx);
    const ficha2 = new Ficha(ficha2Init.initX, ficha2Init.initY, radio, fillFicha2, ctx);
    fichas.push(ficha1);
    fichas.push(ficha2);
    const Jugador1 = new Jugador(idJugador1, "jugador1", ficha1);
    const Jugador2 = new Jugador(idJugador2, "jugador2", ficha2);

    let table = new Tablero(
        filas, columnas, Jugador1, Jugador2, 
        casillaHeight, casillaWidth, fillTable, defaultFichaFill,  radio, ctx
    );
    
    function drawCanvas(){
        ctx.fillStyle = canvasFill;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        table.draw();

        for (let i = 0; i < fichas.length; i++) {
            fichas[i].draw();        
        }
    }

    // Mouse events
    function onMouseDown(e){
        isMouseDown = true;
        clickedFicha = findClickedFigure(e.layerX, e.layerY);
        drawCanvas();
    }
    function onMouseMove(e){
        if (isMouseDown && clickedFicha) {
            const clickedFichaFill = clickedFicha.getFill();

            if (detectJugador(clickedFichaFill, Jugador1)) {
                if (!isTurno1) return;
            }
            if (detectJugador(clickedFichaFill, Jugador2)) {
                if (!isTurno2) return;
            }
            columna = table.getColumna(e.layerX, e.layerY);
            clickedFicha.setPos(e.layerX, e.layerY);
            drawCanvas();
        }
    }
    function onMouseUp(){
        isMouseDown = false;

        if (columna && clickedFicha) {
            const casilla = table.getFilaVacia(columna);
            if (casilla) {
                const clickedFichaFill = clickedFicha.getFill();

                table.setCasillaFill(columna, casilla, clickedFichaFill);

                const { initX, initY } = getFichasByJugador(clickedFichaFill);

                clickedFicha.setPos(initX, initY);

                const winner = table.getGanador();
                if (winner) {
                    resetGame();
                    showWinner(winner);
                    return;
                } else{
                    console.log("No gano nadie");
                }

                isTurno1 = !isTurno1;
                isTurno2 = !isTurno2;

                clickedFicha = null;
                columna = null;   

                drawCanvas(); 
            }
        }
    }
    /**
     * 
    */
    function showWinner(winner){
        winnerPantalla.classList.remove(invisibleClass);
        canvas.classList.add(invisibleClass);

        const ganadorH3 = winnerPantalla.querySelector(".titulo_ganador");
        ganadorH3.textContent =  `El ganador es: ${winner.getNombre()}`

        const playAgainBtn = winnerPantalla.querySelector("#play-again_btn");
        playAgainBtn.addEventListener("click", playAgain);
    }

    // Find functions
    function findClickedFigure(x, y){
        for (const ficha of fichas) {
            if (ficha.isPointerInside(x, y)) 
                return ficha;
        }
        return null;
    }
    function getFichaInitPos(idJugador){
        let initX;
        const initY = canvasHeight-100;

        if (idJugador === idJugador1) {
            initX = canvasWidth-150;
        }else if (idJugador === idJugador2) {
            initX = canvasWidth-50;
        }

        return { initX, initY }
    }
    function getFichasByJugador(clickedFichaFill){
        if (detectJugador(clickedFichaFill, Jugador1)) {
            return getFichaInitPos(idJugador1);
        }
        if (detectJugador(clickedFichaFill, Jugador2)) {
            return getFichaInitPos(idJugador2);
        }
    }
    // Resetea para jugar de nuevo
    function resetGame(){
        canvas.removeEventListener("mouseup", onMouseUp, false);
        canvas.removeEventListener("mousedown", onMouseDown, false);
        canvas.removeEventListener("mousemove", onMouseMove, false);
    
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        fichas.length = 0;
    
        columna = null;
        clickedFicha = null;
        isMouseDown = false;
        isTurno1 = true;
        isTurno2 = !isTurno1;
    }
}

// Game Handlers
function chooseFicha(){
    startPantalla.classList.add(invisibleClass);
    choseFichaPantalla.classList.remove(invisibleClass);

    const fichasSeleccionablesJ1 = document.querySelectorAll(".ficha_selector.jug1");
    const fichasSeleccionablesJ2 = document.querySelectorAll(".ficha_selector.jug2");

    fichasSeleccionablesJ1.forEach(ficha => ficha.addEventListener("click", selectFicha));
    fichasSeleccionablesJ2.forEach(ficha => ficha.addEventListener("click", selectFicha));
}
function playAgain(){
    winnerPantalla.classList.add(invisibleClass);
    chooseFicha();
}
function runGame(){
    if (fillFicha1 && fillFicha2) {
        choseFichaPantalla.classList.add(invisibleClass);
        startPantalla.classList.add(invisibleClass);
        canvas.classList.remove(invisibleClass);
        playGame();
    }else{
        chooseFichaError.classList.remove(invisibleClass);
    }
}
// Seleccionar ficha
function selectFicha(e){
    const { id } = this.dataset;
    const ficha = e.target;
    const fill = ficha.classList[2]; // class="ficha_selector jug1 blue" - (blue selected)

    if (id === idJugador1) {
        clearContorno("jug1", fill);
        fillFicha1 = fill;
    }
    else if (id === idJugador2) {
        clearContorno("jug2", fill);
        fillFicha2 = fill;
    }

    ficha.classList.add("contorneada");

    if (fillFicha1 && fillFicha2) {
        chooseFichaError.classList.add(invisibleClass);
    }
}
function clearContorno(jug, fill){ 
    const fichasSeleccionables = document.querySelectorAll(`.ficha_selector.${jug}`);
    fichasSeleccionables.forEach((ficha) => {
        if (ficha.classList[2] !== fill) {
            ficha.classList.remove("contorneada");
        }
    });
}
// Helpers
function getInitialState(){
    const cantFichas = 4;

    const filas = cantFichas+2;
    const columnas = cantFichas+3;
    const fillTable = "black";          //  Color de las tabla
    const defaultFichaFill = "white";   //  Color de las casillas

    const casillaHeight = canvasHeight / filas;
    const casillaWidth = canvasWidth / columnas;

    const radio = Math.min(casillaWidth, casillaHeight) * 0.25;

    return {
        filas, columnas, fillTable, defaultFichaFill,
        casillaHeight, casillaWidth, radio
    }
}
function detectJugador(fillFicha, jugador){
    return fillFicha === jugador.getFicha().getFill();
}