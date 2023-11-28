"use strict"

const loading = document.querySelector("#loading");
const underline = document.querySelector("#loading_underline");

document.addEventListener("DOMContentLoaded", () => {
    // Se toma el height de window y se le coloca al max-height del main 
    // para que el loader quede centrado y visible en pantalla.
    // Sin hacer esto, si se recargaba la pagina, por ejemplo al medio, el loader no sería visible
    const screnHeight = window.innerHeight;
    main.style.cssText = `max-height: ${screnHeight}px;`

    // Se oculta la página principal
    header.classList.add(classInvisible);
    main.classList.add(classInvisible);
    footer.classList.add(classInvisible);

    // Se setea la duracion y el contador para el loader, 
    // asi como tambien se le quita la class <hidden>
    let contador = 0;
    loading.classList.remove(classInvisible);
    const duracionAnimacion = 5000;
    const incrementoPorIteracion = 100 / (duracionAnimacion / 50);
    
    // Cada 40 ms
    const intervalo = setInterval(() => {
        // se aumenta el contador 
        contador += incrementoPorIteracion;
        // mientras sea menor/igual que 100 se aumentara la barra 
        if (contador <= 100) {
            underline.style.width = contador + "%";
        } else {
            // cuando sea mayor que 100 se realiza un clear interval.
            // se pone un max-height: auto al main y se muestra la pagina, además de ocultar el loader.
            clearInterval(intervalo);
            main.style.cssText = "max-height: auto;"
            loading.classList.add(classInvisible);
            header.classList.remove(classInvisible);
            main.classList.remove(classInvisible);
            footer.classList.remove(classInvisible);
        }
    }, 40); 
});