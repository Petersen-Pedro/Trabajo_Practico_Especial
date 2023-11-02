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
    const fichasFill = [];
    let lastClickedFicha = null;
    let columna = null;
    let clickFig = null;
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
    fichasFill.push(filFicha1);
    fichasFill.push(filFicha2);
    
    function drawFicha(){
        ctx.fillStyle = canvasFill;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        table.draw();

        for (let i = 0; i < fichas.length; i++) {
            const ficha = fichas[i];
            const fichaFill = fichasFill[i];
            ficha.setFill(fichaFill);
            ficha.draw();        
        }
    }

    // Mouse events
    function onMouseDown(e){
        isMouseDown = true;

        if(lastClickedFicha){
            lastClickedFicha = null;
        }

        clickFig = findClickedFigure(e.layerX, e.layerY);

        if (clickFig) {
            lastClickedFicha = clickFig;
        }
        drawFicha();
    }
    function onMouseMove(e){
        if (isMouseDown && lastClickedFicha) {
            columna = table.getColumna(e.layerX, e.layerY);
            lastClickedFicha.setPos(e.layerX, e.layerY);
            drawFicha();
        }
    }
    function onMouseUp(){
        isMouseDown = false;
        if (columna && clickFig) {
            const casilla = table.getFila(columna);
            const clickFigFill = clickFig.getFill();

            if (casilla) {
                table.setCasillaFill(columna, casilla, clickFigFill);
                const { initX, initY } = getFichaInitPos(clickFigFill);
                clickFig.setPos(initX, initY);

                const winner = table.getGanador();
                console.log(winner);

                drawFicha();
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


playGame();