"use strict"
/** @type {CanvasRenderingContext2D} */

const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");

const startPantalla = document.querySelector("#start_game-container");
const startBtn = startPantalla.querySelector("#play-game_btn");
const tutorialBtn = startPantalla.querySelector("#instrucciones_btn");

const choseFichaPantalla = document.querySelector("#choose-ficha_container");
const choseFichaBtn = document.querySelector("#choose-ficha_btn");

const fichasCantidadInput =  document.querySelector("#choose-ficha_cantidad");

const winnerPantalla = document.querySelector("#ganadorMensaje");

const temporizador = document.querySelector("#temporizador");

const canvasFill = lightPurple;
const { width: canvasWidth } = canvas;
const { height: canvasHeight } = canvas;
canvas.style.cssText = `background-color: ${lightPurple};`;

let fillFicha1 = "";
let fillFicha2 = "";
let fillFicha1Img = "";
let fillFicha2Img = "";

startBtn.addEventListener("click", chooseFichaScreen);
tutorialBtn.addEventListener("click", showTutorialScreen);
choseFichaBtn.addEventListener("click", runGame);

function playGame(imgFicha1, imgFicha2){
    canvas.addEventListener("mouseup", onMouseUp, false);
    canvas.addEventListener("mousedown", onMouseDown, false);
    canvas.addEventListener("mousemove", onMouseMove, false);

    const temporizadorInterval = setInterval(actualizarTemporizador, 1000)

    const fichas = [];
    let columna = null;
    let clickedFicha = null;    
    let isMouseDown = false;    

    let isTurno1 = Math.random()>0.5; 
    let isTurno2 = !isTurno1;     
    let tiempoInicial = segundosIniciales;

    const { 
        filas, columnas, cantFichas, fillTable, defaultCasillaFill,
        casillaHeight, casillaWidth , radio
    } = getInitialState();      

    const ficha1Init = getFichaInitPos(idJugador1); 
    const ficha2Init = getFichaInitPos(idJugador2);

    const ficha1 = new Ficha(
        ficha1Init.initX, ficha1Init.initY, radio, 
        fillFicha1, imgFicha1, isTurno1, ctx, cantFichas
    );
    
    const ficha2 = new Ficha(
        ficha2Init.initX, ficha2Init.initY, radio, 
        fillFicha2, imgFicha2, isTurno2, ctx, cantFichas
    );

    fichas.push(ficha1);
    fichas.push(ficha2);
    const Jugador1 = new Jugador(idJugador1, "jugador1", ficha1);
    const Jugador2 = new Jugador(idJugador2, "jugador2", ficha2);

    const table = new Tablero(
        filas, columnas, Jugador1, Jugador2, cantFichas,
        casillaHeight, casillaWidth, fillTable, defaultCasillaFill,  radio, ctx
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
        console.log(clickedFicha); 
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
                }
                
                isTurno1 = !isTurno1;
                isTurno2 = !isTurno2;

                ficha1.setMoves(isTurno1);
                ficha2.setMoves(isTurno2);

                clickedFicha = null;
                columna = null;   

                drawCanvas(); 
            }
        }
    }
    // Winner
    function showWinner(winner = null){
        winnerPantalla.classList.remove(invisibleClass);
        canvas.classList.add(invisibleClass);

        const ganadorH3 = winnerPantalla.querySelector(".titulo_ganador");
        if (winner) {
            ganadorH3.textContent =  `El ganador es: ${winner.getNombre()}`;
        }else{
            ganadorH3.textContent =  "Se acabo el tiempo"
        }

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
    // Temporizador
    function actualizarTemporizador() {

        if (tiempoInicial > 0) {
            temporizador.innerHTML = tiempoInicial;
            tiempoInicial--;
        } else {
            intervalReset();
            showWinner();
        }
    }
    // Resetear
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

        // clearInterval(temporizadorInterval);
        // temporizador.innerHTML = "---";
        intervalReset();
    }

    function intervalReset(){
        clearInterval(temporizadorInterval);
        temporizador.innerHTML = "---";
    }
}
// Game Handlers
function chooseFichaScreen(){
    startPantalla.classList.add(invisibleClass);
    choseFichaPantalla.classList.remove(invisibleClass);

    const fichasSeleccionablesJ1 = document.querySelectorAll(".ficha_selector.jug1");
    const fichasSeleccionablesJ2 = document.querySelectorAll(".ficha_selector.jug2");

    fichasSeleccionablesJ1.forEach(ficha => ficha.addEventListener("click", selectFichaToPlay));
    fichasSeleccionablesJ2.forEach(ficha => ficha.addEventListener("click", selectFichaToPlay));
}

function showTutorialScreen(){
    const tutorialPantalla = document.querySelector("#tutorial-container");
    startPantalla.classList.add(invisibleClass);
    tutorialPantalla.classList.remove(invisibleClass);

    const backToPlay = document.querySelector("#back-to-play_btn");
    backToPlay.addEventListener("click", () => {
        tutorialPantalla.classList.add(invisibleClass);
        startPantalla.classList.remove(invisibleClass);
    });
}

function playAgain(){
    winnerPantalla.classList.add(invisibleClass);
    chooseFichaScreen();
}
function runGame(){
    if (fillFicha1 && fillFicha2) {

        const imgFicha1 = new Image();
        const imgFicha2 = new Image();
        imgFicha1.src = fillFicha1Img;
        imgFicha2.src = fillFicha2Img;

        choseFichaPantalla.classList.add(invisibleClass);
        startPantalla.classList.add(invisibleClass);
        canvas.classList.remove(invisibleClass);
        playGame(imgFicha1, imgFicha2);
    }
}
// Seleccionar ficha
function selectFichaToPlay(e){
    const { id } = this.dataset;
    const ficha = e.target;
    const fill = ficha.classList[2]; // class="ficha_selector jug1 blue" - (blue selected)

    if (id === idJugador1) {
        clearContorno("jug1", fill);
        fillFicha1 = fill;
        if (fill === fichaFillJug1.dragons.color) {
            fillFicha1Img = fichaFillJug1.dragons.img;
        } else if(fill === fichaFillJug1.ballas.color) {
            fillFicha1Img = fichaFillJug1.ballas.img;
        }
    }
    else if (id === idJugador2) {
        clearContorno("jug2", fill);
        fillFicha2 = fill;
        if (fill === fichaFillJug2.grove.color) {
            fillFicha2Img = fichaFillJug2.grove.img;
        } else if(fill === fichaFillJug2.aztec.color){        
            fillFicha2Img = fichaFillJug2.aztec.img;
        }
    }

    ficha.classList.add(contorneadaClass);

    if (fillFicha1 && fillFicha2) {
        choseFichaBtn.classList.remove(invisibleClass);
    }
}
function clearContorno(jug, fill){ 
    const fichasSeleccionables = document.querySelectorAll(`.ficha_selector.${jug}`);
    fichasSeleccionables.forEach((ficha) => {
        if (ficha.classList[2] !== fill) {
            ficha.classList.remove(contorneadaClass);
        }
    });
}
// Helpers
function getInitialState(){
    const cantFichas = parseInt(fichasCantidadInput.value);
    
    const fillTable = new Image();
    fillTable.src = tableImg;
    
    const filas = cantFichas+2;
    const columnas = cantFichas+3;
    const defaultCasillaFill = casillaFill;   //  Color de las casillas; puede ser white /...

    const casillaHeight = canvasHeight / filas;
    const casillaWidth = canvasWidth / columnas;

    const radio = Math.min(casillaWidth, casillaHeight) * 0.25;

    return {
        filas, columnas, cantFichas, fillTable, defaultCasillaFill,
        casillaHeight, casillaWidth, radio
    }
}
function detectJugador(fillFicha, jugador){
    return fillFicha === jugador.getFicha().getFill();
}