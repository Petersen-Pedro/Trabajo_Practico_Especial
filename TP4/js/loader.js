"use strict"

const loading = document.querySelector("#loading");
const underline = document.querySelector("#loading_underline");

/*
    Se le coloca un display:none; a main, header y footer.
    Se muestra el loader que comienza en 0 y va hasta 100. 
    Una vez que llega se oculta el loader y se muestran tanto main, header y footer
*/
// document.addEventListener("DOMContentLoaded", () => {
//     const screnHeight = window.innerHeight;
//     main.style.cssText = `max-height: ${screnHeight}px;`
    
//     const textSpan = underline.querySelector("span");

//     header.classList.add(classInvisible);
//     main.classList.add(classInvisible);
//     footer.classList.add(classInvisible);

//     let contador = 0;
//     loading.classList.remove(classInvisible);
//     const duracionAnimacion = 5000;
//     const incrementoPorIteracion = 100 / (duracionAnimacion / 50);
    
//     const intervalo = setInterval(() => {
//         contador += incrementoPorIteracion;
//         if (contador <= 100) {
//             underline.style.width = contador + "%";
//             textSpan.textContent = contador + "%";
//         } else {
//             clearInterval(intervalo);
//             main.style.cssText = "max-height: auto;"
//             loading.classList.add(classInvisible);
//             header.classList.remove(classInvisible);
//             main.classList.remove(classInvisible);
//             footer.classList.remove(classInvisible);
//         }
//     }, 40); 
// });