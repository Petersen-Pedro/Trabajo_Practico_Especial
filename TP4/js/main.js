"use strict"

const gwenCardsDegrees = { sub1 : 20, sub2: 30, sub3: 40 }

emailSubmit.addEventListener("click", (e) => e.preventDefault());

gwenCards.forEach(c => c.addEventListener("mouseover", (e) => blurGwenCards(e)));
threeSpideys.forEach(spidey => spidey.addEventListener("mouseover", destacarSpidey));

menuHamburguesa.addEventListener("mouseover", () => {
    menuHamburguesaRects.forEach(rect => rect.classList.add(rectToX));
    menuDesplegadoItems.forEach(item => item.classList.add(visibleMenuItem));
});
menuHamburguesa.addEventListener("mouseout", () => {
    menuHamburguesaRects.forEach(rect => rect.classList.remove(rectToX));
    menuDesplegadoItems.forEach(item => item.classList.remove(visibleMenuItem))
});
// Gwen Section
/*
    Destaca la carta seleccionada blureando las otras dos y poniendola por delante
*/
// TODO - quedan muy pegadas y son dificiles de seleccionar
function blurGwenCards(e){
    const selectedCard = e.currentTarget.classList[1];
    const deg = gwenCardsDegrees[selectedCard];
    for (const card of gwenCards) {
        const classToCheck = card.classList[1];
        if(classToCheck === selectedCard)
            card.style.cssText = "z-index: 4; filter: blur(0); transform: rotate("+ deg +"deg);";
        else
            card.style.cssText = "z-index: 2; filter: blur(1.5px);";
    }
}
// Three Spideys Section
/*
    Destaca al spidey seleccionada y pone su fondo en la seccion.
    Tambien quita la de los otros dos para poder volver a agregarlas.
*/
// TODO - acomodar fondo
function destacarSpidey(){
    const currentId = this.id;
    threeSpideys.forEach(spidey => {
        const spideyName = spidey.dataset.name;
        if (spidey.id === currentId) {
            spidey.style.cssText = "filter: blur(0); transform: scale(1.2);"
            threeSection.classList.remove("bg_white");
            threeSection.classList.add(`three_${spideyName}_bg`);
        }else{
            threeSection.classList.remove(`three_${spideyName}_bg`);
            spidey.style.cssText = "filter: blur(5px); transform: scale(1);"
        }
    })
}
