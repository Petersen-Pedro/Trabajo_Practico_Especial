"use strict"

const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");
const canvasFill = "red";
const { width: canvasWidth } = canvas;
const { height: canvasHeight } = canvas;
canvas.style.cssText = "background-color: red;";

function playGame(){
    canvas.addEventListener("mouseup", onMouseUp, false);
    canvas.addEventListener("mousedown", onMouseDown, false);
    canvas.addEventListener("mousemove", onMouseMove, false);

    const fichas = [];
    let columna = null;
    let clickedFicha = null;
    let isMouseDown = false;

    const { 
        filas, columnas, 
        fillTable, filFicha1, filFicha2, defaultFichaFill,
        casillaHeight, casillaWidth, radio 
    } = getInitialState();

    const table = new Tablero(
        filas, columnas, casillaHeight, casillaWidth, fillTable, defaultFichaFill,  radio, ctx
    );

    const ficha1Init = getFichaInitPos(filFicha1);
    const ficha2Init = getFichaInitPos(filFicha2);

    const ficha1 = new Ficha(ficha1Init.initX, ficha2Init.initY, radio, filFicha1, ctx);
    const ficha2 = new Ficha(ficha2Init.initX, ficha2Init.initY, radio, filFicha2, ctx);
    fichas.push(ficha1);
    fichas.push(ficha2);
    
    function drawFicha(){
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
        drawFicha();
    }
    function onMouseMove(e){
        if (isMouseDown && clickedFicha) {
            columna = table.getColumna(e.layerX, e.layerY);
            clickedFicha.setPos(e.layerX, e.layerY);
            drawFicha();
        }
    }
    function onMouseUp(){
        isMouseDown = false;
        if (columna && clickedFicha) {
            const casilla = table.getFilaVacia(columna);
            const clickedFichaFill = clickedFicha.getFill();

            if (casilla) {
                table.setCasillaFill(columna, casilla, clickedFichaFill);
                const { initX, initY } = getFichaInitPos(clickedFichaFill);
                clickedFicha.setPos(initX, initY);

                const winner = table.getGanador();
                console.log(winner);

                drawFicha();

                clickedFicha = null;

                columna = null;     
                // sin esto, con un click la ficha se posiciona en la ult columna seleccionada
            }
        }
    }
    // Find functions
    function findClickedFigure(x, y){
        for (const ficha of fichas) {
            if (ficha.isPointerInside(x, y)) 
                return ficha;
        }
        return null;
    }

    function getFichaInitPos(fill){
        let initX;
        const initY =  canvasHeight-100;

        if (fill === filFicha1) {
            initX = canvasWidth-50;
        }else if (fill === filFicha2) {
            initX = canvasWidth-150;
        }

        return { initX, initY }
    }
}

function getInitialState(){
    const cantFichas = 4;

    const filas = cantFichas+2;
    const columnas = cantFichas+3;
    const fillTable = "black";
    const defaultFichaFill = "white";
    const filFicha1 = "blue";
    const filFicha2 = "green";

    const casillaHeight = canvasHeight / filas;
    const casillaWidth = canvasWidth / columnas;

    const radio = Math.min(casillaWidth, casillaHeight) * 0.25;

    return {
        filas, columnas, fillTable, defaultFichaFill,
        filFicha1, filFicha2, 
        casillaHeight, casillaWidth, radio
    }
}

// TODO - JUGAR POR TURNOS

// let isTurno1 = false;
// let isTurno2 = !isTurno1;

// function onMouseMove(e){
//     if (isMouseDown && clickedFicha) {

//         if (clickedFicha.getFill() === Jugador1.getFicha().getFill()) {
//             if (!isTurno1) return;
//         }
//         if (clickedFicha.getFill() === Jugador2.getFicha().getFill()) {
//             if (!isTurno2) return;
//         }
//         columna = table.getColumna(e.layerX, e.layerY);
//         clickedFicha.setPos(e.layerX, e.layerY);
//         drawFicha();
//     }
// }

// function changeTurno(){
//     isTurno1 = !isTurno1;
//     isTurno2 = !isTurno2;
// }

playGame();