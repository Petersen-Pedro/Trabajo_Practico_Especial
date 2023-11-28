"use strict"

const gwenCardsDegrees = { sub1 : 20, sub2: 30, sub3: 40 }

emailSubmit.addEventListener("click", (e) => e.preventDefault());

gwenCards.forEach(card => card.addEventListener("mouseover", (e) => blurGwenCards(e)));
threeSpideys.forEach(spidey => spidey.addEventListener("mouseover", destacarSpidey));

menuHamburguesa.addEventListener("click", toggleMenuHamburguesa);

// Menu Hamburguesa
function toggleMenuHamburguesa(){
    // se hace un toggle para animar el menu hamburguesa y transformarlo en x.
    menuHamburguesaRects.forEach(rect => rect.classList.toggle(rectToX));
    // se hace un toggle para mostrar con una transicion los elementos del menu hamburguesa
    menuDesplegadoItems.forEach(item => item.classList.toggle(visibleMenuItem));
}
// Gwen Section
function blurGwenCards(e){

    // dado el event selecciona la clase[1] que puede ser <sub1, sub2, sub3> 
    // esto para identificar la card seleccionada;
    const selectedCard = e.currentTarget.classList[1];
    // con la card seleccionada se obtiene la cantidad de degrees que esta debe moverse
    // para quedar recta. (es un valor distinto para cada una)
    const deg = gwenCardsDegrees[selectedCard];

    // por cada card de la seccion de gwen...
    for (const card of gwenCards) {
        // se toma su clase[1] <sub1, sub2, sub3> para ver si coincide con la seleccionada
        const classToCheck = card.classList[1];
        // si coincide se aumenta su z-index para ponerla por encima, su blur se pone en 0
        // y se la rota con las degrees seleccionados;
        if(classToCheck === selectedCard)
            card.style.cssText = "z-index: 4; filter: blur(0); transform: rotate("+ deg +"deg);";
        // si no coincide se pone su z-index en 2 para que no este por encima y se la blurrea a 1.5
        // para que destacar aun más la seleccionada
        else
            card.style.cssText = "z-index: 2; filter: blur(1.5px);";
    }
}
// Three Spideys Section
function destacarSpidey(){
    // se agrega la clase <clipped> al prefooter section para una mejor 
    // visualizacion del bg de cada spidey
    preFooter.classList.add(clipped);
    // se toma al spidey con el mouseover
    const currentId = this.id;

    // por cada spidey...
    threeSpideys.forEach(spidey => {
        const spideyName = spidey.dataset.name;
        const spideyId = spidey.id;
        // si es el seleccionado, se le pone el blur a 0 y se aumenta su tamaño.
        // se le saca el fondo blanco a la seccion y se pone el fondo del spidey seleccionado.
        if (spideyId === currentId) {
            spidey.style.cssText = "filter: blur(0); transform: scale(1.2);"
            threeSection.classList.remove(whiteBg);
            threeSection.classList.add(`three_${spideyName}_bg`);
        }else{
            // si no es el selccionado, se quita su fondo, se lo blurrea a 5 y su tamaño vuelve a 1.
            threeSection.classList.remove(`three_${spideyName}_bg`);
            spidey.style.cssText = "filter: blur(5px); transform: scale(1);"
        }
    })
}
